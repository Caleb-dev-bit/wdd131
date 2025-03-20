import recipes from "./recipes.mjs";

function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomRecipe() {
    return recipes[random(recipes.length)];
}

function recipeTemplate(recipe) {
    return `
    <figure class="recipe">
        <img src="${recipe.image}" alt="${recipe.name}">
        <figcaption>
            <ul class="recipe__tags">${tagsTemplate(recipe.tags)}</ul>
            <h2><a href="#">${recipe.name}</a></h2>
            <p class="recipe__ratings">${ratingTemplate(recipe.rating)}</p>
            <p class="recipe__description">${recipe.description}</p>
        </figcaption>
    </figure>`;
}

function tagsTemplate(tags) {
    return tags.map(tag => `<li>${tag}</li>`).join('');
}

function ratingTemplate(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += i <= rating 
            ? `<span class="icon-star">⭐</span>` 
            : `<span class="icon-star-empty">☆</span>`;
    }
    return `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">${stars}</span>`;
}

function renderRecipes(recipeList) {
    const recipeContainer = document.getElementById("recipes-container");
    recipeContainer.innerHTML = recipeList.map(recipeTemplate).join('');
}

function init() {
    const randomRecipe = getRandomRecipe();
    renderRecipes([randomRecipe]);
}
init();

document.getElementById("search-form").addEventListener("submit", searchHandler);

function searchHandler(e) {
    e.preventDefault();
    const query = document.getElementById("search").value.toLowerCase();
    const filteredRecipes = filterRecipes(query);
    renderRecipes(filteredRecipes);
}

function filterRecipes(query) {
    return recipes
        .filter(recipe => 
            recipe.name.toLowerCase().includes(query) || 
            recipe.description.toLowerCase().includes(query) ||
            recipe.tags.some(tag => tag.toLowerCase().includes(query)) ||
            recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(query))
        )
        .sort((a, b) => a.name.localeCompare(b.name));
}
