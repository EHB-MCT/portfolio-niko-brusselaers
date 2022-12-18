import getAllRooms from "./fetch/getAllRooms.js"
import getRoomData from "./fetch/getRoomData"
import getAverageNumber from "./math/getAverageNumber.js"
import getGraph from "./math/getGraph.js"



/**
 * get all rooms when loading page and insert all roomnames in navigation
 * 
 * @see getAllRooms
 * 
 */
getAllRooms()

const roomPages = document.querySelector('#roomLinks')
/**
 * listen if the user clicks on any of the room hyperlinks,
 * and retrieve data of room and insert in mainContainer.
 * create an eventlistener for graphOptions hyperlinks
 * 
 * @see getRoomData
 * @see getAverageNumber
 * 
 * 
 * @param element(HTML object)
 * @returns
 */
roomPages.addEventListener("click", async (element) => {
    if (element.target != element.currentTarget) {
        var filterdData = await getRoomData(element.target.innerHTML)
        let mainContainer = document.getElementById("mainContainer")
        // get average for hour,day,week,month
        let average = {
            current: filterdData.current,
            hour: getAverageNumber(filterdData.hour),
            day: getAverageNumber(filterdData.day),
            week: getAverageNumber(filterdData.week),
            month: getAverageNumber(filterdData.month),
        }
        // insert roomData with html template inside mainContainer
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
                    <div class="dataGraph" id="dataGraph">
                    <canvas id="chartContainer" class="chartContainer"> </canvas>
                    <div div div class = "graphOptions" id="graphOptions">
                        <a href="#" id='hour'>hour graph</a>
                        <a href="#" id='day'>day graph</a>
                        <a href="#" id='week'>week graph</a>
                        <a href="#" id='month'>month graph</a>
                    </div>
                    </div>`
        //create a new grap showing data from past hour
        getGraph(filterdData.hour, 'hour')

        //create an eventlistener to check if any hyperlinks are clicked in grapOptions 
        const graphOptions = document.querySelector("#graphOptions")
        graphOptions.addEventListener('click', (element) => {
            if (element.target != element.currentTarget) {
                // if any of the hyperlinks are clicked, remove old chart from html and insert a new canvas element inside chartContainer
                const dataGraph = document.getElementById('dataGraph')
                let chartContainer = document.getElementById('chartContainer')
                chartContainer.remove()
                dataGraph.insertAdjacentHTML('afterbegin', `<canvas id="chartContainer" class="chartContainer"> </canvas>`)
                // create a new chart depending on what hyperlink has been clicked and update canvas element
                switch (element.target.id) {
                    case "hour":
                        getGraph(filterdData.hour, 'hour')
                        break;
                    case "day":
                        getGraph(filterdData.day, 'day')
                        break;
                    case "week":
                        getGraph(filterdData.week, 'week')
                        break;
                    case "month":
                        getGraph(filterdData.month, 'month')
                        break;


                }
            }
        })

    }
})