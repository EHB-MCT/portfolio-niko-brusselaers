const filterByDate = require('../filtering/filterByDate.js')
const getAverageNumber = require('../math/getAverageNumber.js')


describe('filterByDate test', () => {
    test('test if function filters to filteredData.current', () => {
        let test = filterByDate([{
            value: 25,
            date: "2022-12-21T22:23:55.000"
        }])
        expect(test.current).toBe(25)
        test = filterByDate([{
            value: 22,
            date: "2022-12-21T22:23:55.000"
        }])
        expect(test.current).toBe(22)
        test = filterByDate([{
            value: 22,
            date: "2022-12-21T22:23:55.000"
        }, {
            value: 110,
            date: "2022-12-21T22:23:55.000"
        }])
        expect(test.current).toBe(110)
        test = filterByDate([{
            value: 50,
            date: "2022-12-21T22:23:55.000"
        }, {
            value: 99,
            date: "2022-12-21T22:23:55.000"
        }, {
            value: 21,
            date: "2022-12-21T22:23:55.000"
        }, {
            value: 26,
            date: "2022-12-21T22:23:55.000"
        }])
        expect(test.current).toBe(26)
    })

    test('test if function filters to filteredData.hour', () => {

        test = filterByDate([{
            value: 50,
            date: "2022-12-22T20:23:55.000"
        }, {
            value: 99,
            date: "2022-12-22T21:23:55.000"
        }, {
            value: 21,
            date: "2022-12-21T10:23:55.000"
        }, {
            value: 26,
            date: "2022-12-22T23:23:55.000"
        }])
        expect(test.hour[0].date).toBe(
            "2022-12-22T20:23:55.000"
        )
        expect(test.hour[2].value).toBe(
            26
        )

    })
    test('test if function filters to filteredData.day', () => {

        test = filterByDate([{
            value: 50,
            date: "2022-12-22T00:01:00.000"
        }, {
            value: 99,
            date: "2022-12-20T21:23:55.000"
        }, {
            value: 21,
            date: "2022-12-01T10:23:55.000"
        }, {
            value: 26,
            date: "2022-12-22T23:23:55.000"
        }])
        expect(test.hour[0].date).toBe(
            "2022-12-22T00:01:00.000"
        )

    })
})
