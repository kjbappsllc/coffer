
export const setPermissions = ({
    exec,
    permissionsScript
}) => new Promise((resolve, reject) => {
    exec(permissionsScript, (err, stdout, _) => {
        err ? reject(err) : resolve(stdout)
    })
})