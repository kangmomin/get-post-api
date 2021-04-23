const port = 3003
const express = require('express')
const app = express()
const mysqli = require('mysql').createConnection({ host: "127.0.0.1", user: "root", password: "#koldin13579", database: "nonetype", port: 3306 })

mysqli.connect()

app.get('/board/:post', (req, res) => {
    const post = req.params.post
    if(post === null || post === '') return res.status(404).send('error on user info')
    mysqli.query('SELECT * FROM board', (err, posts) => {
        mysqli.end()
        for (_post of posts) {
            if(_post.id == post) {
                return res.send(_post)
            }
        }
        res.status(404).send('error')
    })
})

app.listen(port, () => {
    console.log(`rest api server is running on ${port}`)
})