export const isCofferSetup = ({
    hostsPath,
    fs,
    hostsEntry
}) => {
    return new Promise((resolve, reject) => {
        let fileContents = ''
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