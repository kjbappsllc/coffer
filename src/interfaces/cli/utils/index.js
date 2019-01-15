export const getScriptExt = ({ platform }) => platform === 'win32' ? 'bat' : 'sh'

export const getHostsPath = ({ platform, path }) => {
    const windowsPath = 'C:/Windows/System32/drivers/etc/hosts'
    const unixPath = '/etc/hosts'
    return platform === 'win32' ? path.relative('.', windowsPath) : unixPath
}

export const getFileOwnershipScript = ({ platform, hostsPath }) => {
    return platform === 'win32'
        ? `powershell.exe -Command "Start-Process cmd -ArgumentList \'/c takeown /f ${hostsPath}\' -Verb RunAs"`
        : `sudo chown $(whoami) ${hostsPath}`
}

export const getPermissionsScriptFn = ({ platform, hostsPath }) => ({
    username
}) => {
    //TODO get mac script working
    return platform === 'win32'
        ? `icacls ${hostsPath} /grant:r ${username.split('\\')[1].trim()}:(R,W) && icacls ${hostsPath} /reset`
        : 'echo skipping set permissions for MACOS environment'
}

export const getPortProxyScript = ({ platform }) => {
    //TODO get mac script working
    const windowsScript = 'netsh interface portproxy add v4tov4 listenport=80 listenaddress=127.3.3.3 connectport=8080 connectaddress= 127.0.0.1'
    const windowsScriptAdminRun = `powershell.exe -Command "Start-Process cmd -ArgumentList \'/c ${windowsScript}\' -Verb RunAs"`
    return platform === 'win32' ? windowsScriptAdminRun : ''
}

export const getCliColors = ({ chalk }) => ({
    orange: chalk.bold.hex('#d35400'),
    yellow: chalk.yellow,
    green: chalk.green.bold
})