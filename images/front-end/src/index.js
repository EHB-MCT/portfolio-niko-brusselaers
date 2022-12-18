import getAllRooms from "./fetch/getAllRooms.js"
import getRoomData from "./fetch/getRoomData"


/**
 * get all rooms when loading page and insert all roomnames in navigation
 * 
 * @see getAllRooms
 */
getAllRooms()

let roomPages = document.querySelector('#roomLinks')

/**
 * listen if the user clicks on any of the room hyperlinks,
 * and retrieve data of room and insert in mainContainer
 * 
 * @see getRoomData
 * 
 * @param element(HTML object)
 * @returns
 */
roomPages.addEventListener("click", async (element) => {
    if (element.target != element.currentTarget) {
        const roomData = await getRoomData(element.target.innerHTML)
        console.log(roomData);


    }
})