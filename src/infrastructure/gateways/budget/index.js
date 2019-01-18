
export const createBudgetGateway = ({
    baseUrl,
    fetch
}) => ({
    save: ({ budget }) => {
        return new Promise((resolve, reject) => {
            fetch(`${baseUrl}/budgets`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(budget)
            }).then(response => {
                return response.json()
            }).then(({ res, err }) => {
                if (!err) {
                    return resolve(res)
                }
                return reject(err)
            })
        })
    },
    removeById: ({ id }) => {
        //implementation
    },
    addGroup: ({ id, group }) => {
        //implementation
    },
    editTitle: ({ id, budget }) => {
        //implementation
    },
    getAll: () => {
        //implementation
    }
})