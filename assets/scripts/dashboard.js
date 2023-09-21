const addRecipe = document.getElementById('addRecipe');

addRecipe.onclick=()=>{
    location.replace('http://127.0.0.1:5500/pages/addRecipe.html');
}



// const xhr = new XMLHttpRequest();

// xhr.open("GET" , "http://127.0.0.1:8080/recipes-category/all");
// xhr.withCredentials = true ;
// xhr.setRequestHeader("Content-Type" , "application/json");
// xhr.send();
// xhr.onload = ()=>{
//     console.log(xhr.response);
// }