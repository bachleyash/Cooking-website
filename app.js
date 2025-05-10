document.addEventListener('DOMContentLoaded', () => {
  const recipes = [
    {
      id: 1,
      title: 'Spaghetti Bolognese',
      category: 'Quick Meals',
      image: 'assets/images/recipe1.jpg',
    },
    {
      id: 2,
      title: 'Avocado Salad',
      category: 'Healthy Recipes',
      image: 'assets/images/recipe2.jpg',
    },
    {
      id: 3,
      title: 'Chocolate Cake',
      category: 'Desserts',
      image: 'assets/images/hero.jpg',
    },
  ];

  const recipeContainer = document.getElementById('recipe-container');

  function displayRecipes(filteredRecipes) {
    recipeContainer.innerHTML = '';
    filteredRecipes.forEach((recipe) => {
      const recipeCard = document.createElement('div');
      recipeCard.classList.add('recipe-card');
      recipeCard.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}">
        <h3>${recipe.title}</h3>
        <p>Category: ${recipe.category}</p>
      `;
      recipeContainer.appendChild(recipeCard);
    });
  }

  function searchRecipes() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const filteredRecipes = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(query)
    );
    displayRecipes(filteredRecipes);
  }

  window.filterRecipes = (category) => {
    const filteredRecipes = recipes.filter((recipe) => recipe.category === category);
    displayRecipes(filteredRecipes);
  };

  // Initially display all recipes
  displayRecipes(recipes);
});
