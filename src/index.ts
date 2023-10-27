import express, { Request, Response, json } from "express";
import notes_router from "./notesRoutes/notesRoutes";

const app = express();

app.use(json());

app.use('/notes',notes_router)

app.use((err:Error,req:Request,res:Response)=>{
    res.json(({
        message:err.message
    }))
});

app.listen(3600,()=>{
    console.log("Server running on port 3600")
});
