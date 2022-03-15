import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/posts.js'
//use express framework
const app = express();
app.use(cors())
app.use(bodyParser.json({limit:'30mb',extended:true}))
app.use(bodyParser.urlencoded({extended:true}))

//routing starts
app.use('/posts/',postRoutes)

const PORT = 5000;

//connect mongoose db
const CONNECTION_URL = "mongodb://localhost:27017/memories_db"


mongoose.connect(CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>app.listen(PORT, ()=>console.log(`server running in PORT ${PORT}`)))
.catch((error) => console.log(`${error} did not connect`))

