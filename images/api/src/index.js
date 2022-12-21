const express = require("express")
const bodyParser = require('body-parser')
const cors = require('cors')
const executeQuery = require("./database/executeQuery.js")
const app = express()
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
app.use(cors())
app.use(express.static("../docs"))


app.listen(3000, (err) => {
    if (!err) {
        console.log("http://localhost:3000");
    } else {
        console.log(err);
    }
})

/**
 * object template
 * 
 * room {
 *      id(int) 
 *      roomName(str)
 * }
 * 
 * roomdata{
 *      id(int)
 *      roomName(str),
 *      temperatureData(arr(sensorData))
 * }
 * 
 * sensordata {
 *      value(int),
 *      date(date) 
 * }
 * 
 * userCredentials {
 *      username(str)
 *      password(str)
 * }
 * 
 * userData{
 *      userId(int),
 *      username(str),
 *      
 *      
 * }
 * 
 * userCredentialsId{
 *          userId(int);
 *          username(str)
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
 * GET endpoint, return the list of rooms
 * 
 * @returns object with result object roomNames(arr(str))
 */
app.get("/getAllRooms", async (request, response) => {

    try {
        // retrieving all room names from rooms table and sending data back via response
        let result = await executeQuery(`SELECT * FROM rooms `)
        let roomNames = []
        for (let i = 0; i < result.length; i++) {
            roomNames.push(result[i].roomName)
        }
        response.status(200).send({
            roomNames: roomNames
        })
    } catch (error) {
        //displaying error in terminal and sending it back via response
        console.log(error);
        response.status(500).send({
            error: error
        })
    }

})


/**
 * POST endpoint, insert new room into database
 * 
 * @params object roomName(str)
 * @returns object with result of inserted room
 */
app.post("/addRoom", (request, response) => {
    const roomName = request.body.roomName

    //TODO: insert room inside database
    try {
        // retrieving all room names from rooms table and sending data back via response
        connection.query(`SELECT * FROM rooms where roomName LIKE ?`, [roomName],
            function (error, result, fields) {
                console.log(result);
                if (result.length == 0) {
                    let querry = connection.query(`INSERT INTO rooms (roomName) VALUES (?)`, [roomName],
                        function (error, result, fields) {
                            response.status(200).send({
                                room: {
                                    roomId: result.id,
                                    roomName: result.roomName
                                }
                            })
                        })
                } else {
                    response.status(400).send({
                        error: 'room already exists'
                    })
                }
            })
    } catch (error) {
        //displaying error in terminal and sending it back via response
        console.log(error);
        response.status(500).send({
            error: error
        })
    }
})

/**
 * POST endpoint, return object room
 * 
 * @params object roomName(str)
 * @returns object with result object roomData
 */
app.post("/getRoomData", async (request, response) => {
    const roomName = request.body.roomName

    try {
        //retrieving room sensor data from sensorData table
        connection.promise().query(`SELECT * FROM (sensorData) WHERE room LIKE (?)`, [roomName])
            .then(([rows, fields]) => {
                console.log(rows);
                // making a new object roomData with roomName and a array of sensorData
                console.log(rows[2].value);
                let roomData = {
                    roomName: rows[0].room,
                    temperatureData: []

                }

                for (let i = 0; i < rows.length; i++) {
                    roomData.temperatureData.push({
                        value: rows[i].value,
                        date: rows[i].date
                    })
                }

                response.status(200).send(roomData)

            })
    } catch (error) {
        response.status(400).send(error)
    }


})


/**
 * POST endpoint, check if user credentials are correct
 * 
 * @params userCredentialsId
 * @returns isUserValid(bool)
 */
app.post('/loginWithId', (request, response) => {
    let userCredentialsId = request.body.userCredentialsId
    //if any data is missing, send error response back
    if (!userCredentialsId.userId || !userCredentialsId.username) {
        response.status(400).send({
            error: "missing data in request"
        })
    } else {
        try {
            //retrieve requested data from users table
            connection.query(`SELECT * FROM users WHERE id = ? AND username = ? `, [userCredentialsId.userId, userCredentialsId.username],
                function (error, result, fields) {
                    //if result is not empty, return true else return false
                    if (result.length != 0) {
                        response.status(200).send({
                            isUserValid: true
                        })
                    } else {
                        response.status(401).send({
                            isUserValid: false
                        })
                    }
                })
        } catch (error) {
            response.status(500).send(error.message)
        }
    }



})

/**
 * POST endpoint check if user credentials is valid
 * 
 * @params userCredentials
 * @returns userData
 */
app.post("/login", async (request, response) => {
    userCredentials = request.body.userCredentials
    //if any data is missing in request, send error response back
    if (!userCredentials.username || !userCredentials.password) {
        response.status(400).send({
            error: "missing username or passwords"
        })
    } else {
        try {
            // retrieve requested data from users table
            let result = await executeQuery(`SELECT * FROM users WHERE (username, password) = (?) `, [`${userCredentials.username}`, `${userCredentials.password}`])
            // if result is not empty, send userData back in response
            if (result.length != 0) {
                response.status(200).send({
                    userData: {
                        userId: result[0].id,
                        username: result[0].username
                    }
                })
                //else send error back in response
            } else {
                response.status(401).send({
                    error: "user doesn't exist"
                })
            }

        } catch (error) {
            console.log(error.message);
            response.status(500).send(error)
        }

    }

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
 * @returns object with result(str) and statuscode(int)
 */
app.delete("/deleteRoom", (request, response) => {
    let roomName = request.body.roomName
    //TODO: delete room and room data from database
    try {
        // retrieving room to check if it exists
        connection.query(`SELECT * FROM rooms WHERE (roomName) LIKE (?)`, [roomName],
            function (error, results, fields) {
                if (!results.length) {
                    //if the room is not inside database send error response back
                    response.status(400).send({
                        error: "room doesnt exist"
                    })
                } else {
                    // remove all data from room in rooms and sensorData tables
                    connection.execute(`DELETE FROM rooms WHERE (roomName) LIKE (?) `, [roomName])
                    connection.execute(`DELETE FROM sensorData WHERE (room) LIKE (?) `, [roomName])
                    response.status(200).send({
                        result: "ok"
                    })
                }
            })
    } catch (error) {
        //displaying error in terminal and sending it back via response
        console.log(error);
        response.status(500).send({
            error: error
        })
    }


})