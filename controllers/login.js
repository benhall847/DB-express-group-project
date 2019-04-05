const User = require('../models/users');

function loginPage (req,res){
    res.render('login-form',{
        locals:{
            email:'',
            message: ''
        }
    });
};

const loginPost = async (req,res)=>{

    const newUser = await User.getByEmail(req.body.email);

    if (newUser.checkPassword(req.body.password)){
        req.session.user = newUser.id;
        req.session.save(()=>{
            res.redirect('/dashboard');
        });
    }else{
        res.render('login-form',{
            locals:{
                email:req.body.email,
                message:"ACCESS DENIED"
            }
        });
    };
};


module.exports = {loginPage, loginPost}