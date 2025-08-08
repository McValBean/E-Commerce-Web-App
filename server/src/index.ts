import express from 'express'
import connectDB from "./config/db";


const app = express();
const port = 3000;

connectDB();


