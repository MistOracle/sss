import { Schema, model, models } from "mongoose"

const keySchema = new Schema({
    regKey:{
        type:String,
        required:true,
        unique:true
    },
    url:{
        type:String,
        unique:true
    }
});

const Keys = models.Keys || model("Keys",keySchema);

export default Keys;