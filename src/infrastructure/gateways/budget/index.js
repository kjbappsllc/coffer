
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
            }).then(response => {
                if (!response.err) {
                    return resolve(response.res)
                }
                return reject(response.err)
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