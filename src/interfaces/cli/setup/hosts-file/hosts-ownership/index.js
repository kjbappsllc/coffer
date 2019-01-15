
export const setUserOwnership = ({
    hostsScript,
    exec
}) => new Promise((resolve, reject) => {
    exec(hostsScript, (err, stdout, _) => {
        err ? reject(err) : resolve(stdout)
    })
})