import express from 'express'
import mongoose from "mongoose";
import cors from 'cors';
import projectRouter from "./routes/ProjectRouter.js";
import userRouter from "./routes/UserRouter.js";

const PORT = 3000;
// const DB_URL = 'mongodb+srv://root:root@test.xceqzp4.mongodb.net/?retryWrites=true&w=majority'
const DB_URL = 'mongodb://127.0.0.1:27017/test_db'
const app = express();

app.use(cors())
app.use(express.json())

app.use('/', userRouter)
app.use('/api', projectRouter)

async function startApp() {
    console.log('starting...')
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, ()=> console.log('server started'))
    }
    catch (e){
        console.log(e)
    }
}

await startApp()

