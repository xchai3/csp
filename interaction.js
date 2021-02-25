const express = require('express')
const app = express()
const port = 5000; //shell server

let sendEvil = (req, res) => {
    res.send("<script>alert(233)</script>");
}

app.get('/js/interaction.js', sendEvil);

// app.get('/evil.html', sendEvil)

app.listen(port, () => {
    console.log(`evil.local server listening on port ${port}!`)
})
