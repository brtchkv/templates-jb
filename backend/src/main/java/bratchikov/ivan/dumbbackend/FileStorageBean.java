package bratchikov.ivan.dumbbackend;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Data
@Component
@NoArgsConstructor
public class FileStorageBean {
    public static List<String> allowedTypes = List.of("image/png", "image/jpeg", "image/gif");
    public static Map<String, String> mimeTypeToExtension = Map.of(
        "image/png", "png",
        "image/jpeg", "jpg",
        "image/gif", "gif",
        "multipart/form-data", "csv"
    );
    public static Map<String, MediaType> extensionToMediaType = Map.of(
        "png", MediaType.IMAGE_PNG,
        "jpg", MediaType.IMAGE_JPEG,
        "gif", MediaType.IMAGE_GIF
    );

    private Map<String, byte[]> files = new HashMap<>();

    @SneakyThrows
    public String saveFile(MultipartFile file) {
        StringBuilder filename = new StringBuilder();
        filename.append(files.size());

        if (file.getOriginalFilename() != null) {
            filename.append('-').append(file.getOriginalFilename());
        }
        filename.append(".").append(mimeTypeToExtension.get(file.getContentType()));

        files.put(filename.toString(), file.getBytes());
        return filename.toString();
    }

    public boolean fileExists(String filename) {
        return files.containsKey(filename);
    }

    public byte[] getFileContent(String filename) {
        return files.get(filename);
    }
}
