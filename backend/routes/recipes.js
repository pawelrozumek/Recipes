const router = require('express').Router();
let Recipe = require('../models/recipe.model');

router.route('/recipes').get((req, res) => {
    Recipe.find()
        .then(recipes => res.json(recipes))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const time = req.body.time;
    const description = req.body.description;
    const preparing = req.body.preparing;
    const ingredients = req.body.ingredients;

    const newRecipe = new Recipe({
        name,
        time,
        description,
        preparing,
        ingredients,
    });

    newRecipe.save()
        .then(() => res.json('New recipe added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/recipes/:id').get((req, res) => {
    Recipe.findById(req.params.id)
        .then(recipe => res.json(recipe))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/edit/recipes/:id').get((req, res) => {
    Recipe.findById(req.params.id)
        .then(recipe => res.json(recipe))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/delete/recipes/:id').delete((req, res) => {
    Recipe.findByIdAndDelete(req.params.id)
        .then(() => res.json('Recipe deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Recipe.findById(req.params.id)
        .then(recipe => {
            recipe.name = req.body.name;
            recipe.time = req.body.time;
            recipe.description = req.body.description;
            recipe.preparing = req.body.preparing;
            recipe.ingredients = req.body.ingredients;

            recipe.save()
                .then(() => res.json('Recipe updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;