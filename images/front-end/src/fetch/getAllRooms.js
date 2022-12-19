/**
 * object template
 * 
 * allRooms {
 *      arr(roomName(str))}
 */


/**
 * Do a fetch call to rest api and retrieve all rooms,
 * and insert hyperlink to roomData in navigation.
 * 
 * @params URL(str)
 * @returns allRooms
 */
const getAllRooms = async(URL) => {
    let allRooms
    await fetch(`${URL}/getAllRooms`)
        .then(response => response.json())
        .then(data => {
            const roomLinks = document.getElementById('roomLinks')
            let innerHTML = ``
            data.roomNames.forEach(element => {
                innerHTML += `<a href="#" class="navLinks">${element}</a>`
            });
            roomLinks.innerHTML = innerHTML
            allRooms = data.roomNames
        })
    return allRooms
}

export default getAllRooms