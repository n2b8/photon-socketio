#include "Adafruit_DHT/Adafruit_DHT.h" // This can be included from the Particle Build IDE

// DHT parameters
#define DHTPIN 5                       // Signal is going to digital pin 5
#define DHTTYPE DHT22                  // My particular modal of sensor (the white one is usually DHT22 and the blue one is usually DHT11)

// Variables
int tempC;
int tempF;
int humidity;


// DHT sensor
DHT dht(DHTPIN, DHTTYPE);

void setup() {

    // Start DHT sensor
    dht.begin();

}

void loop() {
    
    // Temperature measurement
    tempC = dht.getTempCelcius();
    tempF = tempC * 9 / 5 + 32;
    
    // Humidity measurement
    humidity = dht.getHumidity();
    
    // Publish data
    Spark.publish("Temperature", String(tempF) + " °F");
    delay(1000);
    Spark.publish("Humidity", String(humidity) + "%");
    delay(1000);

}