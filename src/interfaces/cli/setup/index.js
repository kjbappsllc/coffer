import { getUsername } from './username'
import { setUserOwnership } from './hosts-ownership'
import { setPermissions } from './permissions'

export const setupApplication = ({
    exec,
    fs,
    hostsScript,
    permissionsScriptFn,
    yellow,
}) => {
    return new Promise((resolve, reject) => {
        getUsername({
            exec
        }).then(username => {
            console.log(`\nCurrently logged in user: `, yellow(username))
            setUserOwnership({ exec, hostsScript })
                .then(() => {
                    return Promise.resolve()
                }).then(() => {
                    const permissionsScript = permissionsScriptFn({ username })
                    return setPermissions({ exec, permissionsScript })
                }).then((output) => {
                    console.log(output)
                }).catch(err => {
                    reject(err)
                })
        }).catch((err) => {
            reject(err)
        })
    })
}