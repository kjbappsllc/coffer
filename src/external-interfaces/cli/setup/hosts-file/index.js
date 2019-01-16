import { getUsername } from './username'
import { setUserOwnership } from './hosts-ownership'
import { setPermissions } from './permissions'
import { appendEntryToHosts } from './hosts-entry'

export const setupHostsConfig = ({
    exec,
    fs,
    hostsScript,
    hostsPath,
    hostsEntry,
    permissionsScriptFn,
    yellow,
}) => {
    return new Promise((resolve, reject) => {
        getUsername({
            exec
        }).then(username => {
            console.log(`\nCurrently logged in user: `, yellow(username))
            return setUserOwnership({ exec, hostsScript })
                .then(() => {
                    return Promise.resolve()
                }).then(() => {
                    const permissionsScript = permissionsScriptFn({ username })
                    return setPermissions({ exec, permissionsScript })
                }).then((output) => {
                    console.log(output)
                    return appendEntryToHosts({ fs, hostsPath, hostsEntry })
                }).catch(err => {
                    reject(err)
                })
        }).then((msg) => {
            resolve(msg)
        }).catch((err) => {
            reject(err)
        })
    })
}