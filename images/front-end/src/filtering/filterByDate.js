/**
 * object template
 * 
 * sensorData{
 *      value(int),
 *      date(str)
 * }
 * 
 * filteredData{
 *          curren(int),
 *          hour(arr(sensorData)),
 *          day(arr(sensorData)),
 *          week(arr(sensorData)),
 *          month(arr(sensorData))
 *          
 * }
 */


/**
 * // filter data by current, hour, day, week, month
 * 
 * @param  dataArray(arr(sensorData))
 * @returns object with result filteredData
 */
const filterByDate = (dataArray) => {
    let filteredData = {
        current: dataArray[dataArray.length - 1].value,
        hour: [],
        day: [],
        week: [],
        month: []
    }

    // create Date veriables from an hour,day,week,month earlier
    const currentDateMinusHour = new Date(Date.now() - (60 * 60 * 1000)).getTime()
    const currentDateMinusDay = new Date(Date.now() - (24 * 60 * 60 * 1000)).getTime()
    const currentDateMinusWeek = new Date(Date.now() - (7 * 24 * 60 * 60 * 1000)).getTime()
    const currentDateMinusMonth = new Date(Date.now() - (30 * 24 * 60 * 60 * 1000)).getTime()


    dataArray.forEach(data => {
        //convert string to Date
        let date = new Date(data.date).getTime()
        //push sensorData depending if the sensorData.data is bigger
        //than date from an hour,day,week,month earlier
        if (date >= currentDateMinusHour) {
            filteredData.hour.push(data)
        }
        if (date >= currentDateMinusDay) {
            filteredData.day.push(data)
        }
        if (date >= currentDateMinusWeek) {
            filteredData.week.push(data)
        }
        if (date >= currentDateMinusMonth) {
            filteredData.month.push(data)
        }

    });

    return filteredData

}

export default filterByDate