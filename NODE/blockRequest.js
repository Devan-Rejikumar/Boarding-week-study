import express from "express";
const app = express();
const PORT = 3000;


app.use((req,res,next)=>{
    const blockedOrigin = "https://evil.com";
    if(req.method ==='POST' && req.headers.origin === blockedOrigin){
        return res.status(403).json({message:"Requests are blocked from this origin"})
    }
    next();
})

app.get("/d",(req,res)=>{
    res.send("Welcome.....")
})

app.post("/data",(req,res)=>{
    res.json({message:'Post request successfull', body:req.body})
})

app.listen(PORT,()=>{
    console.log(`Server is running from http://localhost:${PORT}`)
})