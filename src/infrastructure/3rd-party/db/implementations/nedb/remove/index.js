
export const createRemoveFn = ({
    db
}) => ({
    collection,
    query,
    removeMultiple
}) => {
    if (!Object.keys(db).includes(collection)) {
        return Promise.reject(`Error: Database does not have a collection '${collection}'`)
    }
    return new Promise((resolve, reject) => {
        const currDb = db[collection]
        currDb.remove(query, { multi: removeMultiple }, (err) => {
            err ? reject(err) : resolve()
        })
    })
}