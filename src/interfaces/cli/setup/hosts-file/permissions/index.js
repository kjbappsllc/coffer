
export const setPermissions = ({
    exec,
    permissionsScript
}) => new Promise((resolve, reject) => {
    exec(permissionsScript.create, (err, stdout, _) => {
        err ? reject(err) : resolve(stdout)
    })
})