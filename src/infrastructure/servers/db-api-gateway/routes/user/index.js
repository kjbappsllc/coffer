
export const createUserRoutes = ({
    accessTokenManager,
    userEntity,
    execScript,
    collectionName: collection,
    dbDriver
}) => {
    return [
        {
            method: 'POST',
            path: '/users/register',
            handler: (request, h) => {
                let user
                const payload = request.payload
                return dbDriver.find({ 
                    collection, 
                    doc: { user: {$exists: true} } 
                }).then((res) => {
                    if (res.length === 0) {
                        return execScript({ script: 'whoami' })
                    }
                    throw new Error("A user already exists, delete account if you want to start over")
                }).then((name) => {
                    try {
                        user = { ...userEntity.init({ name }) }
                    } catch (err) {
                        throw new Error(err.message)
                    }
                    console.log("Inserting User: ", user, " into DB")
                    return dbDriver.insert({ 
                        collection,
                        doc: { user: { ...user, password: payload.pass } }
                    })
                }).then((user) => {
                    return accessTokenManager.generate({ payload: { id: user._id }})
                }).then(token => {
                    const response = h.response({ ...user, token }).code(200)
                    return response
                }).catch(err => {
                    console.error(err.message)
                    const response = h.response({ token: null, err: err.message }).code(500)
                    return response
                })
            }
        },
        {
            method: 'POST',
            path: '/users/login',
            handler: (request, h) => {
                
            }
        }
    ]
}