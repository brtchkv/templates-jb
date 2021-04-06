package bratchikov.ivan.dumbbackend;

import bratchikov.ivan.dumbbackend.model.*;
import lombok.Data;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;

import java.io.*;
import java.util.*;
import com.univocity.parsers.common.processor.BeanListProcessor;
import com.univocity.parsers.csv.CsvParser;
import com.univocity.parsers.csv.CsvParserSettings;

@Data
@Component
public class StorageBean {
    private List<User> users = new ArrayList<>();
    private Map<String, Long> userTokens = new HashMap<>();
    private Map<Long, List<StatData>> userStatistics = new HashMap<>();
    Logger logger = LoggerFactory.getLogger(StorageBean.class);

    public StorageBean() {
        List<StatData> statistics = new ArrayList();

        User student = new User(1, User.Role.STUDENT, "student", "Ivan Bratchikov (Itmo)", "123");
        User privateUser = new User(2, User.Role.REGULAR, "user", "Ivan Bratchikov (Personal)", "123");
        users.add(student);
        users.add(privateUser);

        try (Reader inputReader =
                     new BufferedReader
                             (new BufferedReader(new InputStreamReader(new ClassPathResource("fls-data.csv").getInputStream())))) {
            BeanListProcessor<StatData> rowProcessor = new BeanListProcessor<StatData>(StatData.class);
            CsvParserSettings settings = new CsvParserSettings();
            settings.setHeaderExtractionEnabled(true);
            settings.setRowProcessor(rowProcessor);
            settings.setEmptyValue("0");
            settings.setNullValue("0");
            CsvParser parser = new CsvParser(settings);
            parser.parse(inputReader);
            statistics = rowProcessor.getBeans();
            logger.info("Opened File");
        } catch (Exception e) {
            logger.error(e.toString());
        }

        userStatistics.put(student.getId(), statistics);
        userStatistics.put(privateUser.getId(), statistics);

        logger.info("Initial data loaded");
    }
}
