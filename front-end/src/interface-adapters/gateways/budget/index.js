
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
            }).then(res => {
                if ( res.status !== 200 ) {
                    return reject(new Error(res.statusText))
                }
                return res.json()
            }).then((res) => {
                resolve(res)
            })
        })
    },
    removeById: ({ id }) => {
        //implementation
    },
    addGroup: ({ id, group }) => {
        //implementation
    },
    edit: ({ id, budget }) => {
        //implementation
    },
    getAll: () => {
        //implementation
    }
})