package co.fitreview.backend.exception;

public class EntityNotFoundException extends RuntimeException {

    public EntityNotFoundException(String entityName, String value, String message) {
        super("Entity <" + entityName + "> with value <" + value + "> not found. Message: " + message);
    }

}
