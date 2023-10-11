const models = require('../models/collections')

//logic for user register

const userRegister = (req, res) => {
    const username = req.body.username
    const email = req.body.email
    const psw = req.body.psw

    // res.send({username,email,psw})
    //check enail is present in users collection
    models.users.findOne({ email }).then(user => {
        //check user prrsent or not
        if (user) {
            res.status(401).send("user already exist")
        } else {
            let newUser = new models.users({
                username, email, psw

            })
            newUser.save()
            res.status(200).json(newUser)
        }
    })

}

//logic for user login

const userLogin = (req, res) => {
    const { username, psw } = req.body

    //check email,psw present or not
    models.users.findOne({ username, psw }).then(user => {
        if (user) {
            res.status(200).json({
                username: user.username,
                psw: user.psw
            })
        } else {
            res.status(401).json("incorrect username and password")
        }
    })

}

//logic for admin registration

const adminRegister = (req, res) => {
    const { username, email, psw } = req.body
    models.admins.findOne({ email }).then(user => {
        if (user) {
            
            res.status(401).send("user already exist")
        } else {
            let newAdmin = new models.admins({
                username, email, psw
            })

            newAdmin.save()
            res.status(200).json(newAdmin)
        }
    })
}
//logic for adminLogin

const adminLogin = (req, res) => {
    const { username, psw } = req.body

    models.admins.findOne({ username, psw }).then(admin => {
        if (admin) {
            res.status(200).json({
                username
                
            })
        } else {
            res.status(401).json("incorrect username and password")
        }
    })
}

//logic for add course
const addCourse = (req, res) => {
    const {
        courseid,
        coursename,
        description,
        duration,
        coursefee,
        seat,
        time,
        place } = req.body
    models.courses.findOne({ courseid }).then(course => {
        if (course) {
            res.status(401).send("course already added")
        } else {
            var newCourse = new models.courses({

                courseid,
                coursename,
                description,
                duration,
                coursefee,
                seat,
                time,
                place
            })
            newCourse.save()
            res.status(200).json(newCourse)
        }
    })
}

//logic for admission form
const admissionForm = (req, res) => {
    const { fullname,
        dob,
        contactno,
        email,
        qualification,
        year,
        percentage,
        idproof,
        photo } = req.body
        console.log(email);
        models.admissions.findOne({email}).then(student=>{
            if(student){
                res.status(401).json("Already exist")
            }else{
                var newStudent= new models.admissions({
                    fullname,
                    dob,
                    contactno,
                    email,
                    qualification,
                    year,
                    percentage,
                    idproof,
                    photo 
                })
                newStudent.save()
                res.status(200).json(newStudent)
            }
        })

}
//logic for checking course present or not 
// const updateCourse = (req, res) => {
// const {courseid}=req.params
// models.courses.findOne({courseid}).then(updatecourse=>{
//     if(updateCourse){
//         res.status(200).json(updateCourse)
//     }else{
//         res.status(401).json("course not available")
//     }
// })
// }

//logic for updating
const doUpdate=(req,res)=>{
    const{courseid}=req.params
    const update=req.body
    models.courses.findOneAndUpdate({courseid},{$set:update},{new:true}).then(newUpdate=>{
        if(newUpdate){
            res.status(200).json(newUpdate)
        }else{
            res.status(401).json("course not available")
        }
    })
}
//logic for view registered student list
const viewStudentList = (req, res) => {


}

//logic for view all courses
const viewCourses = (req, res) => {
    models.courses.find().then(course => {
        if (course) {
            res.status(200).json(course)
        } else {
            res.status(401).json("not found")
        }
    })
}
//logic for user enquiry

const userEnquiries = (req, res) => {
    const { uname,
        email,
        subject,
        message } = req.body
    models.enquiries.findOne({ email }).then(enquirydata => {
        if (enquirydata) {
            res.status(401).send("Already enquired")
        } else {
            var newEnquiry = new models.enquiries({
              uname,
                email,
                subject,
                message
            })
            newEnquiry.save()
            res.status(200).json(newEnquiry)
        }
    })
}

//logic for course single view
const courseSingle = (req, res) => {
    const { courseid } = req.params
    models.courses.findOne({ courseid }).then(singleCourse => {
        if (singleCourse) {
            res.status(200).json(singleCourse)
        } else {
            res.status(401).json("not available")
        }
    })
}
//logic  for getting admission list
const registerdUserList=(req,res)=>{

models.admissions.find().then(data=>{
    if(data){
        res.status(200).json(data)
    
    }else{
        res.status(401).json("not available")
    }
})
}
//logic fro getting user enquiry list
const   userEnquiryList =(req,res)=>{

    models.enquiries.find().then(data=>{
        if(data){
            res.status(200).json(data)
        
        }else{
            res.status(401).json("not available")
        }
    })
    }

module.exports = {
    userRegister,
    userLogin,
    adminRegister,
    adminLogin,
    addCourse,
    viewCourses,
    userEnquiries,
    registerdUserList,
    viewStudentList,
    courseSingle,
    admissionForm,
    doUpdate,
    userEnquiryList
}