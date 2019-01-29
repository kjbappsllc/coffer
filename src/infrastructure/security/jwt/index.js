
export const createAcessTokenManager = ({
    jwt
}) => {
    const JWT_SECRET_KEY = '-thisismysecretkeyandyesitispublic-'
    return {
        generate: ({
            payload
        }) => new Promise((resolve, reject) => {
            jwt.sign(payload, JWT_SECRET_KEY, {
                expiresIn: '10s'
            }, (err, token) => {
                if (err) {
                    return reject(err)
                }
                console.log("Successfully Signed Payload .... ", token)
                return resolve(token)
            })
        }),
        decode: ({ 
            token
         }) => new Promise((resolve, reject) => {
             jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
                 if(err) {
                     return reject(err)
                 }
                 return resolve(decoded)
             })
         })
    }
}