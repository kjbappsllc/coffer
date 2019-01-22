import { appendEntryToHosts } from './hosts-entry'

export const setupHostsConfig = ({
    exec,
    fs,
    fileOwnershipScript,
    hostsPath,
    hostsEntry,
    permissionsScript,
    execScript
}) => {
    return execScript({ exec, script: fileOwnershipScript })
        .then(() => {
            return Promise.resolve()
        }).then(() => {
            console.log("Getting Permissions ...")
            return execScript({ exec, script: permissionsScript })
        }).then(() => {
            console.log("Adding mapping to hosts file ...")
            return appendEntryToHosts({ fs, hostsPath, hostsEntry })
        }).then((msg) => {
            console.log(msg)
            return msg
        }).catch(err => {
            console.log(err)
            return err
        })
}