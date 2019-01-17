
export const createBudgetRoutes = () => [
    {
        method: 'POST',
        path: '/budgets',
        handler: (request, h) => {
            console.log("Request Received:", request.payload)
            return h.response({
                title: 'test',
                budgetType: 'test-type',
                id: 1,
                groups: []
            }).code(200)
        }
    }
]