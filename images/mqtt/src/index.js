const mqtt = require("mqtt")
const connection = require('./database/connection.js')

//defining client name and moquito broker adress
const clientId = "MQTT_API"
const connectUrl = process.env.MQTT_ADDR


/**
 * object template
 * 
 * roomdata{
 *      roomName(str),
 *      roomSensor(str),
 *      temperatureData(arr(int))
 * }
 * 
 *
 */


//connect to mosquito broker
const client = mqtt.connect(connectUrl, {
    clientId: clientId,
    protocolId: 'MQIsdp',
    protocolVersion: 3,
    debug: true,
    connectTimeout: 4000,
    reconnectPeriod: 1000
})

//subscribe to defined topics
client.subscribe('arduino/getSensorData')
client.subscribe('arduino/getRoom')


/**
 * check if there are new message on subscribed topics
 * 
 * @params objects - topic(str),
 *                 - payload(roomData() || room(str))
 */
client.on('message', async (topic, payload) => {
    connection.connect();

    /**
     * insert payload data inside sensorData table
     *
     * @params object roomData
     */
    if (topic === 'arduino/getSensorData') {
        try {
            let roomData = JSON.parse(payload.toString())
            console.log(roomData);
            if (Math.abs(roomData.sensorValue) <= 110) {
                connection.query(`INSERT INTO sensorData (room, sensorDevice,value) VALUES (?,?,?)`, [roomData.room, roomData.deviceName, Math.abs(roomData.sensorValue)])
            }
        } catch (error) {
            console.log(error);
        }
    }
})