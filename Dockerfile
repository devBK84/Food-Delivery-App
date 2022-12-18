FROM openjdk:19

ENV ENVIROMENT=prod

MAINTAINER Bassam Kharashfeh <bk@kharashfeh.com>

EXPOSE 8080

ADD ./backend/target/backend-0.0.1-SNAPSHOT.jar app.jar

CMD ["sh", "-c", "java -jar /app.jar"]