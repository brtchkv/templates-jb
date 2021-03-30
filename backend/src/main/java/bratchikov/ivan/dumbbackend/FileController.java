package bratchikov.ivan.dumbbackend;

import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/static/")
@ConditionalOnProperty(name = "scheduling.enabled", matchIfMissing = true,
        havingValue = "false")
public class FileController {

    private final FileStorageBean fileStorageBean;

    public FileController(FileStorageBean fileStorageBean) {
        this.fileStorageBean = fileStorageBean;
    }

    @GetMapping("/{filename}")
    public ResponseEntity<?> getLogo(@PathVariable("filename") String filename) {
        if (!fileStorageBean.fileExists(filename)) {
            return ResponseEntity.notFound().build();
        }

        String[] parts = filename.split("\\.");
        String ext = parts[parts.length-1];

        return ResponseEntity.ok().contentType(FileStorageBean.extensionToMediaType.get(ext)).body(fileStorageBean.getFileContent(filename));
    }
}
