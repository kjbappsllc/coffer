
export const createInsertFn = ({
    db
}) => ({
    collection,
    doc
}) => {
    if (!Object.keys(db).includes(collection)) {
        return Promise.reject(`Error: Database does not have a collection '${collection}'`)
    }
    return new Promise((resolve, reject) => {
        const currDb = db[collection]
        currDb.insert(doc, (err, newDoc) => {
            err ? reject(err) : resolve(newDoc)
        })
    })
}