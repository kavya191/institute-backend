//database node server integration
//import mongoose
const  mongoose=require('mongoose')

//connect server with mongodb atlas
mongoose.connect(process.env.BASE_URL,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("MongoDb atlas connected")
}).catch(()=>{
    console.log("connection error");
})