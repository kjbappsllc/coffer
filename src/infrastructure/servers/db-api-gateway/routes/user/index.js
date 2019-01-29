
export const createUserRoutes = ({
    accessTokenManager
}) => {
    return [
        {
            method: 'POST',
            path: '/users/register',
            handler: (request, h) => {
                console.log("Received Request for registering")
                console.log("Payload: ", request.payload)
                const payload = request.payload
                return accessTokenManager.generate({
                    payload
                }).then(token => {
                    const response = h.response({ token }).code(200)
                    return response
                }).catch(err => {
                    const response = h.response(err).code(500)
                    return response
                })
            }
        }
    ]
}