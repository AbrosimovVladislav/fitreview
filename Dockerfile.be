FROM openjdk:21-jdk-slim
#FROM openjdk:17-jdk-slim
#COPY ${JAR_FILE} app.jar
ARG JAR_FILE=target/*.jar
COPY backend/target/fitreview-1.0.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]