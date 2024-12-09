FROM openjdk:21-jdk-slim
ARG JAR_FILE=backend/target/fitreview-1.0.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]
