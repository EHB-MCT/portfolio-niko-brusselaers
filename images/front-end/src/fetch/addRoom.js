/**
 * if room doesnt exist add new room to database
 * 
 * 
 * @params roomName(str), URL(str) 
 * @returns roomIsAdded(bool)
 */
const addRoom = async (roomName, URL) => {
    let statusCode
    let roomIsAdded
    // do fetch call to add a new room to database
    await fetch(`${URL}/addRoom`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                roomName
            })
        })
        .then(response => {
            statusCode = response.status
            return response.json()
        })
        // if new room is succesfully added, return true
        .then(data => {
            if (statusCode == 200) {
                roomIsAdded = true
            } else {
                console.log(data);
                roomIsAdded = false

            }
        })
    return roomIsAdded
}

export default addRoom