const axios = require('axios')
const Dev = require('../model/Dev')

module.exports = {
    async store(req, res) {

        const { username } = req.body

        try {
            
            const response = await axios.get(`https://api.github.com/users/${username}`)
    
            const { name, bio, avatar_url: avatar} = response.data
    
            await Dev.create({
                name,
                user: username,
                bio,
                avatar
            })

        } catch (error) {
            return res.status(500).send(err);
        }

        return res.json(response.data)
    }
}