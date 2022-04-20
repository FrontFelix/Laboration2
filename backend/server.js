const express = require('express')
const app = express()
const port = 8080


app.get('/test', async (req, res) => {
    return await res.send('testar')
})

app.listen(port, () => {
    console.log('Server körs')
})