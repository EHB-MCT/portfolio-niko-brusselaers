# Portfolio Brusselaers Niko

this is a fullstack application with the function to receive noise level data from arduino sensors,
store all of this data inside a database, and display average noise levels over the course of an hour,day,week,month.
this was created to be used by universities, colleges, study cafe's, library, ... to setup this application to give
people an general overview how loud it is in certain room/spaces and to let plan to work in peace.
## Table of content
- [Portfolio Brusselaers Niko](#portfolio-brusselaers-niko)
  - [Table of content](#table-of-content)
  - [Instalation](#instalation)
    - [Requirements](#requirements)
    - [Setup](#setup)
  - [license](#license)
  - [links](#links)
## Instalation
### Requirements
to install and run this application you will need the following:
  - docker: 
    - windows: https://docs.docker.com/desktop/install/windows-install/
    - linux: https://docs.docker.com/desktop/install/linux-install/
  - docker-compose:
    - windows(comes already installed with docker):https://docs.docker.com/desktop/install/windows-install/
    - linux: https://docs.docker.com/compose/install/linux/
  if you use arduino to record data:
  - arduino ide: https://www.arduino.cc/en/software

to make certain parts of this application available outside of your local network, you will need to open following port on your router:
  - Front-end website: 80
  - phpMyAdmin: 8080

if you want to you an arduino to collect data, use a arduino capable of connecting to wifi networks as for example:
  - Arduino Uno Wifi
  - Arduino ESP32
  - arduino ESP8266
when choosing a sound sensor, make sure the sensor is capable of detecting noise levels

### Setup
Create a new file ".env" at roof of file directory and add the following Parameters:
  - `MYSQL_USERNAME = "root"`
  - `MYSQL_ROOT_PASSWORD= "password for root"`
  - `MYSQL_DATABASE="database name"`

open shell terminal and navigate to the folder containing application files, and run the command `docker-compose up --build -d`

if you are using arduino devices to record data:
  - psuedo data: unzip psuedo data zip file and rename folder to `arduino_volume_sensor_mqtt`.
  open up `arduino_volume_sensor_mqtt/ino` inside folder.
  Update espMQTTClient and enter all with your wifi and broker credentials
  update room to the name of the room you are placing it in and set the desired device name in the deviceName variable.
  Connect your arduino to the computer and select the drivers the arduino needs and the usb port its been connected to.
  Upload your data to the arduino device.


  - sensor data: unzip psuedo data zip file and rename folder to `arduino_volume_sensor_mqtt`.
  open up `arduino_volume_sensor_mqtt/ino` inside folder.
  Update espMQTTClient and enter all with your wifi and broker credentials
  update room to the name of the room you are placing it in and set the desired device name in the deviceName variable,
  update the soundSensorPin variable to the pin where you going to connect the analog pin of the sound sensor.
  Connect your arduino to the computer and select the drivers the arduino needs and the usb port its been connected to.
  Upload your data to the arduino device. Connect a comptible sound sensor to the arduino

## license
  - [license](license.md)

## links
  - [contributing](CONTRIBUTING.md)
  - [Code of Conduct](CODE_OF_CONDUCT.md)
  - [changelog](changelog.md)
  - [references](references.md)