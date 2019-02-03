
export const createUserGateway = ({
    baseUrl,
    fetch
}) => ({
    register: ({ encryptedPass }) => {
        return new Promise((resolve, reject) => {
            fetch(`${baseUrl}/users/register`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ pass: encryptedPass })
            }).then(res => {
                return res.json()
            }).then(data => {
                if( !data.token ) {
                    return reject(data)
                }
                localStorage.setItem('token', data.token)
                resolve({ user: data })
            }).catch(err => {
                console.log(err.message)
            })
        })
    },
    login: ({ encryptedPass }) => {
        return new Promise((resolve, reject) => {
            fetch(`${baseUrl}/users/login`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ pass: encryptedPass })
            }).then(res => {
                return res.json()
            }).then(data => {
                if( !data.token ) {
                    return reject(data)
                }
                localStorage.setItem('token', data.token)
                resolve({ user: data })
            }).catch(err => {
                console.log(err.message)
            })
        })
    }
})