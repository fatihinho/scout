FROM maven:3.8.3-openjdk-17 AS build
COPY . .
RUN mvn clean package -Pprod -DskipTests

FROM openjdk:17
COPY --from=build /target/scout-0.0.1.jar scout.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","scout.jar"]