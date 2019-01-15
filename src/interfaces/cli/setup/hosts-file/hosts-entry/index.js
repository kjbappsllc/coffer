
export const appendEntryToHosts = ({
    fs,
    hostsPath,
    hostsEntry
}) => new Promise((resolve, reject) => {
    fs.appendFile(hostsPath, '\n\n' + hostsEntry, (err) => {
        err ? reject(err) : resolve("SUCCESS: wrote to hosts file")
    })
})