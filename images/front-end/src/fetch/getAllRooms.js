let url = "http://localhost:3001"

/**
 * Do a fetch call to rest api and retrieve all rooms,
 * and insert hyperlink to roomData in navigation.
 * 
 * @returns
 */
const getAllRooms = () => {
    fetch(`${url}/getAllRooms`)
        .then(response => response.json())
        .then(data => {
            const roomLinks = document.getElementById('roomLinks')
            let innerHTML = ``
            data.roomNames.forEach(element => {
                innerHTML += `<a href="#" class="navLinks">${element}</a>`
            });
            roomLinks.innerHTML = innerHTML
        })
}

export default getAllRooms