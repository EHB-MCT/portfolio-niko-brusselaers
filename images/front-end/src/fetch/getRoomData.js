import filterByDate from "../filtering/filterByDate"
import getAverageNumber from "../math/getAverageNumber"
let url = "http://localhost:3001"


/**
 * Do a fetch call to rest api to receive data about roomName.
 * Filter data by current,hour,week and month,
 * and get an average value by current, hour, day, week, month.
 * Insert data into with html template in mainContainer
 * 
 * @see filterByDate
 * @see getAverageNumber
 * 
 * @param  roomName(str) 
 * @returns 
 * 
 */
const getRoomData = (roomName) => {
    // get room data from roomName
    return fetch(`${url}/getRoomData`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                roomName
            })
        })
        .then(response => response.json())
        .then(data => {
            let mainContainer = document.getElementById("mainContainer")
            // filter data by current,hour,day,week,month
            let filterdData = filterByDate(data.temperatureData)
            // get average for hour,day,week,month
            let average = {
                current: filterdData.current,
                hour: getAverageNumber(filterdData.hour),
                day: getAverageNumber(filterdData.day),
                week: getAverageNumber(filterdData.week),
                month: getAverageNumber(filterdData.month),
            }
            mainContainer.innerHTML = `
                    <div class="dataAverages">
                        <div class=" noiseLevelNumbers ">
                            <h2>Current</h2>
                            <h1 id="currentNoiseLevel">${average.current} db</h1>
                        </div>
                        <div class="noiseLevelNumbers">
                            <h2>Hourly</h2>
                            <h1 id="dailyNoiseLevel">${average.hour}db</h1>
                        </div>
                        <div class="noiseLevelNumbers">
                            <h2>Daily</h2>
                            <h1 id="dailyNoiseLevel">${average.day}db</h1>
                        </div>
                        <div class="noiseLevelNumbers">
                            <h2>Weekly</h2>
                            <h1 id="WeeklyNoiseLevel">${average.week}db</h1>
                        </div>
                        <div class="noiseLevelNumbers">
                            <h2>Monthly</h2>
                            <h1 id="monthlyNoiseLevel">${average.month}db</h1>
                        </div>
                    </div>
                    <div class="dataGraph">

                    </div>`

        })
}

export default getRoomData