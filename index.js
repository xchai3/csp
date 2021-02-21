const express = require('express')
const app = express()
const port = 5000;

let sendEvil = (req, res) => {
    res.send("alert(233)");
}

app.get('/', sendEvil)

// app.get('/evil.html', sendEvil)

app.listen(port, () => {
    console.log(`evil.local server listening on port ${port}!`)
})
