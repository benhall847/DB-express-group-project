const db = require('./db');

const Item = require('./items');

const bcrypt = require('bcryptjs');

class User{
    constructor(id, name, email, password){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
    static getByEmail(email){
        return db.one(`select * from users where email=$1`,email)
            .then((userData)=>{
                return new User(
                userData.id,
                userData.name,
                userData.email,
                userData.password
                )
            })
    }
    setPassword(newPassword){
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(newPassword, salt);
        this.password = hash;
    }
    checkPassword(password){
        
        return bcrypt.compareSync(password,this.password)
    }

}


module.exports = User;