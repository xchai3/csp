const express = require('express')
const app = express()
const port = 5000;

let sendEvil = (req, res) => {
    res.send("<script>alert(233)</script>");
}

app.get('/', sendEvil)

// app.get('/evil.html', sendEvil)

app.listen(port, () => {
    console.log(`evil.local server listening on port ${port}!`)
})
