import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import AuthRoute from './Routes/AuthRoute.js'

const app = express()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

dotenv.config()

mongoose.connect(process.env.Mongo_URI)
    .then(() => {
        app.listen(process.env.PORT, console.log(`Server listening at ${process.env.PORT}`))
    })
    .catch((error) => console.log(error))

app.use('/auth', AuthRoute)
