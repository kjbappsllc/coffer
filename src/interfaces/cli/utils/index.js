export const getScriptExt = ({ platform }) => platform === 'win32' ? 'bat' : 'sh'

export const getHostsPath = ({ platform }) => {
    const windowsPath = 'C:/Windows/System32/drivers/etc/hosts'
    const unixPath = '/etc/hosts'
    return platform === 'win32' ? windowsPath : unixPath
}

export const getFileOwnershipScript = ({ platform, hostsPath }) => {
    //TODO get mac script working
    const windowsScript = `powershell.exe -Command "Start-Process cmd -ArgumentList \'/c takeown /f ${hostsPath}\' -Verb RunAs"`
    return platform === 'win32' ? windowsScript : ''
}

export const getPermissionsScriptFn = ({ platform, hostsPath }) => ({
    username
}) => {
    //TODO get ma script working
    const windowsScript = `icacls ${hostsPath} /grant:r ${username.split('\\')[1].trim()}:(R,W) && icacls ${hostsPath} /reset`
    return platform === 'win32' ? windowsScript : ''
}

export const getCliColors = ({ chalk }) => ({
    orange: chalk.bold.hex('#d35400'),
    yellow: chalk.yellow,
    green: chalk.green.bold
})