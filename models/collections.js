const mongoose=require('mongoose')

//create model corresponding to collections in mongodb atlas

const users=new mongoose.model("users",{
    username:String,
    email:String,
    psw:String,
    contact:Number,
    subject:String,
    message:String,
    enquiry:[]
})


//model for admin collection
const admins=new mongoose.model("admins",{
    username:String,
    email:String,
    psw:String,
    viewstudents:[]
})

//model for courses
const courses=new mongoose.model("courses",{
   
    courseid:Number,
    coursename:String,
    description:String,
    duration:Number,
    coursefee:Number,
    seat:Number,
    time:Number,
    place:String
})

//model for admission
// const students=new mongoose.model("students",{
//     fullname:String,
//     dob:String,
//     contactno:String,
//     email:String,
//     qualification:String,
//     year:Number,
//     percentage:Number,
//     idproof:String,
//     photo:String
// })
//model for user admission
const admissions=new mongoose.model("admissions",{
    fullname:String,
    dob:String,
    contactno:Number,
    email:String,
    qualification:String,
    year:Number,
    percentage:Number,
    idproof:String,
    photo:String

})
//model for user enquiry
const enquiries=new mongoose.model("enquiries",{
   
    uname:String,
    email:String,
    subject:String,
    message:String
})

module.exports={
    users,
    admins,
    admissions,

    courses,
    enquiries
}