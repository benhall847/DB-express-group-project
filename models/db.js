const pgp = require('pg-promise')({
    query: e => {
        console.log(e);
    }
});

const options = {
    host: 'localhost',
    database: 'freeBay-app'
};
const db = pgp(options);
module.exports = db;

