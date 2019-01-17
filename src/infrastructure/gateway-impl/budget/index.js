
export const createBudgetGatewayImpl = ({
    iBudgetGateway,
    baseUrl
}) => iBudgetGateway.implement({
    create: ({ budget }) => {
        return fetch(`${baseUrl}/budgets`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(budget)
        }).then(response => response.json())
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