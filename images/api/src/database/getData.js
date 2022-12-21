const connection = require("./connection.js")

/**
 * 
 * @params query: query to find data inside database
 * @returns result: retrieved data from database
 */
const getData = (query) => {
    return connection.promise().query(query)
        .then(([rows, fields]) => {
            return rows
        })
}

module.exports = getData;