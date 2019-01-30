
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
                console.log("Payload: ", request.payload)
                const payload = request.payload
                return execScript({
                    script: 'whoami'
                }).then((name) => {
                    let user
                    try {
                        user = {
                            ...userEntity.init({ name }),
                            password: payload.pass
                        }
                    } catch (err) {
                        throw new Error(err.message)
                    }
                    console.log("Would Insert User into DB...", user)
                    return accessTokenManager.generate({ payload: { id: user._id }})
                }).then(token => {
                    const response = h.response({ token }).code(200)
                    return response
                }).catch(err => {
                    const response = h.response({ token: null }).code(500)
                    return response
                })
            }
        }
    ]
}