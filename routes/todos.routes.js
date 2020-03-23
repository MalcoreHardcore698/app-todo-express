const { Router } = require('express')
const router = Router()

router.get('/list', async (req, res) => {
    try {
        const data = require('./../data.js')
        res.send(data)
        res.status(200).json({
            message: 'Successfull received'
        })
    } catch (e) {
        res.status(500).json({
            message: 'Failure sending'
        })
    }
})

module.exports = router