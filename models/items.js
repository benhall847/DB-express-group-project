const db = require('./db');

class Item{
    constructor(id,title,description,photo,claimed,price,user_id){
        this.id = id;
        this.title = title;
        this.description = description;
        this.photo = photo;
        this.claimed = claimed;
        this.price = price;
        this.user_id = user_id;
    }
    static getAll(){
        return db.any(`select * from items`)
            .then((itemData)=>{
                return new Item(
                itemData.id,
                itemData.title,
                itemData.description,
                itemData.photo,
                itemData.claimed,
                itemData.price,
                itemData.user_id
                )
            });
    };
};

module.exports = Item;