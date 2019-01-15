
export const getUsername = ({
    exec
}) => {
    return new Promise((resolve, reject) => {
        exec('whoami', (err, stdout, _) => {
            err ? reject(err) : resolve(stdout)
        })
    })
}