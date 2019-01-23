
export const createFindFn = ({
    db
}) => ({
    collection,
    query
}) => {
    if (!Object.keys(db).includes(collection)) {
        return Promise.reject(`Error: Database does not have a collection '${collection}'`)
    }
    return new Promise((resolve, reject) => {
        const currDb = db[collection]
        currDb.find(query, (err, docs) => {
            err ? reject(err) : resolve(docs)
        })
    })
}