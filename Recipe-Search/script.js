document.querySelector("button").addEventListener("click", async () => {
  const recipeQuery = document.querySelector("input").value.trim();
  const items = document.querySelector(".items");

  if (!recipeQuery) {
    items.innerHTML = "<p>Please enter a recipe name.</p>";
    return;
  }
  const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(
    recipeQuery
  )}`;

  try {
    items.innerHTML = "<p >Loading...</p>";
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("Network response was not ok");

    const data = await response.json();
    items.innerHTML = "";

    if (!data.meals) {
      items.innerHTML = "<p >No recipe found. Try another receipe.</p>";
      return;
    }

    data.meals.forEach((meal) => {
      const recipe = meal.strMeal;
      const img = meal.strMealThumb;

      const mealitems = document.createElement("div");
      mealitems.classList.add("mealitemsclass");
      mealitems.innerHTML = `
        <img class="img" src="${img}" alt="${recipe}" />
        <h1 class="title">${recipe}</h1>
      `;
      items.appendChild(mealitems);
    });
  } catch (error) {
    console.error("Error fetching recipes:", error);
    items.innerHTML = "<p>Something went wrong. Please try again later.</p>";
  }
});
