import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';

import { mongoURL } from './config/database';
import articleRouter from './app/router/article.router';

const app = express();

//database
mongoose.connect(mongoURL(), {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
.then(db => { console.log("MongoDB online"); })
.catch(error => { console.log(error) });

//settings
app.set("port", process.env.PORT || 3000);

//middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//routes
app.use("/api", articleRouter);

//static

export default app;