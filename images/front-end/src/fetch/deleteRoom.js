/**
 * if room doesnt exist add new room to database
 * 
 * 
 * @params {*} roomName(str), URL(str) 
 * @returns roomIsAdded(bool)
 */
const deleteRoom = async (roomName, URL) => {
    let statusCode
    let roomIsDeleted
    // do fetch call to delete a room from database
    await fetch(`${URL}/deleteRoom`, {
            method: "DELETE",
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
        //if room has been succesfully deleted return true
        .then(data => {
            if (statusCode == 200) {
                console.log(data);
                roomIsDeleted = true
            } else {
                console.log(data);
                roomIsDeleted = false

            }
        })
    return roomIsDeleted
}

export default deleteRoom