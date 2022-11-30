const express = require("express")
const bodyParser = require('body-parser')
const connection = require('./database/connection.js')

const {
    request,
    response
} = require("express")

const app = express()
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
app.use(express.static("../docs"))


app.listen(3000, (err) => {
    if (!err) {
        console.log("http://localhost");
    } else {
        console.log(err);
    }
})

/**
 * object template
 * 
 * room{
 *      id(int)
 *      roomName(str),
 *      roomSensor(str),
 *      temperatureData(arr(int))
 * }
 * 
 * roomData{
 *          roomSensor(str),
 *          temperatureData(arr(int))
 * 
 * }
 */



/**
 * GET endpoint, check if API is online
 * 
 * @returns html page with list of endpoints
 */
app.get("/", (request, response) => {
    response.redirect("index.html")
})


/**
 * GET endpoint, return object room
 * 
 * @params object roomName(str)
 * @returns object with result object room
 */
app.get("/getRoomData", async (request, response) => {

    //TODO: fetch room noise level data from database
    connection.connect();
    try {
        let result = await connection.execute(`INSERT INTO sensorData (room, sensorDevice,Value) VALUES (?,?,?)`, ["B.101", "ESP32-A", 2251])
        console.log(result);
        response.status(200).send(result)
    } catch (error) {
        console.log(error);
        response.status(400).send(error)
    }


})

/**
 * GET endpoint, return the list of rooms
 * 
 * @returns object with result object rooms(arr(room))
 */
app.get("/getAllRoomsData", async (request, response) => {

    //TODO: fetch list of rooms noise level data from database


})

/**
 * POST endpoint, insert sensor data into database
 * 
 * @params object roomData, containing roomSensor(str) and temperatureData(arr(int))
 * @returns object with result of statuscode(str)
 */
app.post("/receiveRoomData", (request, response) => {

    //TODO: retrieve room noise level data from sensor and insert inside database


})

/**
 * POST endpoint, insert new room into database
 * 
 * @params object room, containing roomName(str) and roomSensor(str)
 * @returns object with result of inserted room
 */
app.post("/addRoom", (request, response) => {

    //TODO: insert room inside database

})

/**
 * PUT endpoint, update existing room inside database
 * 
 * @params object room, containing id(int), roomName(str) and newRoomSensor(str)
 * @returns object with result of updated room
 */
app.put("/updateRoomSensor", (request, response) => {

    //TODO: update room sensor from certain room inside database

})



/** 
 * DELETE endpoint, delete room out database
 * 
 * @params object room, containing id(int) and roomName(str) 
 * @returns object with result of statuscode(str)
 */
app.delete("/deleteRoom", (request, response) => {

    //TODO: delete room and room data from database


})