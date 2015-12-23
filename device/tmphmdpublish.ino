// This #include statement was automatically added by the Particle IDE.
#include "SparkFunMicroOLED/SparkFunMicroOLED.h"

// This #include statement was automatically added by the Particle IDE.
#include "Adafruit_DHT/Adafruit_DHT.h"

// DHT parameters
#define DHTPIN 5
#define DHTTYPE DHT22

// DHT sensor
DHT dht(DHTPIN, DHTTYPE);
int temp;
int humidity;

// OLED
MicroOLED oled;

void setup() {

    // Start DHT sensor
    dht.begin();

    // OPEN UP VARIABLES
    Spark.variable("temp", &temp, INT);
    Spark.variable("humidity", &humidity, INT);

    // OLED INIALIZATION
    oled.begin();        // Initialize the OLED
    oled.clear(ALL);     // Clear the display's internal memory
    oled.clear(PAGE);    // Clear the buffer.

    // CENTER CURSOR
    int middleX = oled.getLCDWidth() / 2;  // Get X axis center
    int middleY = oled.getLCDHeight() / 2; // Get Y axis center
    oled.setCursor(middleX - (oled.getFontWidth() * (3)), middleY - (oled.getFontWidth() / 2)); // Set cursor as close to the center as possible.

    // PRINT TITLE
    oled.setFontType(0);  // Smallest font
    oled.print("Photon"); // Display BrewFi to the screen
    oled.display();
    delay(1500);
    oled.clear(PAGE);
    oled.setCursor(middleX - (oled.getFontWidth() * (3)), middleY - (oled.getFontWidth() / 2));
    oled.print("SocketIO");
    oled.display();
    delay(1500);

}

void loop() {

    // Temperature
    temp = dht.getTempFarenheit();

    // Humidity
    humidity = dht.getHumidity();

    // Publish data
    Spark.publish("Temperature", String(temp) + " °F");
    Spark.publish("Humidity", String(humidity) + "%");

    // OLED
    printData();

    // DELAY
    delay(5000);

}

void printData() {
    oled.clear(PAGE);            // Clear the display

    oled.setCursor(0, 0);        // Set cursor to top-left
    oled.setFontType(0);         // Smallest font
    oled.print("TMP: ");         // Print Temp label
    oled.setFontType(2);         // 7-segment font
    oled.print(temp);            // Print temp reading

    oled.setCursor(0, 20);       // Repeat for humidity
    oled.setFontType(0);
    oled.print("HMD: ");
    oled.setFontType(2);
    oled.print(humidity);

    oled.display();
}
