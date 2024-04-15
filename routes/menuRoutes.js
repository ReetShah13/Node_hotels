const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/menu');

// POST method to add a menu
router.post('/',async function(req,res){
    try{
        const data = req.body; // Assuming the request body is an object containing the menu details

        // Create a new menu
        const newMenu = new MenuItem(data);
        // Save the menu to the database
        const response = await newMenu.save();
        console.log('Data saved successfully');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});  
    }
    
})

// Get method to fetch all the menus
router.get('/',async function(req,res){
    try{
        const menu = await MenuItem.find();
        console.log('Data fetched successfully');
        res.status(200).json(menu);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});  
    }
})

router.put('/:id',async function(req,res){
    try{
        const menuId = req.params.id; //Extracting the menu id from the request
        const updatedMenudata = req.body;
        const response = await MenuItem.findByIdAndUpdate(menuId,updatedMenudata,{
            new:true,//To return the updated data
            runValidators:true//To run the validators on the updated data
        });

        if(!response){
            return res.status(404).json({error:'Person not found'});
        }

        console.log('Data updated successfully');
        res.status(200).json(response);
    } 
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});  
    }
})

router.delete('/:id',async function(req,res){
    try{
        const menuId = req.params.id; //Extracting the menu id from the request
        const response = await MenuItem.findByIdAndDelete(menuId);

        if(!response){
            return res.status(404).json({error:'Person not found'});
        }

        console.log('Data deleted successfully');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});  
    }
});

//comment added
module.exports = router;