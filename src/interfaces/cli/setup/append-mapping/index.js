
export const appendToHosts = ({
    fs,
    hostsFile,
    content
}) => new Promise((resolve, reject) => {
    fs.appendFile(hostsFile, content, (err) => {
        err ? reject(err) : resolve("SUCCESS: wrote to hosts file")
    })
})