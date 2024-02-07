// import mongoose from 'mongoose'
// import {DB_NAME} from '../constants.js'

// const connectDB = async () => {
//     try {
//          const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

//         console.log(`MogoDB is connected !! DB Host , ${connectionInstance.connection.host}`);
//     } catch(error) {
//         console.log(`DB connection error` , error);
//         throw error
//     }
// } 


// connectDB();

// export default connectDB

const mongoose = require("mongoose");
// import mongoose from 'mongoose'
const url = "mongodb+srv://palsatyam877:satyam123@cluster0.ydihheh.mongodb.net";

const connectToAtlas = () => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("connected..!!");
    }).catch((err) => {
        console.log("error....!!!!",err);
    })
}


connectToAtlas();
// module.exports = connectToAtlas