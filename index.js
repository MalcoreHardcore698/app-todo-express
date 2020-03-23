const express = require('express')
const cors = require('cors')
const config = require('config')

const PORT = config.get('port') || 4200
const app = express()

app.use(cors())

app.use('/api', require('./routes/todos.routes'))

async function start() {
    try {
        app.listen(PORT, () => {
            console.log(`Listening on ${PORT} port`)
        })
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()