package bratchikov.ivan.dumbbackend;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.univocity.parsers.common.processor.BeanListProcessor;
import com.univocity.parsers.csv.CsvParser;
import com.univocity.parsers.csv.CsvParserSettings;
import bratchikov.ivan.dumbbackend.model.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.Reader;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import java.time.temporal.TemporalAccessor;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@RestController
@RequestMapping("/")
public class DumbController {
    Logger logger = LoggerFactory.getLogger(DumbController.class);

    private final StorageBean storageBean;
    private final FileStorageBean fileStorageBean;

    public DumbController(StorageBean storageBean, FileStorageBean fileStorageBean) {
        this.storageBean = storageBean;
        this.fileStorageBean = fileStorageBean;
    }

    /**
     * Method for testing csv parse with statistics bean.
     *
     * @param  file  file which will be uploaded to the for parser test
     * @return       parsed collection
     */
    @PostMapping("/api/upload-csv-file-test")
    public String uploadCSVFileTest(@RequestParam("file") MultipartFile file) {
        List<StatData> statistics = new ArrayList();
        if (!file.isEmpty()) {
            try (Reader inputReader = new BufferedReader(new InputStreamReader(file.getInputStream()))) {
                statistics = parseCSVStatData(inputReader);
            } catch (Exception e) {
                logger.error(e.toString());
            }
        }
        return Arrays.toString(statistics.toArray());
    }

    /**
     * Method for csv stats file upload for a user based on the auth token.
     *
     * @param  file  file which will be uploaded to the for parser test
     * @param  token X-Authentication token from the request header
     * @return       response status or {'message': string} in case of error
     */
    @PostMapping("/api/upload-csv-file")
    public ResponseEntity uploadCSVFileForUser(@RequestParam("file") MultipartFile file, @RequestHeader("X-Authentication") String token) {
        List<StatData> statistics = new ArrayList();
        User user = getUser(token);
        if (user == null) {
            logger.error("[uploadCSVFileForUser] User lookup failed");
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(new ResponseMessage("No user found"));
        }
        if (!storageBean.getUserTokens().containsKey(user.getId())) {
            logger.info("[uploadCSVFileForUser] New Stats for user -- ".concat(user.getUsername()));
            if (!file.isEmpty()) {
                try (Reader inputReader = new BufferedReader(new InputStreamReader(file.getInputStream()))) {
                    statistics = parseCSVStatData(inputReader);
                    storageBean.getUserStatistics().put(user.getId(), statistics);
                    logger.info("size ".concat(String.valueOf(storageBean.getUserStatistics().size())));
                } catch (Exception e) {
                    logger.error(e.toString());
                    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResponseMessage("Wrong file " +
                            "format: parse error"));
                }
            }
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage("Successfully uploaded"));
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResponseMessage("No file section for this " +
                    "user"));
        }
    }

    private List<StatData> parseCSVStatData(Reader inputReader) {
        List<StatData> statistics;
        BeanListProcessor<StatData> rowProcessor = new BeanListProcessor<StatData>(StatData.class);
        CsvParserSettings settings = new CsvParserSettings();
        settings.setHeaderExtractionEnabled(true);
        settings.setRowProcessor(rowProcessor);
        settings.setEmptyValue("0");
        settings.setNullValue("0");
        CsvParser parser = new CsvParser(settings);
        parser.parse(inputReader);
        statistics = rowProcessor.getBeans();
        return statistics;
    }

    /**
     * Get all stats for a given user.
     *
     * @param  token X-Authentication token from the request header
     * @return       list of statData rows or {'message': string} in case of error
     */
    @RequestMapping("/api/statistics/all")
    public ResponseEntity getAllStat(@RequestHeader("X-Authentication") String token) {
        User user = getUser(token);

        if (user == null) {
            logger.error("[getAllStat] User lookup failed");
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(new ResponseMessage("No user found"));
        }

        return ResponseEntity.status(HttpStatus.OK).body(storageBean.getUserStatistics().get(user.getId()));
    }

    /**
     * Get the total count of statistics records for a given user.
     *
     * @param  token X-Authentication token from the request header
     * @return       int or {'message': string} in case of error
     */
    @RequestMapping("/api/statistics/count")
    public ResponseEntity getAllStatCount(@RequestHeader("X-Authentication") String token) {
        User user = getUser(token);

        if (user == null) {
            logger.error("[getAllStat] User lookup failed");
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(new ResponseMessage("No user found"));
        }

        return ResponseEntity.status(HttpStatus.OK).body(storageBean.getUserStatistics().get(user.getId()).size());
    }

    /**
     * Get filtered statistics base on range and start date of a slice for a given user.
     *
     * @param  range Range of a slice: day, week, month, quarter or a year
     * @param  dateString Starting date of a range slice in ISO timestamp format
     * @param  token X-Authentication token from the request header
     * @return       list for stat data or {'message': string} in case of error
     */
    @RequestMapping("/api/statistics")
    public ResponseEntity getFilteredStat(@RequestParam(value = "range") String range,
                                  @RequestParam(value = "date") String dateString,
                                  @RequestHeader("X-Authentication") String token) {
        User user = getUser(token);
        if (user == null) {
            logger.error("[getFilteredStat] User lookup failed");
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(new ResponseMessage("No user found"));
        }

        if (range != null && dateString != null && !range.isEmpty() && !dateString.isEmpty()) {
            List<StatData> statistics = storageBean.getUserStatistics().get(user.getId());
            if (statistics.isEmpty()) {
                return ResponseEntity.status(HttpStatus.OK).body(List.of());
            }

            Stream<StatData> staticsStream = statistics.stream();
            Date date;

            try {
                TemporalAccessor ta = DateTimeFormatter.ISO_INSTANT.parse(dateString);
                Instant i = Instant.from(ta);
                date = Date.from(i);
            } catch (Exception e) {
                logger.error(e.toString());
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResponseMessage("Wrong start date " +
                        "format"));
            }

            switch (range.toLowerCase()) {
                case "day":
                    staticsStream =
                            staticsStream.filter(c -> (c.getTimeStamp().equals(date)));
                    break;
                case "month":
                    staticsStream =
                            staticsStream.filter(c -> (c.getTimeStamp().getYear() == date.getYear()
                                    && c.getTimeStamp().getMonth() == date.getMonth()));
                    break;
                case "week":
                    int noOfDays = 7;
                    Calendar calendar = Calendar.getInstance();
                    calendar.setTime(date);
                    calendar.add(Calendar.DAY_OF_YEAR, noOfDays);
                    Date nextWeek = calendar.getTime();
                    staticsStream =
                            staticsStream.filter(c -> (c.getTimeStamp().getYear() == date.getYear()
                                    && c.getTimeStamp().getMonth() == date.getMonth()
                                    && c.getTimeStamp().compareTo(date) > 0
                                    && nextWeek.compareTo(c.getTimeStamp()) <= 0));
                    break;
                case "quarter":
                    int quarter = (date.getMonth() / 3) + 1;
                    staticsStream =
                            staticsStream.filter(c -> (c.getTimeStamp().getYear() == date.getYear() &&
                                    ((c.getTimeStamp().getMonth() / 3) + 1) == quarter));
                    break;
                case "year":
                    staticsStream =
                            staticsStream.filter(c -> (c.getTimeStamp().getYear() == date.getYear()));
                    break;
            }
            return  ResponseEntity.status(HttpStatus.OK).body(staticsStream.collect(Collectors.toList()));
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResponseMessage("No range or start date " +
                "specified"));
    }

    /**
     * Get filtered statistics base on range and start date of a slice for a given user.
     *
     * @param req JSON of user data in the format of {username: string, password: string}
     * @return     Object of user token and role in the format of {token: string, role: string}
     */
    @PostMapping("/api/auth/login")
    public AuthenticationResponse authenticate(@RequestBody AuthenticationRequest req) {
        Optional<User> userOpt = storageBean.getUsers().stream()
                .filter((u) -> u.getUsername().equals(req.username) && u.getPassword().equals(req.password)).findAny();
        if (userOpt.isPresent()) {
            String token = SessionsUtils.createNewToken();
            storageBean.getUserTokens().put(token, userOpt.get().getId());
            logger.info("[authenticate] Successful login ".concat(req.username));
            return new AuthenticationResponse(true, token, userOpt.get().getRole());
        }
        logger.error("[authenticate] Login failed");
        return new AuthenticationResponse(false, null, null);
    }

    /**
     * Check whether user exists with a given token.
     *
     * @param token JX-Authentication token from the request header
     * @return      Object of user token and role in the format of {token: string, role: string}
     */
    @RequestMapping("/api/auth/check")
    public AuthenticationResponse checkAuthentication(@RequestHeader("X-Authentication") String token) {
        User user = getUser(token);
        if (user == null) {
            return new AuthenticationResponse(false, null, null);
        }
        return new AuthenticationResponse(true, token, user.getRole());
    }

    private User getUser(String token) {
        if (!storageBean.getUserTokens().containsKey(token)) {
            return null;
        }

        long userId = storageBean.getUserTokens().get(token);
        Optional<User> userOpt = storageBean.getUsers().stream().filter(u -> u.getId() == userId).findAny();
        return userOpt.orElse(null);
    }

    @Data
    @NoArgsConstructor
    public static class AuthenticationRequest {
        private String username;
        private String password;
    }

    @Data
    @AllArgsConstructor
    public static class ResponseMessage {
        private String message;
    }

    @Data
    @AllArgsConstructor
    public static class AuthenticationResponse {
        private boolean success;
        @JsonInclude(JsonInclude.Include.NON_NULL)
        private String token;
        @JsonInclude(JsonInclude.Include.NON_NULL)
        private User.Role role;
    }
}
