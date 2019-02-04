
export const createConnectFn = ({
    fs
}) => ({
    urls,
    db,
    nedb: Database,
    folderPath
}) => {
        if (urls.constructor !== Array) {
            return Promise.reject('Error: Urls should be an array of collections')
        }
        return new Promise((resolve, reject) => {
            urls.forEach((collection) => {
                const path = `${folderPath}/${collection}.db`
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
            console.log("Connected to database ...")
            resolve({ db })
        })
    }