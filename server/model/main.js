import { Schema,model } from "mongoose";

const createModel = new Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
},{ timestamps: true })

const MainDataModel = model("commerce",createModel);
export default MainDataModel;