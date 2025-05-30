import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    fullname : String,
    email : String,
    password : String,
    cart : {
        type: Array,
        default: []
    },
    orders: {
        type: Array,
        default : [],
    },
    contact : Number,
    picture : String,
})

const userModel = mongoose.model('user', userSchema);
export default userModel