
export const createUserRoutes = ({
    accessTokenManager,
    userEntity,
    execScript,
    collectionName: collection,
    dbDriver,
    decryptPassword
}) => {
    return [
        {
            method: 'POST',
            path: '/users/register',
            handler: (request, h) => {
                console.log("Request For Register")
                let user
                const payload = request.payload
                return dbDriver.find({ 
                    collection, 
                    doc: { user: {$exists: true} } 
                }).then((res) => {
                    if (res.length === 0) {
                        return execScript({ script: 'whoami' })
                    }
                    throw new Error("A user already exists")
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
                console.log("Request For Login")
                let user
                const payload = request.payload
                return dbDriver.find({ 
                    collection, 
                    doc: { user: {$exists: true} } 
                }).then((users) => {
                    if (res.length === 0) {
                        throw new Error("There is no user registered")
                    }
                    return res.user
                }).then(user => {
                    console.log(user)
                }).catch(err => {
                    console.error(err.message)
                    const response = h.response({ token: null, err: err.message }).code(500)
                    return response
                })
            }
        }
    ]
}