
export const execScript = ({
    script,
    exec
}) => new Promise((resolve, reject) => {
    exec(script, (err, stdout, _) => {
        err ? reject(err) : resolve(stdout)
    })
})

export const getHostsPath = ({ platform, path }) => {
    return platform === 'win32'
        ? path.relative('.', 'C:/Windows/System32/drivers/etc/hosts')
        : '/etc/hosts'
}

export const getFileOwnershipScripts = ({ platform, hostsPath }) => {
    return {
        createOwnership: platform === 'win32'
            ? `powershell.exe -Command "Start-Process cmd -ArgumentList \'/c takeown /f ${hostsPath}\' -Verb RunAs"`
            : `sudo chown $(whoami) ${hostsPath}`,
        removeOwnership: platform === 'win32'
            ? ''
            : `sudo chown root ${hostsPath}`
    }
}

export const getPermissionsScripts = ({ platform, hostsPath, username }) => {
    return {
        addPermissions: platform === 'win32'
            ? `icacls ${hostsPath} /grant:r ${username.split('\\')[1].trim()}:(R,W) && icacls ${hostsPath} /reset`
            : 'echo skipping set permissions for MACOS environment',
        removePermissions: platform === 'win32'
            ? ''
            : 'echo skipping remove permissions for MAC environment'
    }
}

export const getPortProxyScripts = ({ platform }) => {
    const windowsScript = 'netsh interface portproxy add v4tov4 listenport=80 listenaddress=127.3.3.3 connectport=8080 connectaddress= 127.0.0.1'
    return {
        createPortF: platform === 'win32'
            ? `powershell.exe -Command "Start-Process cmd -ArgumentList \'/c ${windowsScript}\' -Verb RunAs"`
            : 'echo "rdr pass inet proto tcp from any to 127.3.3.3 port 80 -> 127.0.0.1 port 8080" | sudo pfctl -ef -',
        removePortF: platform === 'win32'
            ? ''
            : 'sudo pfctl -F all -df /etc/pf.conf'
    }
}