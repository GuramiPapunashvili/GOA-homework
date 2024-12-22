const searchButton = document.getElementById('searchButton');
const resultsDiv = document.getElementById('results');
const ingredientInput = document.getElementById('ingredient');

import axios from 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js';

const API_ID = 'your_api_id';
const API_KEY = 'your_api_key';

searchButton.addEventListener('click', () => {
  const ingredient = ingredientInput.value.trim();
  if (!ingredient) {
    resultsDiv.innerHTML = '<p>Please enter an ingredient.</p>';
    return;
  }

  fetchRecipes(ingredient);
});

async function fetchRecipes(ingredient) {
  try {
    const response = await axios.get('https://api.edamam.com/search', {
      params: {
        q: ingredient,
        app_id: API_ID,
        app_key: API_KEY,
      },
    });

    displayRecipes(response.data.hits);
  } catch (error) {
    console.error(error);
    resultsDiv.innerHTML = '<p>Failed to fetch recipes. Please try again later.</p>';
  }
}

function displayRecipes(recipes) {
  if (recipes.length === 0) {
    resultsDiv.innerHTML = '<p>No recipes found. Try another ingredient.</p>';
    return;
  }

  resultsDiv.innerHTML = recipes
    .map((recipeData) => {
      const recipe = recipeData.recipe;
      return `
        <div class="recipe">
          <h2>${recipe.label}</h2>
          <img src="${recipe.image}" alt="${recipe.label}" />
          <p><strong>Ingredients:</strong></p>
          <ul>
            ${recipe.ingredientLines.map((ing) => `<li>${ing}</li>`).join('')}
          </ul>
          <a href="${recipe.url}" target="_blank">View Full Recipe</a>
        </div>
      `;
    })
    .join('');
}
