export const getScriptExt = ({ platform }) => platform === 'win32' ? 'bat' : 'sh'

export const getHostsPath = ({ platform }) => {
    const windowsPath = 'C:/Windows/System32/drivers/etc/hosts'
    const unixPath = '/etc/hosts'
    return platform === 'win32' ? windowsPath : unixPath
}