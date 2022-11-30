/**
 * used sources:
 * 
 *-convcert mqtt to json: https: //stackoverflow.com/questions/44330464/how-to-create-json-using-mqtt-javascript
 */

const mqtt = require("mqtt")
const connection = require('./database/connection.js')

const clientId = "MQTT_API"
const connectUrl = process.env.MQTT_ADDR


/**
 * object template
 * 
 * roomdata{
 *      id(int)
 *      roomName(str),
 *      roomSensor(str),
 *      temperatureData(arr(int))
 * }
 * 
 *
 */


const client = mqtt.connect(connectUrl, {
    clientId: clientId,
    protocolId: 'MQIsdp',
    protocolVersion: 3,
    debug: true,
    connectTimeout: 4000,
    reconnectPeriod: 1000
})


client.subscribe('arduino/getSensorData')
client.subscribe('arduino/getRoom')


client.on('message', async (topic, payload) => {
    connection.connect();

    if (topic === 'arduino/getSensorData') {
        try {
            let roomData = JSON.parse(payload.toString())
            console.log(data)
            connection.query(`INSERT INTO sensorData (room, sensorDevice,Value) VALUES (?,?,?)`, [data.room, data.deviceName, data.sensorValue])
        } catch (error) {
            console.log(error);
        }
    }


    
    if (topic === 'arduino/getRoom') {
        let data = JSON.parse(payload.toString())
        console.log(data);
        try {
            connection.query(`SELECT * FROM rooms WHERE roomName LIKE ${data.room}`,
                function (error, result, fields) {
                    console.log(result);
                    try {
                        if (!result.length) {
                            connection.execute(`INSERT INTO rooms (roomName) VALUES (?)`, [data.room])
                        }
                    } catch (error) {
                        console.log(error);
                    }
                })

        } catch (error) {
            console.log(error);
        }

    }



})