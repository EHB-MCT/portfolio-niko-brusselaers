/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/admin/displayAdminPage.js":
/*!***************************************!*\
  !*** ./src/admin/displayAdminPage.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fetch_addroom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fetch/addroom */ \"./src/fetch/addroom.js\");\n/* harmony import */ var _fetch_deleteRoom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fetch/deleteRoom */ \"./src/fetch/deleteRoom.js\");\n/* harmony import */ var _fetch_getAllRooms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fetch/getAllRooms */ \"./src/fetch/getAllRooms.js\");\n\r\n\r\n\r\n/**\r\n * insert adminPage inside mainContainer\r\n * \r\n * \r\n * @see addRoom\r\n * @see deleteRoom\r\n * @see getAllRooms\r\n * \r\n * @params URL(str)\r\n * \r\n */\r\nconst displayAdminPage = async (URL) => {\r\n    const mainContainer = document.getElementById('mainContainer')\r\n    let allRooms = await (0,_fetch_getAllRooms__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(URL)\r\n    mainContainer.innerHTML = `\r\n        <div id=\"adminPageContainer\">\r\n            <div class=\"addRoom\">\r\n                <h1>Add Room</h1>\r\n                <form id=\"addRoomForm\">\r\n                    <input type=\"text\" id=\"roomName\" placeholder=\"roomName\">\r\n                    <button type=\"submit\">submit</button>\r\n                </form>\r\n            </div>\r\n            <div class=\"deleteRoom\">\r\n                <h1>Delete Room</h1>\r\n                <div div id=\"roomsContainer\" class=\"roomsContainer\">\r\n                    \r\n                </div>\r\n                \r\n\r\n            </div>\r\n        </div>`\r\n    let innerHTML = ``\r\n    allRooms.forEach(async (roomName) => {\r\n        innerHTML += `\r\n                    <div>\r\n                        <h2>${roomName}</h2><button id=\"deleteBtn\">X</button>\r\n                    </div>`\r\n    });\r\n    const roomsContainer = document.getElementById('roomsContainer')\r\n    roomsContainer.innerHTML = innerHTML\r\n\r\n    const addRoomForm = document.getElementById('addRoomForm')\r\n    /**\r\n     * read roomName input and create a new room in database if none with same name exists,\r\n     * display newly created room in roomsContainer\r\n     * \r\n     * @see addRoom\r\n     * @see getAllRooms\r\n     */\r\n    addRoomForm.addEventListener('submit', async (event) => {\r\n        event.preventDefault()\r\n        const roomsContainer = document.getElementById('roomsContainer')\r\n        const roomLinks = document.getElementById('roomLinks')\r\n        const roomName = document.getElementById(\"roomName\").value\r\n        const addRoomResult = await (0,_fetch_addroom__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(roomName, URL)\r\n        if (addRoomResult) {\r\n            innerHTML = ``\r\n            allRooms = await (0,_fetch_getAllRooms__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(URL)\r\n            allRooms.forEach(async (roomName) => {\r\n                innerHTML += `\r\n                    <div>\r\n                        <h2 id=\"roomName\">${roomName}</h2><button id=\"deleteBtn\">X</button>\r\n                    </div>`\r\n            });\r\n            roomsContainer.innerHTML = innerHTML\r\n\r\n        }\r\n    })\r\n\r\n    const roomsContaineQuerry = document.querySelector('#roomsContainer')\r\n\r\n    /**\r\n     * delete selected room from database\r\n     * \r\n     * @see deleteRoom\r\n     * \r\n     */\r\n    roomsContaineQuerry.addEventListener('click', async (element) => {\r\n        // if the user click on delete button delete room defined in h2 sibling\r\n        if (element.target != element.currentTarget) {\r\n            const roomName = element.target.closest(\"div\").querySelector('h2').innerHTML\r\n            let roomIsDeleted = (0,_fetch_deleteRoom__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(roomName, URL)\r\n            setTimeout(async () => {\r\n                //if room has been succesfully deleted, remove from roomcontainer and roomLinks\r\n                if (roomIsDeleted) {\r\n                    innerHTML = ``\r\n                    allRooms = await (0,_fetch_getAllRooms__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(URL)\r\n                    allRooms.forEach(async (roomName) => {\r\n                        innerHTML += `\r\n                        <div>\r\n                            <h2 id=\"roomName\">${roomName}</h2><button id=\"deleteBtn\">X</button>\r\n                        </div>`\r\n                    });\r\n                    roomsContainer.innerHTML = innerHTML\r\n\r\n                }\r\n            }, 100)\r\n\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayAdminPage);\n\n//# sourceURL=webpack://front-end-website/./src/admin/displayAdminPage.js?");

/***/ }),

/***/ "./src/fetch/addroom.js":
/*!******************************!*\
  !*** ./src/fetch/addroom.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * if room doesnt exist add new room to database\r\n * \r\n * \r\n * @params roomName(str), URL(str) \r\n * @returns roomIsAdded(bool)\r\n */\r\nconst addRoom = async (roomName, URL) => {\r\n    let statusCode\r\n    let roomIsAdded\r\n    // do fetch call to add a new room to database\r\n    await fetch(`${URL}/addRoom`, {\r\n            method: \"POST\",\r\n            headers: {\r\n                'Content-Type': 'application/json',\r\n            },\r\n            body: JSON.stringify({\r\n                roomName\r\n            })\r\n        })\r\n        .then(response => {\r\n            statusCode = response.status\r\n            return response.json()\r\n        })\r\n        // if new room is succesfully added, return true\r\n        .then(data => {\r\n            if (statusCode == 200) {\r\n                roomIsAdded = true\r\n            } else {\r\n                console.log(data);\r\n                roomIsAdded = false\r\n\r\n            }\r\n        })\r\n    return roomIsAdded\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addRoom);\n\n//# sourceURL=webpack://front-end-website/./src/fetch/addroom.js?");

/***/ }),

/***/ "./src/fetch/deleteRoom.js":
/*!*********************************!*\
  !*** ./src/fetch/deleteRoom.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * if room doesnt exist add new room to database\r\n * \r\n * \r\n * @params {*} roomName(str), URL(str) \r\n * @returns roomIsAdded(bool)\r\n */\r\nconst deleteRoom = async (roomName, URL) => {\r\n    let statusCode\r\n    let roomIsDeleted\r\n    // do fetch call to delete a room from database\r\n    await fetch(`${URL}/deleteRoom`, {\r\n            method: \"DELETE\",\r\n            headers: {\r\n                'Content-Type': 'application/json',\r\n            },\r\n            body: JSON.stringify({\r\n                roomName\r\n            })\r\n        })\r\n        .then(response => {\r\n            statusCode = response.status\r\n            return response.json()\r\n        })\r\n        //if room has been succesfully deleted return true\r\n        .then(data => {\r\n            if (statusCode == 200) {\r\n                roomIsDeleted = true\r\n            } else {\r\n                console.log(data);\r\n                roomIsDeleted = false\r\n\r\n            }\r\n        })\r\n    return roomIsDeleted\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteRoom);\n\n//# sourceURL=webpack://front-end-website/./src/fetch/deleteRoom.js?");

/***/ }),

/***/ "./src/fetch/getAllRooms.js":
/*!**********************************!*\
  !*** ./src/fetch/getAllRooms.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * object template\r\n * \r\n * allRooms {\r\n *      arr(roomName(str))}\r\n */\r\n\r\n\r\n/**\r\n * Do a fetch call to rest api and retrieve all rooms,\r\n * and insert hyperlink to roomData in navigation.\r\n * \r\n * @params URL(str)\r\n * @returns allRooms\r\n */\r\nconst getAllRooms = async(URL) => {\r\n    let allRooms\r\n    await fetch(`${URL}/getAllRooms`)\r\n        .then(response => response.json())\r\n        .then(data => {\r\n            const roomLinks = document.getElementById('roomLinks')\r\n            let innerHTML = ``\r\n            data.roomNames.forEach(element => {\r\n                innerHTML += `<a href=\"#\" class=\"navLinks\">${element}</a>`\r\n            });\r\n            roomLinks.innerHTML = innerHTML\r\n            allRooms = data.roomNames\r\n        })\r\n    return allRooms\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAllRooms);\n\n//# sourceURL=webpack://front-end-website/./src/fetch/getAllRooms.js?");

/***/ }),

/***/ "./src/fetch/getRoomData.js":
/*!**********************************!*\
  !*** ./src/fetch/getRoomData.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _filtering_filterByDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../filtering/filterByDate */ \"./src/filtering/filterByDate.js\");\n/* harmony import */ var _math_getAverageNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/getAverageNumber */ \"./src/math/getAverageNumber.js\");\n/* harmony import */ var _math_getGraph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math/getGraph */ \"./src/math/getGraph.js\");\n\r\n\r\n\r\n\r\n\r\n/**\r\n * object template\r\n * \r\n * sensorData {\r\n *          value(int),\r\n *          date(str) \r\n * }\r\n *\r\n *\r\n * filteredData {\r\n *      curren(int),\r\n *      hour(arr(sensorData)),\r\n *      day(arr(sensorData)),\r\n *      week(arr(sensorData)),\r\n *      month(arr(sensorData)) \r\n * }\r\n *\r\n */\r\n\r\n/**\r\n * Do a fetch call to rest api to receive data about roomName.\r\n * Filter data by current,hour,week and month,\r\n * \r\n * \r\n * @see filterByDate\r\n * \r\n * @params roomName(str), URL(str)\r\n * @returns filteredData\r\n * \r\n */\r\nconst getRoomData = (roomName, URL) => {\r\n    // get room data from roomName\r\n    return fetch(`${URL}/getRoomData`, {\r\n            method: \"POST\",\r\n            headers: {\r\n                'Content-Type': 'application/json',\r\n            },\r\n            body: JSON.stringify({\r\n                roomName\r\n            })\r\n        })\r\n        .then(response => response.json())\r\n        .then(data => {\r\n            // filter data by current,hour,day,week,month\r\n            let filterdData = (0,_filtering_filterByDate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data.temperatureData)\r\n\r\n            return filterdData\r\n\r\n        })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRoomData);\n\n//# sourceURL=webpack://front-end-website/./src/fetch/getRoomData.js?");

/***/ }),

/***/ "./src/fetch/login.js":
/*!****************************!*\
  !*** ./src/fetch/login.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\n/**\r\n * login user with username and password\r\n * \r\n * @params URL(str)\r\n * @returns isLoggedIn(bool)\r\n */\r\nconst login = async (URL) => {\r\n    let statusCode\r\n    // retrieve username and password values from loginForm\r\n    const userCredentials = {\r\n        username: document.getElementById('username').value,\r\n        password: document.getElementById('password').value\r\n    }\r\n    // do a fetch call to check if user credentials are valid\r\n    await fetch(`${URL}/login`, {\r\n            method: \"POST\",\r\n            headers: {\r\n                'Content-Type': 'application/json',\r\n            },\r\n            body: JSON.stringify({\r\n                userCredentials\r\n            })\r\n        })\r\n        .then(response => {\r\n            statusCode = response.status\r\n            return response.json()\r\n        })\r\n        .then(data => {\r\n            //if userCredentials are valid, store userId and username in sessionstorage\r\n            if (statusCode = 200) {\r\n                sessionStorage.setItem(\"userId\", data.userData.userId)\r\n                sessionStorage.setItem(\"username\", data.userData.username)\r\n                isLoggedIn = true\r\n            }\r\n        })\r\n        return isLoggedIn\r\n}\r\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (login);\n\n//# sourceURL=webpack://front-end-website/./src/fetch/login.js?");

/***/ }),

/***/ "./src/fetch/loginWithId":
/*!*******************************!*\
  !*** ./src/fetch/loginWithId ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\n\r\n/**\r\n * login user with stored userId\r\n * @params URL(str) *\r\n * @returns isLoggedIn(bool)\r\n */\r\nconst loginWithId = async (URL) => {\r\n    let isLoggedIn = false\r\n    // retrieve userId and username from sessionStorage\r\n    const userCredentialsId = {\r\n        userId: sessionStorage.getItem(\"userId\") || null,\r\n        username: sessionStorage.getItem(\"username\") || null\r\n    }\r\n    // if either userId or username are empty return isLoggedIn as false\r\n    if (userCredentialsId.userId == null || userCredentialsId.username == null) {\r\n        isLoggedIn = false\r\n    } else {\r\n        // if userId and username are present, do a fetch call to check if credentials are valid\r\n        await fetch(`${URL}/loginWithId`, {\r\n                method: \"POST\",\r\n                headers: {\r\n                    'Content-Type': 'application/json',\r\n                },\r\n                body: JSON.stringify({\r\n                    userCredentialsId\r\n                })\r\n            })\r\n            .then(response => response.json())\r\n            .then(data => {\r\n                // set isLoggedIn to true or false depending on response\r\n                isLoggedIn = data.isUserValid\r\n            })\r\n    }\r\n    return isLoggedIn\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loginWithId);\n\n//# sourceURL=webpack://front-end-website/./src/fetch/loginWithId?");

/***/ }),

/***/ "./src/filtering/filterByDate.js":
/*!***************************************!*\
  !*** ./src/filtering/filterByDate.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * object template\r\n * \r\n * sensorData{\r\n *      value(int),\r\n *      date(str)\r\n * }\r\n * \r\n * filteredData{\r\n *          curren(int),\r\n *          hour(arr(sensorData)),\r\n *          day(arr(sensorData)),\r\n *          week(arr(sensorData)),\r\n *          month(arr(sensorData))\r\n *          \r\n * }\r\n */\r\n\r\n\r\n/**\r\n * // filter data by current, hour, day, week, month\r\n * \r\n * @param  dataArray(arr(sensorData))\r\n * @returns object with result filteredData\r\n */\r\nconst filterByDate = (dataArray) => {\r\n    let filteredData = {\r\n        current: dataArray[dataArray.length - 1].value,\r\n        hour: [],\r\n        day: [],\r\n        week: [],\r\n        month: []\r\n    }\r\n\r\n    // create Date veriables from an hour,day,week,month earlier\r\n    const currentDateMinusHour = new Date(Date.now() - (60 * 60 * 1000)).getTime()\r\n    const currentDateMinusDay = new Date(Date.now() - (24 * 60 * 60 * 1000)).getTime()\r\n    const currentDateMinusWeek = new Date(Date.now() - (7 * 24 * 60 * 60 * 1000)).getTime()\r\n    const currentDateMinusMonth = new Date(Date.now() - (30 * 24 * 60 * 60 * 1000)).getTime()\r\n\r\n\r\n    dataArray.forEach(data => {\r\n        //convert string to Date\r\n        let date = new Date(data.date).getTime()\r\n        //push sensorData depending if the sensorData.data is bigger\r\n        //than date from an hour,day,week,month earlier\r\n        if (date >= currentDateMinusHour) {\r\n            filteredData.hour.push(data)\r\n        }\r\n        if (date >= currentDateMinusDay) {\r\n            filteredData.day.push(data)\r\n        }\r\n        if (date >= currentDateMinusWeek) {\r\n            filteredData.week.push(data)\r\n        }\r\n        if (date >= currentDateMinusMonth) {\r\n            filteredData.month.push(data)\r\n        }\r\n\r\n    });\r\n\r\n    return filteredData\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filterByDate);\n\n//# sourceURL=webpack://front-end-website/./src/filtering/filterByDate.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _admin_displayAdminPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin/displayAdminPage.js */ \"./src/admin/displayAdminPage.js\");\n/* harmony import */ var _fetch_getAllRooms_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch/getAllRooms.js */ \"./src/fetch/getAllRooms.js\");\n/* harmony import */ var _fetch_getRoomData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetch/getRoomData */ \"./src/fetch/getRoomData.js\");\n/* harmony import */ var _fetch_login_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetch/login.js */ \"./src/fetch/login.js\");\n/* harmony import */ var _fetch_loginWithId__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fetch/loginWithId */ \"./src/fetch/loginWithId\");\n/* harmony import */ var _math_getAverageNumber_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./math/getAverageNumber.js */ \"./src/math/getAverageNumber.js\");\n/* harmony import */ var _math_getGraph_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./math/getGraph.js */ \"./src/math/getGraph.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar URL = `http://${location.host}:4000`\r\n\r\n/**\r\n * get all rooms when loading page and insert all roomnames in navigation\r\n * \r\n * @params URL(str)\r\n * @see getAllRooms\r\n * \r\n */\r\n;(0,_fetch_getAllRooms_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(URL)\r\n\r\nconst roomPages = document.querySelector('#roomLinks')\r\n/**\r\n * listen if the user clicks on any of the room hyperlinks,\r\n * and retrieve data of room and insert in mainContainer.\r\n * create an eventlistener for graphOptions hyperlinks\r\n * \r\n * @see getRoomData\r\n * @see getAverageNumber\r\n * \r\n * \r\n * @param element(HTML object)\r\n * @returns\r\n */\r\nroomPages.addEventListener(\"click\", async (element) => {\r\n    //remove activePage class from all navlinks in navigation\r\n    const navLinks = document.getElementsByClassName(\"navLinks\")\r\n    for (let i = 0; i < navLinks.length; i++) {\r\n        navLinks[i].classList.remove(\"activePage\")\r\n    }\r\n    if (element.target != element.currentTarget) {\r\n        element.target.classList.add(\"activePage\")\r\n        var FILTERED_DATA = await (0,_fetch_getRoomData__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(element.target.innerHTML, URL)\r\n        const mainContainer = document.getElementById(\"mainContainer\")\r\n        // get average for hour,day,week,month\r\n        let average = {\r\n            current: FILTERED_DATA.current,\r\n            hour: (0,_math_getAverageNumber_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(FILTERED_DATA.hour),\r\n            day: (0,_math_getAverageNumber_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(FILTERED_DATA.day),\r\n            week: (0,_math_getAverageNumber_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(FILTERED_DATA.week),\r\n            month: (0,_math_getAverageNumber_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(FILTERED_DATA.month),\r\n        }\r\n        // insert roomData with html template inside mainContainer\r\n        mainContainer.innerHTML = `\r\n                    <div class=\"dataAverages\">\r\n                        <div class=\" noiseLevelNumbers \">\r\n                            <h2>Current</h2>\r\n                            <h1 id=\"currentNoiseLevel\">${average.current} db</h1>\r\n                        </div>\r\n                        <div class=\"noiseLevelNumbers\">\r\n                            <h2>Hourly</h2>\r\n                            <h1 id=\"dailyNoiseLevel\">${average.hour}db</h1>\r\n                        </div>\r\n                        <div class=\"noiseLevelNumbers\">\r\n                            <h2>Daily</h2>\r\n                            <h1 id=\"dailyNoiseLevel\">${average.day}db</h1>\r\n                        </div>\r\n                        <div class=\"noiseLevelNumbers\">\r\n                            <h2>Weekly</h2>\r\n                            <h1 id=\"WeeklyNoiseLevel\">${average.week}db</h1>\r\n                        </div>\r\n                        <div class=\"noiseLevelNumbers\">\r\n                            <h2>Monthly</h2>\r\n                            <h1 id=\"monthlyNoiseLevel\">${average.month}db</h1>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"dataGraph\" id=\"dataGraph\">\r\n                    <canvas id=\"chartContainer\" class=\"chartContainer\"> </canvas>\r\n                    <div div div class = \"graphOptions\" id=\"graphOptions\">\r\n                        <a href=\"#\" id='hour'>hour graph</a>\r\n                        <a href=\"#\" id='day'>day graph</a>\r\n                        <a href=\"#\" id='week'>week graph</a>\r\n                        <a href=\"#\" id='month'>month graph</a>\r\n                    </div>\r\n                    </div>`\r\n\r\n        //create a new grap showing data from past hour\r\n        ;(0,_math_getGraph_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(FILTERED_DATA.hour, 'hour')\r\n\r\n        //create an eventlistener to check if any hyperlinks are clicked in grapOptions \r\n        const graphOptions = document.querySelector(\"#graphOptions\")\r\n        graphOptions.addEventListener('click', (element) => {\r\n            if (element.target != element.currentTarget) {\r\n                // if any of the hyperlinks are clicked, remove old chart from html and insert a new canvas element inside chartContainer\r\n                const dataGraph = document.getElementById('dataGraph')\r\n                let chartContainer = document.getElementById('chartContainer')\r\n                chartContainer.remove()\r\n                dataGraph.insertAdjacentHTML('afterbegin', `<canvas id=\"chartContainer\" class=\"chartContainer\"> </canvas>`)\r\n                // create a new chart depending on what hyperlink has been clicked and update canvas element\r\n                switch (element.target.id) {\r\n                    case \"hour\":\r\n                        ;(0,_math_getGraph_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(FILTERED_DATA.hour, 'hour')\r\n                        break;\r\n                    case \"day\":\r\n                        (0,_math_getGraph_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(FILTERED_DATA.day, 'day')\r\n                        break;\r\n                    case \"week\":\r\n                        (0,_math_getGraph_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(FILTERED_DATA.week, 'week')\r\n                        break;\r\n                    case \"month\":\r\n                        (0,_math_getGraph_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(FILTERED_DATA.month, 'month')\r\n                        break;\r\n\r\n\r\n                }\r\n            }\r\n        })\r\n\r\n    }\r\n})\r\n\r\nconst adminPage = document.getElementById('adminPage')\r\n\r\nadminPage.addEventListener('click', async () => {\r\n    const mainContainer = document.getElementById('mainContainer')\r\n    let isLoggedIn = await (0,_fetch_loginWithId__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(URL)\r\n    //if user has logged in during current session, show admin page\r\n    if (isLoggedIn) {\r\n        (0,_admin_displayAdminPage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(URL)\r\n    } else {\r\n        //if user hasn't previously logged in during current session, insert login form\r\n        const mainContainer = document.getElementById('mainContainer')\r\n        mainContainer.innerHTML = `\r\n        <form id=\"loginForm\" class=\"loginForm\">\r\n            <h1>login</h1>\r\n            <input type=\"text\" name=\"username\" id=\"username\" placeholder=\"username\">\r\n            <input type=\"password\" name=\"password\" id=\"password\" placeholder=\"password\">\r\n            <button type=\"submit\">submit</button>\r\n        </form>\r\n        `\r\n        //create a eventlistener on loginForm and do a fetch call to check userCredentials when user submits form\r\n        const loginForm = document.getElementById('loginForm')\r\n        loginForm.addEventListener(\"submit\", async (event) => {\r\n            event.preventDefault()\r\n            isLoggedIn = (0,_fetch_login_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(URL)\r\n            //if user credentials are valid, show admin page\r\n            if (isLoggedIn) {\r\n                (0,_admin_displayAdminPage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(URL)\r\n            }\r\n        })\r\n\r\n\r\n    }\r\n})\n\n//# sourceURL=webpack://front-end-website/./src/index.js?");

/***/ }),

/***/ "./src/math/getAverageNumber.js":
/*!**************************************!*\
  !*** ./src/math/getAverageNumber.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * object template\r\n * \r\n * sensorData{\r\n *      value(int),\r\n *      date(str)\r\n * }\r\n */\r\n\r\n/**\r\n * count all values up and divide them by array length to receive an average\r\n * \r\n * @param dataArray(arr(sensorData))\r\n * @returns object with result averageNumber(int)\r\n */\r\nconst getAverageNumber = (dataArray) => {\r\n    //count all numbers in dataArray up and store in average variable\r\n    const average = dataArray.reduce((total, data) => {\r\n        return total + data.value\r\n    }, 0)\r\n    //divide average by dataArray length\r\n    const averageNumber = average / dataArray.length\r\n\r\n    return Math.round(averageNumber)\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAverageNumber);\n\n//# sourceURL=webpack://front-end-website/./src/math/getAverageNumber.js?");

/***/ }),

/***/ "./src/math/getGraph.js":
/*!******************************!*\
  !*** ./src/math/getGraph.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * object template\r\n * \r\n * chartData{\r\n *      date(arr(str)),\r\n *      value(arr(int))\r\n * }\r\n */\r\n\r\n\r\n/**\r\n * Read received data from room and create a chart.\r\n * \r\n * \r\n * @param chartData\r\n * @param duration(str) \r\n * @returns\r\n */\r\nconst getGraph = (chartData, duration) => {\r\n    let chartContainer = document.getElementById('chartContainer')\r\n    let timeLabel\r\n    // inserting all values into sensorValues variable\r\n    let sensorValues = []\r\n    chartData.forEach(data => {\r\n        sensorValues.push(data.value)\r\n    });\r\n\r\n    //depending on what duration insert array of prefixed label\r\n    switch (duration) {\r\n        case \"hour\":\r\n            timeLabel = [\r\n                \"60 min\",\r\n                \"55 min\",\r\n                \"50 min\",\r\n                \"45 min\",\r\n                \"40 min\",\r\n                \"35 min\",\r\n                \"30 min\",\r\n                \"25 min\",\r\n                \"20 min\",\r\n                \"15 min\",\r\n                \"10 min\",\r\n                \"5 min\",\r\n                \"0\"\r\n            ]\r\n            break;\r\n\r\n        case \"day\":\r\n\r\n            timeLabel = [\r\n                \"24:00\",\r\n                \"23:00\",\r\n                \"22:00\",\r\n                \"21:00\",\r\n                \"20:00\",\r\n                \"19:00\",\r\n                \"18:00\",\r\n                \"17:00\",\r\n                \"16:00\",\r\n                \"15:00\",\r\n                \"14:00\",\r\n                \"13:00\",\r\n                \"12:00\",\r\n                \"11:00\",\r\n                \"10:00\",\r\n                \"9:00\",\r\n                \"8:00\",\r\n                \"7:00\",\r\n                \"6:00\",\r\n                \"5:00\",\r\n                \"4:00\",\r\n                \"3:00\",\r\n                \"2:00\",\r\n                \"1:00\",\r\n                \"0:00\"\r\n            ]\r\n            break;\r\n\r\n        case \"week\":\r\n            timeLabel = [\r\n                \"day 7\",\r\n                \"day 6\",\r\n                \"day 5\",\r\n                \"day 4\",\r\n                \"day 3\",\r\n                \"day 2\",\r\n                \"day 1\",\r\n                \"day 0\"\r\n            ]\r\n            break;\r\n\r\n        case \"month\":\r\n            timeLabel = [\r\n                \"day 31\",\r\n                \"day 30\",\r\n                \"day 29\",\r\n                \"day 28\",\r\n                \"day 27\",\r\n                \"day 26\",\r\n                \"day 25\",\r\n                \"day 24\",\r\n                \"day 23\",\r\n                \"day 22\",\r\n                \"day 21\",\r\n                \"day 20\",\r\n                \"day 19\",\r\n                \"day 18\",\r\n                \"day 17\",\r\n                \"day 16\",\r\n                \"day 15\",\r\n                \"day 14\",\r\n                \"day 13\",\r\n                \"day 12\",\r\n                \"day 11\",\r\n                \"day 10\",\r\n                \"day 9\",\r\n                \"day 8\",\r\n                \"day 7\",\r\n                \"day 6\",\r\n                \"day 5\",\r\n                \"day 4\",\r\n                \"day 3\",\r\n                \"day 2\",\r\n                \"day 1\",\r\n                \"day 0\"\r\n            ]\r\n            break;\r\n\r\n    }\r\n    // creating a new chart and updating canvas element\r\n    new Chart(chartContainer, {\r\n        type: 'line',\r\n        data: {\r\n            labels: timeLabel,\r\n            datasets: [{\r\n                label: 'room noise level',\r\n                data: sensorValues,\r\n                borderWidth: 1\r\n            }]\r\n        },\r\n        options: {\r\n            responsive: true,\r\n            scales: {\r\n                y: {\r\n                    beginAtZero: true\r\n                },\r\n            },\r\n            plugins: {\r\n                legend: {\r\n                    display: false\r\n                }\r\n            }\r\n        }\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getGraph);\n\n//# sourceURL=webpack://front-end-website/./src/math/getGraph.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;