import express from 'express';
import { authMiddleware } from './middleware';
const app = express();
const PORT = 3000;

app.get('/',authMiddleware,(req,res)=>{
    res.send("Hellow")
})




app.listen(PORT,()=>{
console.log(`Server is running from http://localhost:${PORT}`)
})