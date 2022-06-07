package md.exem.entity;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;

@NoArgsConstructor
@AllArgsConstructor
public class ErrorMessage {

    private HttpStatus status;
    private String message;
}
