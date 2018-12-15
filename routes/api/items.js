const express = require("express");
const router = express.Router();

//item model
const Item = require("../../models/item");

//route GET api/items
//get all items
//public access

router.get("/", (req, res) =>{
	Item.find()
		.sort({date: -1})
		.then(items => res.json(items));
});

//route POST api/items
//create an item
//public access

router.post("/", (req, res) =>{
	const newItem = new Item({
		name: req.body.name
	});
    
	newItem.save().then(item => res.json(item));
});

//route DELETE api/items/:id
//delete an item 
//public access

router.delete("/:id", (req, res) => {
	Item.findById(req.params.id)
		.then(item => item.remove().then(() => res.json({success: true})))
		.catch(err => res.status(404).json({success: false}));
});




module.exports = router;