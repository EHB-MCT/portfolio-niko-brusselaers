/**
 * object template
 * 
 * sensorData{
 *      value(int),
 *      date(str)
 * }
 */

/**
 * count all values up and divide them by array length to receive an average
 * 
 * @param dataArray(arr(sensorData))
 * @returns object with result averageNumber(int)
 */
const getAverageNumber = (dataArray) => {
    //count all numbers in dataArray up and store in average variable
    
    const average = dataArray.reduce((total, data) => {
        return total + data.value
    }, 0)
    //divide average by dataArray length
    const averageNumber = average / dataArray.length

    return Math.round(averageNumber)
    

}

module.exports = getAverageNumber