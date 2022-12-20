import displayAdminPage from "./admin/displayAdminPage.js"
import getAllRooms from "./fetch/getAllRooms.js"
import getRoomData from "./fetch/getRoomData"
import login from "./fetch/login.js"
import loginWithId from "./fetch/loginWithId"
import getAverageNumber from "./math/getAverageNumber.js"
import getGraph from "./math/getGraph.js"

var URL = `http://${location.host}:3001`

/**
 * get all rooms when loading page and insert all roomnames in navigation
 * 
 * @params URL(str)
 * @see getAllRooms
 * 
 */
getAllRooms(URL)

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
    //remove activePage class from all navlinks in navigation
    const navLinks = document.getElementsByClassName("navLinks")
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove("activePage")
    }
    if (element.target != element.currentTarget) {
        element.target.classList.add("activePage")
        var FILTERED_DATA = await getRoomData(element.target.innerHTML, URL)
        const mainContainer = document.getElementById("mainContainer")
        // get average for hour,day,week,month
        let average = {
            current: FILTERED_DATA.current,
            hour: getAverageNumber(FILTERED_DATA.hour),
            day: getAverageNumber(FILTERED_DATA.day),
            week: getAverageNumber(FILTERED_DATA.week),
            month: getAverageNumber(FILTERED_DATA.month),
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
        getGraph(FILTERED_DATA.hour, 'hour')

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
                        getGraph(FILTERED_DATA.hour, 'hour')
                        break;
                    case "day":
                        getGraph(FILTERED_DATA.day, 'day')
                        break;
                    case "week":
                        getGraph(FILTERED_DATA.week, 'week')
                        break;
                    case "month":
                        getGraph(FILTERED_DATA.month, 'month')
                        break;


                }
            }
        })

    }
})

const adminPage = document.getElementById('adminPage')

adminPage.addEventListener('click', async () => {
    const mainContainer = document.getElementById('mainContainer')
    let isLoggedIn = await loginWithId(URL)
    //if user has logged in during current session, show admin page
    if (isLoggedIn) {
        displayAdminPage(URL)
    } else {
        //if user hasn't previously logged in during current session, insert login form
        const mainContainer = document.getElementById('mainContainer')
        mainContainer.innerHTML = `
        <form id="loginForm" class="loginForm">
            <h1>login</h1>
            <input type="text" name="username" id="username" placeholder="username">
            <input type="password" name="password" id="password" placeholder="password">
            <button type="submit">submit</button>
        </form>
        `
        //create a eventlistener on loginForm and do a fetch call to check userCredentials when user submits form
        const loginForm = document.getElementById('loginForm')
        loginForm.addEventListener("submit", async (event) => {
            event.preventDefault()
            isLoggedIn = login(URL)
            //if user credentials are valid, show admin page
            if (isLoggedIn) {
                displayAdminPage(URL)
            }
        })


    }
})