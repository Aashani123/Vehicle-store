import mongoose from "mongoose";

const vehicleStore = mongoose.Schema(
    {
        image:{
            type:String,
            required:false
        },
        category:{
            type:String,
            required:true
        },
        
        owner:{
            type:String,
            required:true
        },
        saler:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:false
        },

    },
    {
        // to get update and created date
        timestamps:true
    }
)



export const Vehicle = mongoose.model('Vehicle',vehicleStore)