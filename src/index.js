const axios = require('axios')

const hello = name => 'Hello' + name

const users = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users?_limit=10')
    return res.data
}

module.exports = {
    hello,
    users
}