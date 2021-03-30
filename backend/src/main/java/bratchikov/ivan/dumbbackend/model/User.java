package bratchikov.ivan.dumbbackend.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class User {
    private long id;
    private Role role;
    private String username;
    private String name;
    private String password;

    public enum Role {
        STUDENT,
        REGULAR
    }
}
