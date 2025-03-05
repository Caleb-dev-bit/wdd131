import("./recipes.mjs").then((module) => {
    const recipes = module.default;
    displayRecipes(recipes);
}).catch((error) => console.error("Error loading recipes:", error));

function displayRecipes(recipesList) {
    const recipesContainer = document.getElementById("recipes-container");
    recipesContainer.innerHTML = "";

    recipesList.forEach(recipe => {
        const article = document.createElement("article");
        article.classList.add("recipe-card");

        article.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}">
            <div class="recipe-content">
                <p class="tags">${recipe.tags.map(tag => `<span class="tag">${tag}</span>`).join(" ")}</p>
                <h2 class="recipe-title">${recipe.name}</h2>
                <p class="rating">${'⭐'.repeat(Math.floor(recipe.rating))}</p>
                <p class="description">${recipe.description}</p>
            </div>
        `;

        recipesContainer.appendChild(article);
    });
}
