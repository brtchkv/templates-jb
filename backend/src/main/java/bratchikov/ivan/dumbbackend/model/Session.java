package bratchikov.ivan.dumbbackend.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Session {
    private String key;
    private Status status;
    private long start;
    private long end;

    public enum Status {
        STARTED,
        FINISHED,
        UPCOMING
    }
}