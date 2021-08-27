const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
console.log("!!!!!!!!!!!!!!!")
app.prepare().then(() => {
    const server = express()

    // this will match all the URLs that start with @
    // e.g. @computer, @hello
    server.get('/@*', (req, res) => {
        return app.render(req, res, '/[topic]', req.query)
    })


    server.all('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, err => {
        if (err) throw err
            console.log(`> Ready on http://localhost:${port}`)
    })
})