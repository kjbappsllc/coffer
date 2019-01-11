
export const createConnectFn = ({
    fs
}) => ({
    urls,
    db,
    nedb: Database
}) => {
        if (urls.constructor !== Array) {
            return Promise.reject('Error: Urls should be an array of collections')
        }
        return new Promise((resolve, reject) => {
            urls.forEach((collection) => {
                const path = `./src/infrastructure/databases/${collection}.db`
                if (!fs.existsSync(path)) {
                    fs.appendFile(path, '', (err) => {
                        if (err) {
                            reject(err)
                            return
                        }
                    })
                }
                db[collection] = new Database({ filename: path, autoload: true })
            })
            resolve({ db })
        })
    }