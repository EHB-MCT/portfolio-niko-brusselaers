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