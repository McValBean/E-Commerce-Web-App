import { connect } from "http2";
import mongoose from "mongoose";

const connectDB = async() => {

    try{
        const connect = await mongoose.connect('mongodb-url');
        console.log('mongodb connected: ${connect.connection.host}');
    } catch(error){
        console.log('MongoDb connection failed', error);
        process.exit(1);
    }

};
export default connectDB;