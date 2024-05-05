let z = 0;
function openlog(){
    document.getElementById("log").style.display = "block";
    z++;
    document.getElementById("log").style.zIndex=z.toString();
    closesign(); closereset();}

function closelog(){
    document.getElementById("log").style.display = "none";}
    
function opensign(){
    document.getElementById("sign").style.display = "block";
    z++;
    document.getElementById("sign").style.zIndex=z.toString(); 
    closelog(); closereset();}

function closesign(){
    document.getElementById("sign").style.display = "none";}

function openreset(){
    document.getElementById("reset").style.display = "block";
    z++;
    document.getElementById("reset").style.zIndex=z.toString();
    closelog(); closesign();}

function closereset(){
    document.getElementById("reset").style.display = "none";}

function enroll(){
    document.getElementById("enroll").style.display = "block";
}
function closeEnroll(){
    document.getElementById("enroll").style.display = "none";
}

function open(){
    document.getElementById('1').style.display = "block";
}

function getRand(){
    event.preventDefault(); 
    let url = "https://www.themealdb.com/api/json/v1/1/random.php";
    fetch(url).then((result) => result.json())
    .then((data) => {
        let recipes = data.meals;
    
    let item = recipes[0];
    const newDiv =document.getElementById("rand");


    const Name = document.createElement("h4");
    Name.innerHTML = item.strMeal; 


    const photo = document.createElement("img");
    photo.src = item.strMealThumb; 
    photo.classList.add("flipImage");

    const video = document.createElement("a");
    video.innerHTML = "<strong>Watch in Youtube</strong> <br> <br>";
    video.href =  item.strYoutube ;
    video.setAttribute("target", "_blank");

    newDiv.appendChild(Name);
    newDiv.appendChild(photo);
    newDiv.appendChild(video);



});
}

