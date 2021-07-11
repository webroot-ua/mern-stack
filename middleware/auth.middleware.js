const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = (req, res, next) => {
    if (req.method === 'OPTIONS') { // if server is available
        return next()
    }

    try {
        const token = req.headers.authorization.split(' ')[1] // "Rearer TOKEN"
        if (!token) {
            return res.status(401).json({ message: 'No authorization' }) // stop
        }

        const decoded = jwt.verify(token, config.get('jwtSecret'))
        req.user = decoded
        next()

    } catch (e) {
        res.status(401).json({ message: 'No authorization' })
    }
}