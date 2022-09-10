import express from "express";
import morgan from "morgan";
import cors from "cors";
import * as path from 'path';

import router from "./routes/router";


// we are using the express framework to help us
// create a web server that can handle both the routes and 
// HTTP petitions: GET, POST, PUT and DELETE
const app = express();

// Settings
app.set("port", 5000);

app.use(morgan("dev")); 
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors())
app.use(express.static(path.join(__dirname, './static')));

// Routes
app.use("/api/images", router);

export default app;