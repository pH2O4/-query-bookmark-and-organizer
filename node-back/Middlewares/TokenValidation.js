const jwt = require('jsonwebtoken')
const authConfig = require('../routes/UserManager/auth.json')

module.exports = (req, res, next) => {
    const authHead = req.headers.authorization

    if(!authHead)
    return res.status(401).send({ error: 'No token provided' })
    const parts = authHead.split(' ');

    if(!parts.length == 2)
    return res.status(401).send({error: 'Token error'})

    const [ scheme, token] = parts

    if(!/^Bearer$^/i.test(scheme))
    return res.status(401).send({error: 'Token bad formatted '})

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err) return res.status(401).sned({ error: 'Token invalid'})
        req.userId = decoded.id
        return(next())
    })
}