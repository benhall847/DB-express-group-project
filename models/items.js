const db = require('./db');

class Item {
    constructor(id, title, description, photo, claimed, price, user_id) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.photo = photo;
        this.claimed = claimed;
        this.price = price;
        this.user_id = user_id;
    }
    static getAll() {
        return db.any(`select * from items`)
            .then((arrayOfItems) => {
                return arrayOfItems.map((itemData) => {
                    return new Item(
                        itemData.id,
                        itemData.title,
                        itemData.description,
                        itemData.photo,
                        itemData.claimed,
                        itemData.price,
                        itemData.user_id
                    );
                });

            });
    };

    static async update(newItem) {

        console.log(`inside the updatefunc ${newItem}`);
        (newItem.claimed === "claimed") ? newItem.claimed = "available" : newItem.claimed = "claimed"

        // if (newItem.claimed === "claimed") {
        //     newItem.claimed = "available"
        // } else {
        //     newItem.claimed = "claimed"
        // }
        console.log(newItem);
        await newItem.save();
    }

    static getByID(id) {
        return db.one(`select * from items where id=$1`, [id])
            .then((item) => {
                return new Item(
                    item.id,
                    item.title,
                    item.description,
                    item.photo,
                    item.claimed,
                    item.price,
                    item.user_id

                )
            })

    };

    static add(title, description, photo, id) {
        return db.any(`
        insert into items
            (title, description, photo, claimed, price, user_id)
        values
            ($1,$2,$3,'available','free',$4)
        `, [title, description, photo, id]);
    };

    save() {
        return db.result(`
        update items set 
            title='${this.title}',
            description = '${this.description}',
            photo = '${this.photo}',
            claimed = '${this.claimed}',
            price = '${this.price}',
            user_id = '${this.user_id}'
        where id = ${this.id}    
        `);
    };
};

module.exports = Item;