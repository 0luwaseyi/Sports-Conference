import moongoose from "moongoose"

const connectDB = async ()=>{
    try{
        if (moongoose.connection.readyState === 0){
            await moongoose.connect(process.env.MONGODB_URI)
            console.log("db connected")
        }
    }catch (error) {
        console.log(error);
    }
};

export default connectDB