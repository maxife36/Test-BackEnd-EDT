const fs = require('fs')

const parseCsv = (filePath) => {
    try {
        const data = fs.readFileSync(filePath, 'utf-8').split('\n')

        const columnsName = data.shift().split(',')

        const dataObj = data.map(row => {

            const rowObj = {}

            const rowInfo = row.split(',')

            rowInfo.forEach((data, index)=>{
                rowObj[columnsName[index]] = data
            })

            return rowObj
        })

        return dataObj
    } catch (error) {
        console.log(error.message);
    }

}

module.exports = parseCsv