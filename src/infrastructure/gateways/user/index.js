
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
                if (res.status !== 200) {
                    return reject(new Error(res.statusText))
                }
                return res.json()
            }).then(token => {
                resolve(token)
            }).catch(err => {
                console.log(err.message)
            })
        })
    }
})