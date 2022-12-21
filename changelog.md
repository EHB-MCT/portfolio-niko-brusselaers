# changelog 

## [0.1.0] - 2022-12-06 

### added
 - MYSQL database
 - phpMyAdmin 
 - Mosquitto broker
 - MQTT api
   - inserting incomeing sensor data inside database
   - inserting incoming new rooms inside database

## [0.2.0] - 2022-12-08

### added
  - api
    - deleteRoom endpoint
    - getAllRooms endpoint
    - getRoomData endpoint

## [0.2.1] - 2022-12-16

### fixed

  - added a health check to see if the mysql database is fully opertional to prevent rest and mqtt api from crashing from being unable to       connect to database

## [0.3.1] - 2022-12-16

### added
  - api
    - addRoom endpoint

## [0.3.2] - 2022-12-16

### fixed
  - api
    - changed getRoomData from GET to POST endpoint
  - mysql
    - typo in sensorData table

### removed
  - api
    - receiveRoomData endpoint

## [0.4.2] - 2022-12-19

### added
  - api
    - login endpoint
    - loginWithId endpoint
  - mysql
    - users table with collumns: id, username and password

## [0.5.2] - 2022-12-20

### added
  - front-end website
    - add rooms to collect data from
    - remove rooms
    - view all noise level data from saved rooms

## [0.5.3] - 2022-12-20

### added
  - api
    - periodic restart to make sure the api stays online

## [0.5.4] - 2022-12-21

### changed
  - api
    - getAllRooms endpoint: refactor code to optimize

## [0.5.5] - 2022-12-21

### changed
  - api
    - getAllRooms endpoint: refactor code of endpoints to optimize:
      - getRoomData
      - addRoom
      - deleteRoom
      - login
      - loginWithId

## [0.5.6] 2022-12-21

  ### fixed
  - api
    - added error handeling for getRoomData

  ### removed
  - api
    - unnecessary console.log() from code 
    - unused updateRoomSensor endpoint

