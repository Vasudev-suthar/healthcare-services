import { Schema } from "mongoose";
import mongoose from "mongoose";

const serviceSchema = new Schema(
    {
        service_name: {
            type: String,
            required: true,
        }, 
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);

export const Service = mongoose.model('Service', serviceSchema);
