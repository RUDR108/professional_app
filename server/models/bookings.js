const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
        endAt: { type: Date, required:'Ending date is required.'},
        startAt: { type: Date, required:'Start date is required.'},
        totalPrice:Number,
        days: Number,
        guests:Number,
        createdAt: { type: Date, default: Date.now },
        user:{type:Schema.Types.ObjectId,ref:'User'},
        rental:{type:Schema.Types.ObjectId,ref:'Rental'}
},{collection: 'Booking'});

module.exports=mongoose.model('Booking',bookingSchema,'Booking');