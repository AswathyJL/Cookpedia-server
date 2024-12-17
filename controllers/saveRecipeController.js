const saveRecipes = require('../models/saveRecipeModel')

// add to saveRecipes
exports.addToSaveRecipeController = async (req, res)=>{
    console.log(`Inside addSaveRecipeController`);
    const {id} = req.params
    const userId = req.userId
    const {name, image} = req.body

    try {
        const existingRecipe = await saveRecipes.findOne({recipeId:id,userId})
        if(existingRecipe){
            res.status(406).json("Selected Recipe already in your collections.. Please add another")
        }
        else{
            const newRecipe = new saveRecipes({
                recipeId:id, name,image,userId
            })
            await newRecipe.save()
            res.status(200).json(newRecipe)
        }
    } catch (err) {
        res.status(401).json(err)
    }
}

// get from saveRecipes
exports.getUserSavedRecipeController = async (req,res)=>{
    console.log("Insdie getUserSavedRecipeController");
    const userId = req.userId
    try {
        const userRecipeCollection = await saveRecipes.find({userId})
        res.status(200).json(userRecipeCollection)
    } catch (err) {
        res.status(401).json(err)
        
    }
}

// remove save recipe - authorised user
exports.removeSaveRecipeController = async (req,res)=>{
    console.log("Inside removeSavedRecipeController");
    // get recipe id to be removed from req params
    const {id} = req.params
    // remove item from collection using findByIdandDelete(_id)
    try {
        const removeSaveRecipe = await saveRecipes.findByIdAndDelete({_id:id})
        res.status(200).json(removeSaveRecipe)
    } catch (err) {
        res.status(200).json(err)
    }
}

