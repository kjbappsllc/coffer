
export const setUpPortProxy = ({
    portProxyScript,
    exec
}) => new Promise((resolve, reject) => {
    exec(portProxyScript, (err, stdout, _) => {
        err ? reject(err) : resolve('SUCCESS: added port proxy')
    })
})
