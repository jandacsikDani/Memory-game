import express from "express";
import router from "./routes";
import cors from "cors";

const app = express();
const morgan = require('morgan');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api', router);

export default app;