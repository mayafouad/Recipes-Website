function allCat(){
    event.preventDefault(); 
    let url = "https://www.themealdb.com/api/json/v1/1/categories.php";
    fetch(url).then((result) => result.json())
    .then((data) => {
        let recipes = data.categories;
   
    const resultsDiv = document.getElementById("catigores");
    resultsDiv.innerHTML = "";
    
    for(let i = 0;i < recipes.length ;i++){
        let item = recipes[i];
    const newDiv = document.createElement('div');

    newDiv.classList.add("box")
    newDiv.id=item.idCategory;

    const Name = document.createElement("h2");
    Name.innerHTML = item.strCategory; 


    const photo = document.createElement("img");
    photo.src = item.strCategoryThumb; 
    

    const disc = document.createElement("p");
    disc.innerHTML = "<strong>Description:</strong> " + item.strCategoryDescription;

    newDiv.appendChild(Name);
    newDiv.appendChild(photo);
    newDiv.appendChild(disc);
    resultsDiv.appendChild(newDiv);


}


});

}
