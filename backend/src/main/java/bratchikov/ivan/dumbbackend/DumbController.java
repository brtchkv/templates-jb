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
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.Reader;
import java.text.SimpleDateFormat;
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

    @PostMapping("/upload-csv-file-test")
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

    @PostMapping("/upload-csv-file")
    public String uploadCSVFileForUser(@RequestParam("file") MultipartFile file, @RequestHeader("X-Authentication") String token) {
        List<StatData> statistics = new ArrayList();
        User user = getUser(token);
        if (user == null) {
            logger.error("[uploadCSVFileForUser] User lookup failed");
            return null;
        }
        if (!storageBean.getUserTokens().containsKey(user.getId())) {
            logger.error("[uploadCSVFileForUser] New Stats for user -- ".concat(user.getUsername()));
            if (!file.isEmpty()) {
                try (Reader inputReader = new BufferedReader(new InputStreamReader(file.getInputStream()))) {
                    statistics = parseCSVStatData(inputReader);
                    storageBean.getUserStatistics().put(user.getId(), statistics);
                } catch (Exception e) {
                    logger.error(e.toString());
                }
            }
            return "OK";
        } else {
            return null;
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

    @RequestMapping("/statistics/all")
    public List<StatData> getAllStat(@RequestHeader("X-Authentication") String token) {
        User user = getUser(token);

        if (user == null) {
            logger.error("[getAllStat] User lookup failed");
            return null;
        }

        return storageBean.getUserStatistics().get(user.getId());
    }

    @RequestMapping("/statistics")
    public List<StatData> getFilteredStat(@RequestParam(value = "range") String range,
                                        @RequestParam(value = "date") String dateString,
                                        @RequestHeader("X-Authentication") String token) {
        User user = getUser(token);
        if (user == null) {
            logger.error("[getFilteredStat] User lookup failed");
            return null;
        }

        if (range != null && dateString != null && !range.isEmpty() && !dateString.isEmpty()) {
            List<StatData> statistics = storageBean.getUserStatistics().get(user.getId());
            if (statistics.isEmpty()) {
                return List.of();
            }

            Stream<StatData> staticsStream = statistics.stream();
            Date date;

            try {
                date = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ssX").parse(dateString);
            } catch (Exception e) {
                logger.error(e.toString());
                return null;
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
                    int noOfDays = 14; // two weeks
                    Calendar calendar = Calendar.getInstance();
                    calendar.setTime(date);
                    calendar.add(Calendar.DAY_OF_YEAR, noOfDays);
                    Date nextWeek = calendar.getTime();
                    staticsStream =
                            staticsStream.filter(c -> (c.getTimeStamp().getYear() == date.getYear()
                                    && c.getTimeStamp().getMonth() == date.getMonth()
                                    && c.getTimeStamp().compareTo(date) > 0
                                    && nextWeek.compareTo(c.getTimeStamp()) == 0));
                    break;
                case "quarter":
                    int quarter = (date.getMonth() / 3) + 1;
                    staticsStream =
                            staticsStream.filter(c -> (c.getTimeStamp().getYear() == date.getYear() &&
                                    ((c.getTimeStamp().getMonth() / 3) + 1) == quarter));
                    break;
            }
            return staticsStream.collect(Collectors.toList());
        }
        return null;
    }

    @RequestMapping("/register/check") //TODO:сделать регистрацию, по факту ее нет, только проверка на занятость email
    public AuthenticationResponse checkRegister(@RequestBody AuthenticationRequest req) {
        Optional<User> userOpt = storageBean.getUsers().stream()
                .filter((u) -> u.getUsername().equals(req.username)).findAny();
        if (!userOpt.isPresent()) {
            String token = SessionsUtils.createNewToken();
            storageBean.getUserTokens().put(token, userOpt.get().getId());
            logger.info("[checkRegister] Successful registration ".concat(req.username));
            return new AuthenticationResponse(true, token, userOpt.get().getRole());
        }
        logger.error("[checkRegister] Login failed");
        return new AuthenticationResponse(false, null, null);
    }

    @PostMapping("/login")
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

    @RequestMapping("/check")
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
    public static class AuthenticationResponse {
        private boolean success;
        @JsonInclude(JsonInclude.Include.NON_NULL)
        private String token;
        @JsonInclude(JsonInclude.Include.NON_NULL)
        private User.Role role;
    }
}
