const Item = require('../models/items');

async function dashboardGet(req,res){

    res.render('dashboard',{
        locals:{
            items = allItems
        }
    })
}
module.exports = dashboardGet