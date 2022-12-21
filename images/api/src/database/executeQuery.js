const connection = require("./connection.js")

/**
 * 
 * @params query: query to find data inside database
 *         queryInput: data to be inserted in to query to find specific data
 * @returns result: retrieved data from database
 */
const executeQuery = (query, queryInput = null) => {
    let result
    if (queryInput == null) {
        result = connection.promise().query(query)

    } else {
        result = connection.promise().query(query, [queryInput])

    }
    return result.then(([rows, fields]) => {
        return rows
    })
}

module.exports = executeQuery;