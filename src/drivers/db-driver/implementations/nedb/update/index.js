
export const createUpdateFn = ({
    db
}) => ({
    collection,
    query,
    updateObj
}) => {
        if (!Object.keys(db).includes(collection)) {
            return Promise.reject(`Error: Database does not have a collection '${collection}'`)
        }
        return new Promise((resolve, reject) => {
            const currDb = db[collection]
            currDb.update(query, updateObj, { multi: false }, (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve()
                }
            })
        })

    }