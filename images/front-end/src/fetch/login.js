const url = "http://localhost:3001"

/**
 * login user with username and password
 * 
 * @returns isLoggedIn(bool)
 */
const login = async () => {
    let statusCode
    // retrieve username and password values from loginForm
    const userCredentials = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    }
    // do a fetch call to check if user credentials are valid
    await fetch(`${url}/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userCredentials
            })
        })
        .then(response => {
            statusCode = response.status
            return response.json()
        })
        .then(data => {
            //if userCredentials are valid, store userId and username in sessionstorage
            if (statusCode = 200) {
                sessionStorage.setItem("userId", data.userData.userId)
                sessionStorage.setItem("username", data.userData.username)
                isLoggedIn = true
            }
        })
        return isLoggedIn
}




export default login