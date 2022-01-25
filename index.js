const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'access.log')
const pathToLog89 = path.join(__dirname, '89.123.1.41_requests.log')
const pathToLog34 = path.join(__dirname, '34.48.240.111_requests.log')


function logToFile(path) {
    const readStream = fs.createReadStream(path, 'utf-8');
    const writeStream89 = fs.createWriteStream(pathToLog89, 'utf-8');
    const writeStream34 = fs.createWriteStream(pathToLog34, 'utf-8');

    function dataFilter(data) {
        data.forEach(log => {
            if (log.includes('89.123.1.41')) {
                writeStream89.write(log)
            } else if (log.includes('34.48.240.111')) {
                writeStream34.write(log)
            }
        })
    }

    readStream.on('data', (data, error) => {
        if (error) {
            throw error
        }
        let dataArr = data.split('\n');
        dataFilter(dataArr)
    });

    readStream.on('end', () => {
        console.log('Чтение файла завершено')
    });
}
logToFile(filePath)