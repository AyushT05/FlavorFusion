import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://ayush:Ayush2500@cluster0.aqvg9.mongodb.net/blog-app');
    console.log("DB Connected")

}


