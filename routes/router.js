const express = require('express')
const recipeController = require('../controllers/recipeController')
const testimonyController = require('../controllers/testimonyController')
const userController = require('../controllers/userController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const downloadRecipeController = require('../controllers/downloadRecipeController')
const saveRecipeController = require('../controllers/saveRecipeController')

const router = new express.Router()

// all recipes
router.get("/all-recipes",recipeController.getAllRecipeController)
// add-testimony
router.post("/add-testimony",testimonyController.addTestimonyController)
// add-user
router.post("/register",userController.addUserController)
// login
router.post("/login",userController.loginController)
// view single recipe
router.get("/recipe/:id/view",jwtMiddleware,recipeController.getRecipeController)
// related recipe
router.get("/related-recipes",jwtMiddleware,recipeController.relatedRecipeController)
// add to downloadRecipe
router.post("/recipe/:id/download",jwtMiddleware,downloadRecipeController.addToDownloadRecipeController)
// add to saveRecipe
router.post("/recipe/:id/save",jwtMiddleware,saveRecipeController.addToSaveRecipeController)
// get from saveRecipe
router.get("/get-saved-recipes",jwtMiddleware,saveRecipeController.getUserSavedRecipeController)
// remove from saveRecipe
router.delete("/save-recipe/:id/remove",jwtMiddleware,saveRecipeController.removeSaveRecipeController)
// get user download recipe
router.get("/user-downloads",jwtMiddleware,downloadRecipeController.getUserDownloadRecipeController)
// edit-user
router.post("/user/edit",jwtMiddleware,userController.editUserController)
// all-users
router.get("/all-users",jwtMiddleware,userController.getAllUsersController)
// get all download list
router.get("/all-downloads",jwtMiddleware,downloadRecipeController.getAllDownloadListController)
// get testimony
router.get("/all-feedbacks",jwtMiddleware,testimonyController.getAllFeedbackController)
// update-testimony
router.get("/feedback/:id/update",jwtMiddleware,testimonyController.updateFeedbackStatusController)
// get all approved feedback
router.get("/all-approved-feedbacks",testimonyController.getAllApprovedFeedbackController)
// add recipes
router.post("/add-recipes",jwtMiddleware,recipeController.addRecipeController)
// update recipe
router.put("/recipe/:id/edit",jwtMiddleware,recipeController.updateRecipeController)
// delete recipe
router.delete("/recipe/:id/delete",jwtMiddleware,recipeController.removeRecipeController)

module.exports = router