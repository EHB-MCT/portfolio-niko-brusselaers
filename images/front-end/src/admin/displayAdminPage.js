import getAllRooms from "../fetch/getAllRooms"

/**
 * insert adminPage inside mainContainer
 * 
 * 
 * @see addRoom
 * @see deleteRoom
 * @see getAllRooms
 * 
 */
const displayAdminPage = async () => {
    const mainContainer = document.getElementById('mainContainer')
    const allRooms = await getAllRooms()
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
                <div id="roomsContainer">
                    
                </div>
                

            </div>
        </div>`
    let innerHTML = ``
    allRooms.forEach(async (roomName) => {
        innerHTML += `
                    <div>
                        <h2>${roomName}</h2><button id="deleteBtn">X</button>
                    </div>`
    });
    const roomsContainer = document.querySelector('.roomsContainer')
    roomsContainer.innerHTML = innerHTML

    const addRoomForm = document.getElementById('addRoomForm')
    addRoomForm.addEventListener('submit', async (event) => {
        event.preventDefault()
        const roomsContainer = document.getElementById('roomsContainer')
        const roomLinks = document.getElementById('roomLinks')
        const roomName = document.getElementById("roomName").value
        const addRoom = await addRoom(roomName)
        if (addRoom) {

        }
    })
}

export default displayAdminPage