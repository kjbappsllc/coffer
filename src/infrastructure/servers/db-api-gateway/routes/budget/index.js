
export const createBudgetRoutes = ({
    dbDriver,
    budgetCollectionName: collection
}) => {
    return [
        {
            method: 'POST',
            path: '/budgets',
            handler: (request, h) => {
                const newBudget = request.payload
                console.log("Received post request to insert into DB: ", newBudget)
                return new Promise((resolve) => {
                    dbDriver.insert({
                        collection, doc: newBudget
                    }).then((newDoc) => {
                        resolve(h.response({ res: newDoc }))
                    }).catch((err) => {
                        console.log(err)
                        resolve(h.response({ err }).code(500))
                    })
                })
            }
        }
    ]
}