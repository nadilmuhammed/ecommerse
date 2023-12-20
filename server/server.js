import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import MainDataModel from "./model/main.js";
import bodyParser from "body-parser";

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

dotenv.config();


app.post("/api/createproduct",async(req,res)=>{
    const { name,price,description } = req.body

    if(!name) {
        return res.status(400).json({message:"Name is required"})
      }
      if(!price) {
        return res.status(400).json({message:"price is required"})
      }
      if(!description){
        return res.status(400).json({message: " description an image"})
      }
    try {
        let product = await MainDataModel({name,price,description})
        let response = product.save()
        res.json({ response,status:true})
    } catch (error) {
        console.log({message:error.message, status:false});
    }
})

app.get("/api/get",async(req,res)=>{
    try {
        let response = await MainDataModel.find();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
})

app.put("/api/update/:id",async(req,res)=>{
    const {id} = req.params
    const { image,price,description } = req.body;
    try {
        const response = await MainDataModel.findByIdAndUpdate(id,{$set:{image,price,description}});
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
})

app.delete("/api/delete/:id", async(req,res)=>{
    const {id}=req.params;
    try {
        let response = await MainDataModel.findByIdAndDelete(id);
        res.json(response);
        console.log("deleted");
    } catch (error) {
        console.log(error.message);
    }
})



const connect = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDB Connected...");
    } catch (error) {
        console.log(error.message);
    }
}

app.listen(process.env.PORT, () =>{
    connect();
    console.log(`Server connected to ${process.env.PORT}`);
})