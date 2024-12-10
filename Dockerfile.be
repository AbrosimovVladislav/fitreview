FROM openjdk:21-jdk-slim
ARG JAR_FILE=target/*.jar
COPY back/target/fitreview-1.0.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]