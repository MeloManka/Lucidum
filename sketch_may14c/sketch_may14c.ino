#include <Adafruit_CC3000.h>
#include <SPI.h>
#include "utility/debug.h"
#include "utility/socket.h"
#include <stdio.h>
#include <stdlib.h>

#define CC3000_TINY_DRIVER

// These are the interrupt and control pins
#define ADAFRUIT_CC3000_IRQ   3  // MUST be an interrupt pin!
// These can be any two pins
#define ADAFRUIT_CC3000_VBAT  5
#define ADAFRUIT_CC3000_CS    10
// Use hardware SPI for the remaining pins
// On an UNO, SCK = 13, MISO = 12, and MOSI = 11
Adafruit_CC3000 cc3000 = Adafruit_CC3000(ADAFRUIT_CC3000_CS, ADAFRUIT_CC3000_IRQ, ADAFRUIT_CC3000_VBAT,
                                         SPI_CLOCK_DIVIDER); // you can change this clock speed

#define WLAN_SSID       "Pekarnia"           // cannot be longer than 32 characters!
#define WLAN_PASS       "144c3b2800"
// Security can be WLAN_SEC_UNSEC, WLAN_SEC_WEP, WLAN_SEC_WPA or WLAN_SEC_WPA2
#define WLAN_SECURITY   WLAN_SEC_WPA2

#define LISTEN_PORT           7    // What TCP port to listen on for connections.  The echo protocol uses port 7.
#define SPEED_RATE           115200

#define RECV_BUF_SIZE        40

Adafruit_CC3000_Client  client;

////////////////////////////////////////////////////////////////////////////////////
//  LEDs settings
////////////////////////////////////////////////////////////////////////////////////

#define LED_RECT_H  2
#define LED_RECT_W  5
const int ports_mapping[LED_RECT_H][LED_RECT_W] = {
   0,  1,  2,  7,  8,
   19, 18, 17, 16, 15
};

///////  Animations classes  ///////////////////////////////////////////////////////

class Animation
{
public:
  Animation() {}
  virtual ~Animation() {}
  
  virtual void init() {}
  virtual void run(int ms_delay) {}
  
  void clear_rect()
  {
    for(int i = 0; i < LED_RECT_H; ++i)
    {
      for(int j = 0; j < LED_RECT_W; ++j)
      {
        digitalWrite(ports_mapping[i][j], LOW);
      }
    } 
  }
};

class Animation_1 : public Animation
{
public:
  void init()
  {
    pos_1 = 0;
    old_pos_1 = 0;
  }
  
  void run(int ms_delay)
  {
    for(int i = 0;i < LED_RECT_H; ++i)
    {
      digitalWrite(ports_mapping[i][pos_1], HIGH);
      digitalWrite(ports_mapping[i][old_pos_1], LOW);
    }
    old_pos_1 = pos_1;
    pos_1 = (((pos_1 + 1) == LED_RECT_W) ? 0 : (pos_1 + 1));
    delay(ms_delay);
  }
private:
  int pos_1;
  int old_pos_1;
};

class Animation_2 : public Animation
{
public:
  void init()
  {
    pos_2_h = 1;
    pos_2_l = LED_RECT_W - 2;
    old_pos_2_h = 0;
    old_pos_2_l = LED_RECT_W - 1; 
  }
  
  void run(int ms_delay)
  {
    digitalWrite(ports_mapping[0][pos_2_h], HIGH);
    digitalWrite(ports_mapping[1][pos_2_l], HIGH);
    digitalWrite(ports_mapping[0][old_pos_2_h], LOW);
    digitalWrite(ports_mapping[1][old_pos_2_l], LOW);
  
    old_pos_2_h = pos_2_h;
    old_pos_2_l = pos_2_l;
    pos_2_h = (((pos_2_h + 1) == LED_RECT_W) ? 0 : (pos_2_h + 1));
    pos_2_l = ((pos_2_l == 0) ? (LED_RECT_W - 1) : (pos_2_l - 1));
  
    delay(ms_delay);
  }
  
private:
  int pos_2_h;
  int pos_2_l;
  int old_pos_2_h;
  int old_pos_2_l;
};


class Animation_3 : public Animation
{
public:
  void init()
  {
    first_i = 0;
    first_j = 3;
    fdi = 0;
    fdj = 1;
    
    last_i = 0;
    last_j = 0;
    ldi = 0;
    ldj = 1;
  }
  
  void run(int ms_delay)
  {
    digitalWrite(ports_mapping[first_i][first_j], HIGH);
    digitalWrite(ports_mapping[last_i][last_j], LOW);
  
    if(!((first_i + fdi) >= 0 && (first_i + fdi) < LED_RECT_H && (first_j + fdj) >= 0 && (first_j + fdj) < LED_RECT_W))
    {
      int tmp = fdi;
      fdi = fdj;
      fdj = -tmp;
    }
  
    first_i += fdi;
    first_j += fdj;
  
    if(!((last_i + ldi) >= 0 && (last_i + ldi) < LED_RECT_H && (last_j + ldj) >= 0 && (last_j + ldj) < LED_RECT_W))
    {
      int tmp = ldi;
      ldi = ldj;
      ldj =  -tmp;
    }
  
    last_i += ldi;
    last_j += ldj;
  
    delay(ms_delay);
  }
  
private:
  int first_i;
  int first_j;
  int fdi;
  int fdj;
  int last_i;
  int last_j;
  int ldi;
  int ldj;
};

class Animation_4 : public Animation
{
public:
  void run(int ms_delay)
  {
    digitalWrite(ports_mapping[rand() % LED_RECT_H][rand() % LED_RECT_W], HIGH);
    digitalWrite(ports_mapping[rand() % LED_RECT_H][rand() % LED_RECT_W], LOW);
  
    delay(ms_delay);
  }
};

class StaticImage : public Animation
{
public:
  void setStates(int * arr)
  {
    for(int i = 0; i< LED_RECT_H; ++i)
    {
      for(int j = 0; j < LED_RECT_W; ++j)
      {
        states[i][j] = arr[i * LED_RECT_W + j];
      }
    }
  }
  
  void init(void)
  {
    for(int i = 0; i< LED_RECT_H; ++i)
    {
      for(int j = 0; j < LED_RECT_W; ++j)
      {
        digitalWrite(ports_mapping[i][j], states[i][j]);
      }
    }
  }
private:
  int states[LED_RECT_H][LED_RECT_W];
};

/////////////  End  ////////////////////////////////////////////////////////////////

Animation * animations[5];
Animation * current;

void setup(void)
{
  initWiFiShield();
  
  initLEDsRect();
  initAnimations();
  
  connect2Host(); 
}

void loop(void)
{
  int count = 0;
  int num_buf[20];
  
  if(client) {
    if(client.available() > 0) {
      char buf[RECV_BUF_SIZE];
      int result = client.read(buf, RECV_BUF_SIZE);
      
      //Serial.print("Msg: ");
      //Serial.println(buf);
      
      parseMsg(buf, num_buf, &count);
 
      if(count == 1)
      {
        setAnimation(num_buf[0]);
      }
      else
      {
        current->clear_rect();
        current = animations[5];
        StaticImage *st = (StaticImage *)current;
        st->setStates(num_buf);
        current->init();
      }
    }
  }
  current->run(100);
}

void initAnimations(void)
{
  animations[0] = new Animation;
  animations[1] = new Animation_1;
  animations[2] = new Animation_2;
  animations[3] = new Animation_3;
  animations[4] = new Animation_4;
  animations[5] = new StaticImage;
  
  current = animations[0];
  current->init();
  current->clear_rect();
}

void setAnimation(int num)
{
  current->clear_rect();
  current = animations[num];
  current->init();
}

void initLEDsRect(void)
{
  for(int i = 0;i < LED_RECT_H; ++i)
  {
    for(int j = 0;j < LED_RECT_W; ++j)
    {
      pinMode(ports_mapping[i][j], OUTPUT);
    }
  }
}

void initWiFiShield(void)
{
  //Serial.begin(SPEED_RATE);

  //Serial.print("Free RAM: "); Serial.println(getFreeRam(), DEC);
  
  /* Initialise the module */
  //Serial.println(F("\nInitializing..."));
  if (!cc3000.begin())
  {
    //Serial.println(F("Couldn't begin()! Check your wiring?"));
    while(true);
  }
  
  //Serial.print(F("\nAttempting to connect to ")); Serial.println(WLAN_SSID);
  if (!cc3000.connectToAP(WLAN_SSID, WLAN_PASS, WLAN_SECURITY)) {
    //Serial.println(F("Failed!"));
    while(true);
  }
   
  //Serial.println(F("Connected!"));
  
  //Serial.println(F("Request DHCP"));
  while (!cc3000.checkDHCP())
  {
    delay(100); // ToDo: Insert a DHCP timeout!
  }
  //Serial.println(F("\nDHCP done!"));
}

void connect2Host(void)
{
  // Host settings
  uint32_t host_ip = cc3000.IP2U32(192,168,1,5);
  uint16_t host_port = 6969;
  
  // Attempt connect to server
  do {
    client = cc3000.connectTCP(host_ip, host_port);
    delay(100);
    //Serial.println("Another one\n");
  } while(!client);
  
  //Serial.println("\nConnected to host!");
}

void parseMsg(const char * str, int * arr, int * n)
{
  int pos = 0;
  int count = parseInt(str, &pos);
  
  for(int i = 0; i < count; ++i)
  {
    arr[i] = parseInt(str, &pos);
  }
  *n = count;
}

int parseInt(const char * str, int * offset)
{
  int buf_pos = 0;
  char buf[10];
  while(str[*offset] != ' ')
  {
    buf[buf_pos++] = str[(*offset)++];
  }
  buf[buf_pos] = '\0';
  (*offset)++;
  return atoi(buf);
}
