

function all(){
    event.preventDefault(); 
    let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
    fetch(url).then((result) => result.json())
    .then((data) => {
        let recipes = data.meals;
   
    const resultsDiv = document.getElementById("allrecipes");
    resultsDiv.innerHTML = "";
    
    for(let i = 0;i < recipes.length ;i++){
        let item = recipes[i];
    const newDiv = document.createElement('div');

    newDiv.classList.add("box")
    newDiv.id=item.idMeal;

    const Name = document.createElement("h2");
    Name.innerHTML = item.strMeal; 

    const Category = document.createElement("h4");
    Category.innerHTML = "Category: "+ item.strCategory; 

    const video = document.createElement("a");
    video.innerHTML = "<strong>Watch in Youtube</strong> <br> <br>";
    video.href =  item.strYoutube ;
    video.setAttribute("target", "_blank");

    const photo = document.createElement("img");
    photo.src = item.strMealThumb; 

    const disc = document.createElement("p");
    disc.innerHTML = "<strong>Instructions:</strong> " + item.strInstructions;

    let ing = document.createElement("h4");
    ing.innerHTML = "<strong>Ingredient: </strong>";
    let ings = document.createElement("ul");

    if(item.strIngredient1!=""){
    const ing1 = document.createElement("li");
    ing1.innerHTML = item.strIngredient1+ " : "+  item.strMeasure1;
    ings.appendChild(ing1);}
    if(item.strIngredient2!=""){
        const ing2 = document.createElement("li");
        ing2.innerHTML = item.strIngredient2+ " : "+  item.strMeasure2;
        ings.appendChild(ing2);}
    if(item.strIngredient3!=""){
    const ing3 = document.createElement("li");
    ing3.innerHTML = item.strIngredient3+ " : "+  item.strMeasure3;
    ings.appendChild(ing3);}
    if(item.strIngredient1!=""){
        const ing4 = document.createElement("li");
        ing4.innerHTML = item.strIngredient4+ " : "+  item.strMeasure4;
        ings.appendChild(ing4);}
    if(item.strIngredient5!=""){
    const ing5 = document.createElement("li");
    ing5.innerHTML = item.strIngredient5+ " : "+  item.strMeasure5;
    ings.appendChild(ing5);}
    if(item.strIngredient6!=""){
        const ing6 = document.createElement("li");
        ing6.innerHTML = item.strIngredient6+ " : "+  item.strMeasure6;
        ings.appendChild(ing6);}
    if(item.strIngredient7!=""){
    const ing7 = document.createElement("li");
    ing7.innerHTML = item.strIngredient7+ " : "+  item.strMeasure7;
    ings.appendChild(ing7);}
    if(item.strIngredient8!=""){
        const ing8 = document.createElement("li");
        ing8.innerHTML = item.strIngredient8+ " : "+  item.strMeasure8;
        ings.appendChild(ing8);}
    if(item.strIngredient9!=""){
    const ing9 = document.createElement("li");
    ing9.innerHTML = item.strIngredient9+ " : "+  item.strMeasure9;
    ings.appendChild(ing9);}
    if(item.strIngredient10!=""){
        const ing10 = document.createElement("li");
        ing10.innerHTML = item.strIngredient10+ " : "+  item.strMeasure10;
        ings.appendChild(ing10);}
    if(item.strIngredient11!=""){
    const ing11 = document.createElement("li");
    ing11.innerHTML = item.strIngredient11+ " : "+  item.strMeasure11;
    ings.appendChild(ing11);}
    if(item.strIngredient12!=""){
        const ing12 = document.createElement("li");
        ing12.innerHTML = item.strIngredient12+ " : "+  item.strMeasure12;
        ings.appendChild(ing12);}
    if(item.strIngredient13!=""){
    const ing13 = document.createElement("li");
    ing13.innerHTML = item.strIngredient13+ " : "+  item.strMeasure13;
    ings.appendChild(ing13);}
    if(item.strIngredient14!=""){
        const ing14 = document.createElement("li");
        ing14.innerHTML = item.strIngredient14+ " : "+  item.strMeasure14;
        ings.appendChild(ing14);}
    if(item.strIngredient15!=""){
        const ing15 = document.createElement("li");
        ing15.innerHTML = item.strIngredient15+ " : "+  item.strMeasure15;
        ings.appendChild(ing15);}
    if(item.strIngredient16!=""){
    const ing16 = document.createElement("li");
    ing16.innerHTML = item.strIngredient16+ " : "+  item.strMeasure16;
    ings.appendChild(ing16);}


    newDiv.appendChild(Name);
    newDiv.appendChild(Category);
    newDiv.appendChild(photo);
    newDiv.appendChild(ing);
    newDiv.appendChild(ings);
    newDiv.appendChild(disc);
    newDiv.appendChild(video);

    resultsDiv.appendChild(newDiv);


}


});

}

function search() {
    event.preventDefault(); 
    let text = document.getElementById("searchWord").value.toLowerCase();
     
    let url = "https://www.themealdb.com/api/json/v1/1/search.php?s="+ text;
    fetch(url).then((result) => result.json())
    .then((data) => {
        const resultsDiv = document.getElementById("allrecipes");
        resultsDiv.innerHTML = "";
        let recipes = data.meals;
        if (!recipes) {
            resultsDiv.innerHTML = '<p id="notFound">No recipes found for this search.</p>';
            return; 
        }
        
    
    for(let i = 0;i < recipes.length ;i++){
        let item = recipes[i];
    const newDiv = document.createElement('div');

    newDiv.classList.add("box")
    newDiv.id=item.idMeal;

    const Name = document.createElement("h2");
    Name.innerHTML = item.strMeal; 

    const Category = document.createElement("h4");
    Category.innerHTML = "Category: "+ item.strCategory; 

    const video = document.createElement("a");
    video.innerHTML = "<strong>Watch in Youtube</strong> <br> <br>";
    video.href =  item.strYoutube ;
    video.setAttribute("target", "_blank");

    const photo = document.createElement("img");
    photo.src = item.strMealThumb; 

    const disc = document.createElement("p");
    disc.innerHTML = "<strong>Instructions:</strong> " + item.strInstructions;

    let ing = document.createElement("h4");
    ing.innerHTML = "<strong>Ingredient: </strong>";
    let ings = document.createElement("ul");

    if(item.strIngredient1!=""){
    const ing1 = document.createElement("li");
    ing1.innerHTML = item.strIngredient1+ " : "+  item.strMeasure1;
    ings.appendChild(ing1);}
    if(item.strIngredient2!=""){
        const ing2 = document.createElement("li");
        ing2.innerHTML = item.strIngredient2+ " : "+  item.strMeasure2;
        ings.appendChild(ing2);}
    if(item.strIngredient3!=""){
    const ing3 = document.createElement("li");
    ing3.innerHTML = item.strIngredient3+ " : "+  item.strMeasure3;
    ings.appendChild(ing3);}
    if(item.strIngredient1!=""){
        const ing4 = document.createElement("li");
        ing4.innerHTML = item.strIngredient4+ " : "+  item.strMeasure4;
        ings.appendChild(ing4);}
    if(item.strIngredient5!=""){
    const ing5 = document.createElement("li");
    ing5.innerHTML = item.strIngredient5+ " : "+  item.strMeasure5;
    ings.appendChild(ing5);}
    if(item.strIngredient6!=""){
        const ing6 = document.createElement("li");
        ing6.innerHTML = item.strIngredient6+ " : "+  item.strMeasure6;
        ings.appendChild(ing6);}
    if(item.strIngredient7!=""){
    const ing7 = document.createElement("li");
    ing7.innerHTML = item.strIngredient7+ " : "+  item.strMeasure7;
    ings.appendChild(ing7);}
    if(item.strIngredient8!=""){
        const ing8 = document.createElement("li");
        ing8.innerHTML = item.strIngredient8+ " : "+  item.strMeasure8;
        ings.appendChild(ing8);}
    if(item.strIngredient9!=""){
    const ing9 = document.createElement("li");
    ing9.innerHTML = item.strIngredient9+ " : "+  item.strMeasure9;
    ings.appendChild(ing9);}
    if(item.strIngredient10!=""){
        const ing10 = document.createElement("li");
        ing10.innerHTML = item.strIngredient10+ " : "+  item.strMeasure10;
        ings.appendChild(ing10);}
    if(item.strIngredient11!=""){
    const ing11 = document.createElement("li");
    ing11.innerHTML = item.strIngredient11+ " : "+  item.strMeasure11;
    ings.appendChild(ing11);}
    if(item.strIngredient12!=""){
        const ing12 = document.createElement("li");
        ing12.innerHTML = item.strIngredient12+ " : "+  item.strMeasure12;
        ings.appendChild(ing12);}
    if(item.strIngredient13!=""){
    const ing13 = document.createElement("li");
    ing13.innerHTML = item.strIngredient13+ " : "+  item.strMeasure13;
    ings.appendChild(ing13);}
    if(item.strIngredient14!=""){
        const ing14 = document.createElement("li");
        ing14.innerHTML = item.strIngredient14+ " : "+  item.strMeasure14;
        ings.appendChild(ing14);}
    if(item.strIngredient15!=""){
        const ing15 = document.createElement("li");
        ing15.innerHTML = item.strIngredient15+ " : "+  item.strMeasure15;
        ings.appendChild(ing15);}
    if(item.strIngredient16!=""){
    const ing16 = document.createElement("li");
    ing16.innerHTML = item.strIngredient16+ " : "+  item.strMeasure16;
    ings.appendChild(ing16);}


    newDiv.appendChild(Name);
    newDiv.appendChild(Category);
    newDiv.appendChild(photo);
    newDiv.appendChild(ing);
    newDiv.appendChild(ings);
    newDiv.appendChild(disc);
    newDiv.appendChild(video);

    resultsDiv.appendChild(newDiv);


}


});
  }


  