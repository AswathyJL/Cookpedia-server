const downloadRecipes = require('../models/downloadModel')

// add to downloadRecipes
exports.addToDownloadRecipeController = async(req,res)=>{
    console.log(`Inside addToDownloadRecipeController`);
    const {id} = req.params
    const userId = req.userId
    const {name, image,cuisine} = req.body
    console.log(id,name,image,cuisine,userId);
    
    try {
        // check recipe already in download
        const existingRecipe = await downloadRecipes.findOne({recipeId:id})
        if(existingRecipe){
            // increment count of recipe by 1-update
            existingRecipe.count += 1
            await existingRecipe.save()
            res.status(200).json(existingRecipe)
        }
        else{
            // add recipe to your model- insert
            const newRecipe = new downloadRecipes({
                recipeId:id,recipeName:name,recipeImage:image,recipeCuisine:cuisine,count:1,userId
            })
            await newRecipe.save()
            res.status(200).json(newRecipe)
        }
    } catch (err) {
        res.status(401).json(err)
    }
    
}

// get user downloadRecipes
exports.getUserDownloadRecipeController = async(req,res)=>{
    console.log("Inside getUserDownloadRecipeController");
    const {id} = req.params
    try {
        const allUserDownloads = await downloadRecipes.find({id})
        res.status(200).json(allUserDownloads)
    } catch (err) {
        res.status(401).json(err)
    }
}

// get all downloadRecipes
exports.getAllDownloadListController = async(req,res)=>{
    console.log("Inside getAllDownloadListController");
    const {id} = req.params
    try {
        const allDownloads = await downloadRecipes.find()
        res.status(200).json(allDownloads)
    } catch (err) {
        res.status(401).json(err)
    }
}