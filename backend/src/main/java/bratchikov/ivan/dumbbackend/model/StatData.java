package bratchikov.ivan.dumbbackend.model;

import lombok.Data;
import java.util.Date;
import com.univocity.parsers.annotations.Format;
import com.univocity.parsers.annotations.Parsed;
import com.univocity.parsers.annotations.Replace;

@Data
public class StatData {
    @Parsed(field = "timestamp")
    @Format(formats = {"yyyy-MM-dd'T'HH:mm:ssX"})
    private Date timeStamp;

    @Parsed(field = "webstorm", defaultNullRead="0")
    @Replace(expression = "null", replacement = "0")
    private int webStorm;

    @Parsed(field = "goland", defaultNullRead="0")
    @Replace(expression = "null", replacement = "0")
    private int goLand;

    @Parsed(field = "idea", defaultNullRead="0")
    @Replace(expression = "null", replacement = "0")
    private int idea;
}
