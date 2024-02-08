import mongoose from 'mongoose'
import {DB_NAME} from '../constants.js'

const connectDB = async () => {
    try {
         const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
  
        // const connectionInstance = await mongoose.connect(urldb);


        console.log(`MogoDB is connected !! DB Host , ${connectionInstance.connection.host}`);

        console.log(`MongoDB is connected`);
    } catch(error) {
        console.log(`DB connection error` , error);
        throw error
    }
} 

export default connectDB
