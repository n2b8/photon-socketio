// This #include statement was automatically added by the Particle IDE.
#include "SparkFunMicroOLED/SparkFunMicroOLED.h"

// This #include statement was automatically added by the Particle IDE.
#include "Adafruit_DHT/Adafruit_DHT.h"

// DHT parameters
#define DHTPIN 5
#define DHTTYPE DHT22

// Variables
int temp;
int humidity;

// DHT sensor
DHT dht(DHTPIN, DHTTYPE);

// OLED
MicroOLED oled;

void setup() {

    // Start DHT sensor
    dht.begin();
    
    // OLED
    oled.begin();     // Initialize the OLED
    oled.clear(ALL);  // Clear the display's internal memory
    oled.display();   // Display what's in the buffer (splashscreen)
    delay(1000);      // Delay 1000 ms
    oled.clear(PAGE); // Clear the buffer.

    randomSeed(analogRead(A0) + analogRead(A1));

}

void loop() {
    
    // Temperature
    temp = dht.getTempFarenheit();
    
    // Humidity
    humidity = dht.getHumidity();
    
    // Publish data
    Spark.publish("Temperature", String(temp) + " °F");
    delay(1000);
    Spark.publish("Humidity", String(humidity) + "%");
    delay(1000);
    
    // OLED
    printData();

}

void printData() {
    oled.clear(PAGE);            // Clear the display
    
    oled.setCursor(0, 0);        // Set cursor to top-left
    oled.setFontType(0);         // Smallest font
    oled.print("TMP: ");         // Print Temp label
    oled.setFontType(2);         // 7-segment font
    oled.print(temp);            // Print temp reading
    
    oled.setCursor(0, 24);       // Set cursor to bottom-left
    oled.setFontType(0);         // Repeat
    oled.print("HMD: ");
    oled.setFontType(2);
    oled.print(humidity);
    
    oled.display();
    delay(100);
}