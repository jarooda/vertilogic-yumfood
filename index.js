const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routes')
const port = process.env.PORT || 3000
const errorHandler = require('./middlewares/errorHandler')

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended:false }))
app.use(routes)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})