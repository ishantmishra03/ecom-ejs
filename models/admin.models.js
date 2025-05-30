import mongoose from 'mongoose';

const adminSchema = mongoose.Schema({
    fullname : String,
    email : String,
    password : String,
})

const adminModel = mongoose.model('admin', adminSchema);
export default adminModel