export const isCofferSetup = ({
    hostsPath,
    fs
}) => {
    return new Promise((resolve, reject) => {
        let fileContents = ''
        const hostsEntry = '127.3.3.3   coffer.co'
        const readStream = fs.createReadStream(hostsPath)
        readStream.on('data', (chunk) => {
            fileContents += chunk;
        });
        readStream.on('end', () => {
            resolve(fileContents.includes(hostsEntry))
        });
        readStream.on('error', (err) => {
            reject(err)
        })
    })
}