const express = require('express');
const router = express.Router();
const Person = require('./../models/person');

// POST route to add a person
router.post('/',async function(req,res){
    try{
        const data = req.body; // Assuming the request body is an object containing the person details

        // Create a new person
        const newPerson = new Person(data);
        // Save the person to the database
        const response = await newPerson.save();
        console.log('Data saved successfully');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});  
    }
    
})

// Get method to fetch all the persons
router.get('/',async function(req,res){
    try{
        const persons = await Person.find();
        console.log('Data fetched successfully');
        res.status(200).json(persons);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});  
    }
})

// Get method to fetch all the persons based on work type
router.get('/:workType',async function(req,res){
    try{
        const workType = req.params.workType;
        if(workType=='chef' || workType=='waiter' || workType=='manager' || workType=='delivery'){
            const response = await Person.find({work:workType});
            console.log('Data fetched successfully');
            res.status(200).json(response);
        }else{
            res.status(404).json({error:'Invalid work type'});
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});  
}
})

router.put('/:id',async function(req,res){
    try{
        const personId = req.params.id; //Extracting the person id from the request
        const updatedPersondata = req.body;
        const response = await Person.findByIdAndUpdate(personId,updatedPersondata,{
            new:true,//To return the updated data
            runValidators:true//To run the mongoose validations for the update
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
        const personId = req.params.id; //Extracting the person id from the request
        //Assuming you have a person model
        const response = await Person.findByIdAndDelete(personId);

        if(!response){
            return res.status(404).json({error:'Person not found'});
        }

        console.log('Data deleted successfully');
        res.status(200).json({message:'Person deleted successfully'});
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});  
    }
});

module.exports = router;
