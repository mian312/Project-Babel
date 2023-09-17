import express from "express";
import pkg from 'body-parser';
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from 'dotenv';

// Declaring constants
const app = express();
const { urlencoded, json } = pkg;
dotenv.config();

//API security
app.use(helmet());

//handle CORS error
app.use(cors());

//Logger
app.use(morgan("tiny"));

// Parse JSON request bodies
app.use(express.json());

// Router
app.use('/api', router);

//MongoDB Connection Setup
connectToMongo();

// Set body bodyParser
app.use(urlencoded({ extended: true }));
app.use(json());

const port = process.env.PORT || 5000;

//Load routers
// import userRouter from "./src/routers/user.router.js";
// import ticketRouter from "./src/routers/ticket.router.js";

//Use Routers
// app.use("/api/user", userRouter); 

//Error handler
import handleError from "./src/utils/errorHandler.js";
import connectToMongo from "./src/database/connectToMongo.js";
import router from "./src/router/route.js";

app.use((req, res, next) => {
    const error = new Error("Resources not found!");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    handleError(error, res);
});

app.listen(port, () => {
    console.log(`Backend is ready on http://localhost:${port}`);
});