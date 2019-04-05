const Item = require('../models/items');

async function dashboardGet(req, res) {

    const allItems = await Item.getAll()
    const allItemsFiltered = allItems.filter(item => item.claimed === 'available')
    console.log(allItemsFiltered);
    // console.log(allItems);
    res.render('dashboard', {
        locals: {
            items: allItemsFiltered,
        }
    })
}



async function dashboardUpdate(req, res) {
    const { id } = req.params
    console.log(`inside the async ${id}`)
    const update = async (req, res, newItem) => {
        await Item.update(newItem);
    }
    const add = async (req, res) => {
        console.log(`inside the add in dashboardupdate`)
        if (id) {
            const newItem = await Item.getByID(id)
            return update(req, res, newItem)

        } else {
            const { title, description, photo } = req.body
            console.log(photo);
            console.log(req.session.user);
            await Item.add(title, description, photo, req.session.user)

        }
    }

    await add(req, res)

    res.redirect('/dashboard')

}

async function dashboardClaimed(req, res) {

    const allItems = await Item.getAll()
    const allItemsClaimed = allItems.filter(item => item.claimed === 'claimed')
    console.log(allItemsClaimed);
    // console.log(allItems);
    res.render('dashboardClaimed', {
        locals: {
            claimeditems: allItemsClaimed,
        }
    })
}

module.exports = { dashboardGet, dashboardUpdate, dashboardClaimed }