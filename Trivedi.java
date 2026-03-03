// Application.java
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class Application {

    @GetMapping("/")
    public String home() {
        return "Welcome to Vivek Kumar Trivedi Official Website!";
    }

    @GetMapping("/about")
    public String about() {
        return "Vivek Kumar Trivedi - CBSE Student | Self Learner | Web Development Enthusiast";
    }

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
