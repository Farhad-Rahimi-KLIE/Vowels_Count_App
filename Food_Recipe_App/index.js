let button = document.getElementById('search-btn');
let MealList = document.getElementById('meal');
let Close = document.getElementById('close-btn');
let mealDetailsContent = document.querySelector('.meal-details-content');
button.addEventListener('click',getMealList);
MealList.addEventListener('click',Recipeshow);
Close.addEventListener('click',()=>{
    // mealDetailsContent.parentElement.classList.remove('showRecipe');
})

function getMealList() {
    let inputsearch = document.getElementById('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputsearch}`).then((response)=>{
        return response.json();
    }).then((data)=>{
        let html = "";
        data.meals.forEach((meal)=>{
            html+= `
             <div class="meal-item" data-id="${meal.idMeal}">
                    <div class="meal-img">
                        <img src="${meal.strMealThumb}" >
                    </div>
                    <div class="meal-name">
                        <h3>${meal.strMeal}</h3>
                        <a href="#" class="recipe-btn">Get Recipe</a>
                    </div>
                </div>
            `
        })
        MealList.innerHTML = html;
    }).catch(()=>{
        MealList.innerHTML = "<h1 class='fff'>Not Found...</h1>"
    })
};
function Recipeshow(e) {
    e.preventDefault();
if (e.target.classList.contains('recipe-btn')){
    let mealItem = e.target.parentElement.parentElement;
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
        .then(response=> response.json())
        .then(data=> mealrecipeshow(data.meals));
}
}
function mealrecipeshow(meal) {
    console.log(meal);
    meal = meal[0];
    let html = `
     <h2 class="recipe-title">${meal.strMeal}</h2>
                <p class="recipe-category"> ${meal.strCategory} </p>
                <div class="recipe-instract">
                    <h3>Instractions:</h3>
                    <p>
                        ${meal.strInstructions}
                    </p>        
                </div>
                <div class="recipe-meal-img">
                    <img src="${meal.strMealThumb}" alt="image">
                </div>
                <div class="recipe-link">
                    <a href="${meal.strYoutube}" target="_blank">watch video</a>
                </div>
    `;
    mealDetailsContent.innerHTML = html;
    mealDetailsContent.parentElement.classList.add('showRecipe');
}