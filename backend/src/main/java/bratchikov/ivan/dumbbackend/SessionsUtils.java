package bratchikov.ivan.dumbbackend;

import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;
import java.util.Date;
import java.util.Random;

public class SessionsUtils {
    public static String createNewToken() {
        try {
            Random rnd = new Random(new Date().getTime());
            char[] bytes = new char[256];
            for(int i = 0; i < 256; i++)
                bytes[i] = (char) rnd.nextInt();

            PBEKeySpec spec = new PBEKeySpec(bytes, "StrongSalt".getBytes(), 1000, 64 * 4);
            SecretKeyFactory skf = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA1");

            return toHex(skf.generateSecret(spec).getEncoded());
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public static String toHex(byte[] bytes){
        char[] digits = new char[]{'0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'};
        StringBuilder str = new StringBuilder();
        for(byte b : bytes)
            str.append(digits[(b>>4) & 0xF]).append(digits[b & 0xF]);
        return str.toString();
    }
}
