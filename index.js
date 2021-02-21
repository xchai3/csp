const express = require('express')
const app = express()
const port = 33541;

let sendEvil = (req, res) => {
    res.send("<script>alert(`Hello`)</script>");
}

app.get('/', sendEvil)

// app.get('/evil.html', sendEvil)

app.listen(port, () => {
    console.log(`evil.local server listening on port ${port}!`)
})
