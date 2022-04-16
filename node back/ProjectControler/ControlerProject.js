const express = require('express')
const router = express.Router()

const authMiddleware = require('../Middlewares/TokenValidation')

router.use(authMiddleware)

router.get('/', (req, res) => {
    res.send({ ok: true, user: req.userId})
})

module.exports = app => app.use('/projects', router)