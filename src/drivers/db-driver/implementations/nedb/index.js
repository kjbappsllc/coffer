import fs from 'fs'

export const nedbDriver = ({
    dbDriverAdaptor,
    nedb: Database,
    fsz
}) => {
    let db = {}
    return dbDriverAdaptor.adapt({
        connect: ({ urls }) => {
            if( urls.constructor !== Array){ 
                return Promise.reject('Error: Urls should be an array of collections')
            }
            return new Promise((resolve, reject) => {
                urls.forEach((collection) => {
                    const path = `./src/infrastructure/databases/${collection}.db`
                    if(!fs.existsSync(path)) {
                        fs.appendFile(path, '', (err) => {
                            err && reject(err)
                        })
                    }
                    db[collection] = new Database({ filename: path, autoload: true })
                })
                resolve({ db })
            })
        }
    })
}