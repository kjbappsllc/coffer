import { webServer, dbRestAPI } from './infrastructure/servers'

dbRestAPI.start()
.then(() => {
    return webServer.start()
})