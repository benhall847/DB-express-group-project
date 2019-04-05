const Item = require('../models/items');

async function dashboardGet(req, res) {

    const allItems = await Item.getAll()

    // console.log(allItems);
    res.render('dashboard', {
        locals: {
            items: allItems,
        }
    })
}



async function dashboardUpdate(req, res) {
    const { id } = req.params
    console.log(`inside the async ${id}`)
    const update = async (req, res, newItem) => {
        await Item.update(newItem);
        res.redirect('/dashboard')
    }
    const add = async (req, res) => {
        const newItem = await Item.getByID(id)
        console.log(`inside the add in dashboardupdate`)
        if (newItem) {
            return update(req, res, newItem)

        } else {
            console.log('added the item')
        }
    }
    add(req, res)
}

module.exports = { dashboardGet, dashboardUpdate }