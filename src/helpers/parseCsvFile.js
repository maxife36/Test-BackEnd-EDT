const fs = require('fs')

const parseCsv = (filePath) => {
    try {
        const data = fs.readFileSync(filePath, 'utf-8').split('\n')

        const columnsName = data.shift().split(',')
        const parseData = []

        data.forEach(row => {

            if (row) {
                const rowObj = {}

                const rowInfo = row.match(/(?:[^,"]+|"(?:[^"]*)")+/g)

                rowInfo.forEach((data, index) => {
                    rowObj[columnsName[index]] = data.replace(/^"|"$/g, '')
                })

                parseData.push(rowObj) 
            }
        })

        return parseData
    } catch (error) {
        console.log(error.message);
    }

}

module.exports = parseCsv