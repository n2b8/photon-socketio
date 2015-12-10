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

// SERVO
Servo serv;
int pos = 0;

void setup() {

    // Start DHT sensor
    dht.begin();
    
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
    oled.print("BrewFi"); // Display BrewFi to the screen
    oled.display();
    delay(1500);          // Delay 1.5 seconds
    
    // SERVO
    serv.attach(D0);
    serv.write(pos);
    Spark.function("setpos", setPos);
    Spark.variable("getpos", &pos, INT);

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
    
    oled.setCursor(0, 16);       // Repeat for humidity
    oled.setFontType(0);         
    oled.print("HMD: ");
    oled.setFontType(2);
    oled.print(humidity);
    
    oled.setCursor(0,32);        // Repeat for servo position
    oled.setFontType(0);
    oled.print("POS: ");
    oled.setFontType(2);
    oled.print(pos);
    
    oled.display();
    delay(100);
}

int setPos(String pstn) {
    pos = pstn.toInt();
    serv.write(pos);
    Spark.publish("Position", String(pos));
    return pos;
}