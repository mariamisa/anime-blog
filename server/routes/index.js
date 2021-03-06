const Router=require('express').Router();

const {
    register,
    getAllUsers,
    login,logout,
    getAllBlogs,
    addNewBlog,
    deleteAllBlogs,
    deleteAllUsers,
    googleAuth,
    getBlogsByTitle
    } =require('../controller');
const {
    registerValidation,
    checkEmail,
    loginValidation,
    protected,
    validationBlog
    } =require('../middelware')

//user routes
Router.get('/users',getAllUsers)
Router.post('/register',registerValidation,checkEmail,register)
Router.post('/login',loginValidation,login)
Router.get('/logout',logout)
Router.delete('/users',deleteAllUsers)
Router.post('/login/google', googleAuth);

//blogs routes (protected add blog)
Router.get('/blogs',getAllBlogs)
Router.get('/blogs/:search',getBlogsByTitle)
Router.post('/blogs',protected,validationBlog,addNewBlog)
Router.delete('/blogs',deleteAllBlogs)


module.exports=Router;