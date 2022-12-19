import addRoom from "../fetch/addroom";
import deleteRoom from "../fetch/deleteRoom";
import getAllRooms from "../fetch/getAllRooms";
/**
 * insert adminPage inside mainContainer
 * 
 * 
 * @see addRoom
 * @see deleteRoom
 * @see getAllRooms
 * 
 * @params URL(str)
 * 
 */
const displayAdminPage = async (URL) => {
    const mainContainer = document.getElementById('mainContainer')
    console.log('test');
    console.log(URL);
    let allRooms = await getAllRooms(URL)
    mainContainer.innerHTML = `
        <div id="adminPageContainer">
            <div class="addRoom">
                <h1>Add Room</h1>
                <form id="addRoomForm">
                    <input type="text" id="roomName" placeholder="roomName">
                    <button type="submit">submit</button>
                </form>
            </div>
            <div class="deleteRoom">
                <h1>Delete Room</h1>
                <div div id="roomsContainer" class="roomsContainer">
                    
                </div>
                

            </div>
        </div>`
    let innerHTML = ``
    console.log(allRooms);
    allRooms.forEach(async (roomName) => {
        innerHTML += `
                    <div>
                        <h2>${roomName}</h2><button id="deleteBtn">X</button>
                    </div>`
    });
    const roomsContainer = document.getElementById('roomsContainer')
    roomsContainer.innerHTML = innerHTML

    const addRoomForm = document.getElementById('addRoomForm')
    /**
     * read roomName input and create a new room in database if none with same name exists,
     * display newly created room in roomsContainer
     * 
     * @see addRoom
     * @see getAllRooms
     */
    addRoomForm.addEventListener('submit', async (event) => {
        event.preventDefault()
        const roomsContainer = document.getElementById('roomsContainer')
        const roomLinks = document.getElementById('roomLinks')
        const roomName = document.getElementById("roomName").value
        const addRoomResult = await addRoom(roomName, URL)
        console.log(addRoomResult);
        if (addRoomResult) {
            innerHTML = ``
            allRooms = await getAllRooms(URL)
            allRooms.forEach(async (roomName) => {
                innerHTML += `
                    <div>
                        <h2 id="roomName">${roomName}</h2><button id="deleteBtn">X</button>
                    </div>`
            });
            roomsContainer.innerHTML = innerHTML

        }
    })

    const roomsContaineQuerry = document.querySelector('#roomsContainer')

    /**
     * delete selected room from database
     * 
     * @see deleteRoom
     * 
     */
    roomsContaineQuerry.addEventListener('click', async (element) => {
        // if the user click on delete button delete room defined in h2 sibling
        if (element.target != element.currentTarget) {
            const roomName = element.target.closest("div").querySelector('h2').innerHTML
            let roomIsDeleted = deleteRoom(roomName, URL)
            setTimeout(async () => {
                //if room has been succesfully deleted, remove from roomcontainer and roomLinks
                if (roomIsDeleted) {
                    innerHTML = ``
                    allRooms = await getAllRooms(URL)
                    allRooms.forEach(async (roomName) => {
                        innerHTML += `
                        <div>
                            <h2 id="roomName">${roomName}</h2><button id="deleteBtn">X</button>
                        </div>`
                    });
                    roomsContainer.innerHTML = innerHTML

                }
            }, 100)

        }
    })
}

export default displayAdminPage