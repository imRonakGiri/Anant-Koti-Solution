const express = require('express')
const app = express()
const port = process.env.PORT || 3000 
app.use(express.static('./Anant-Koti-Solution-main/'))
app.listen(port, () => console.log(`hey i'm Running on port ${port}`))