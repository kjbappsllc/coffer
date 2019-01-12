
export const createWsServer = ({
    ws,
    port
}) => {
    const wsServer = new ws.Server({
        port: port
    })
    return {
        wsServer: {
            start: () => {
                wsServer.on("connection", (ws) => {
                    ws.on('message', (message) => console.log(message))
                    ws.send('Connected')
                })
            }
        }
    }
}