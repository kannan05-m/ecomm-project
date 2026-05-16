FROM eclipse-temurin:21-jdk
WORKDIR /app
COPY . .
RUN chmod +x gradlew
RUN ./gradlew build -x test
RUN ls build/libs/
CMD java -jar $(ls build/libs/*.jar | grep -v plain)
