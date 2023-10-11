//import express
const express=require('express')
//import logic.js 
const logic=require('../controllers/logic')

//create object for Router() class
const router=new express.Router()

//path for user registration

router.post('/admission/userRegistration',logic.userRegister)

//path for user login

router.post('/admission/userlogin',logic.userLogin)

//path for admin registration
router.post('/admission/adminRegister',logic.adminRegister)

//path for admin login
router.post('/admission/adminlogin', logic.adminLogin)

//path for admin add courses
router.post('/admission/addcourse',logic.addCourse)

//path for update coures
// router.get('/admission/updatecourse/:courseid',logic.updateCourse)

//path for do update
router.post('/admission/editcoursedetails/:courseid',logic.doUpdate)

//path for getting registerd users list
router.get('/admission/getAdmissionlist',logic.registerdUserList)

//path for getting user enquiry list
router.get('/admission/getUserEnquiryList',logic.userEnquiryList)
//path for view all courses

router.get('/admission/viewAllCourses',logic.viewCourses)

//path for user enquiry
router.post('/admission/userEnquiry',logic.userEnquiries)

//path for view registerd students
router.get('/admission/viewStudents',logic.viewStudentList)

//path for course single view
router.get('/admission/viewSingle/:courseid',logic.courseSingle)

//path for admission form
router.post('/admission/studentAdmission',logic.admissionForm)




module.exports=router