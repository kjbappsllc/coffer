
export const createUserProfileGateway = ({
    create,
    edit,
    addIncomeSource,
    addPastLocation
}) => ({
    create: ({ userProfile }) => create(userProfile),
    edit: ({ newUserProfile }) => edit(newUserProfile),
    addIncomeSource: ({ incomeSource }) => addIncomeSource(incomeSource),
    addPastLocation: ({ location }) => addPastLocation(location)
})