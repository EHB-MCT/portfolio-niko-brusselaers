/**
 * object template
 * 
 * chartData{
 *      date(arr(str)),
 *      value(arr(int))
 * }
 */


/**
 * Read received data from room and create a chart.
 * 
 * 
 * @param chartData
 * @param duration(str) 
 * @returns
 */
const getGraph = (chartData, duration) => {
    let chartContainer = document.getElementById('chartContainer')
    let timeLabel
    // inserting all values into sensorValues variable
    let sensorValues = []
    chartData.forEach(data => {
        sensorValues.push(data.value)
    });

    //depending on what duration insert array of prefixed label
    switch (duration) {
        case "hour":
            timeLabel = [
                "60 min",
                "55 min",
                "50 min",
                "45 min",
                "40 min",
                "35 min",
                "30 min",
                "25 min",
                "20 min",
                "15 min",
                "10 min",
                "5 min",
                "0"
            ]
            break;

        case "day":

            timeLabel = [
                "24:00",
                "23:00",
                "22:00",
                "21:00",
                "20:00",
                "19:00",
                "18:00",
                "17:00",
                "16:00",
                "15:00",
                "14:00",
                "13:00",
                "12:00",
                "11:00",
                "10:00",
                "9:00",
                "8:00",
                "7:00",
                "6:00",
                "5:00",
                "4:00",
                "3:00",
                "2:00",
                "1:00",
                "0:00"
            ]
            break;

        case "week":
            timeLabel = [
                "day 7",
                "day 6",
                "day 5",
                "day 4",
                "day 3",
                "day 2",
                "day 1",
                "day 0"
            ]
            break;

        case "month":
            timeLabel = [
                "day 31",
                "day 30",
                "day 29",
                "day 28",
                "day 27",
                "day 26",
                "day 25",
                "day 24",
                "day 23",
                "day 22",
                "day 21",
                "day 20",
                "day 19",
                "day 18",
                "day 17",
                "day 16",
                "day 15",
                "day 14",
                "day 13",
                "day 12",
                "day 11",
                "day 10",
                "day 9",
                "day 8",
                "day 7",
                "day 6",
                "day 5",
                "day 4",
                "day 3",
                "day 2",
                "day 1",
                "day 0"
            ]
            break;

    }
    // creating a new chart and updating canvas element
    new Chart(chartContainer, {
        type: 'line',
        data: {
            labels: timeLabel,
            datasets: [{
                label: 'room noise level',
                data: sensorValues,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                },
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

export default getGraph