import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    image: String,
    name : String,
    price : Number,
    discount: {
        type: Number,
        default : 0
    },
    bgColor : String,
    panelColor : String,
    textColor : String
});

const postModel = mongoose.model('post', postSchema);

export default postModel