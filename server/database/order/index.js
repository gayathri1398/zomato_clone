import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref:"Users"
    },
    orderDetails: [{
        food: {
            type: mongoose.Types.ObjectId,
            ref: "Foods"
        },
     quantity: {type:Number, required: true},
     payment: {type:String, required: true},
     status: {type: String, default: "Placed"},
     paymentDetails: {
        itemTotal:  {type: Number, required: true},//we cant refer the food model because when the price of food changes, the history details
                                                    //  also gets changed . 
        promo: {type: Number, required: true},     // promocode:amount
        tax: {type: Number, required: true},

    },  
    }]
  
},
{
    timestamps: true,
});

export const OrderModel = mongoose.model("Orders", OrderSchema)