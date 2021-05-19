function randomPage(){
    let pageInt = Math.floor(Math.random()*100) + 1; // 1-100
    
    location.replace(`http://localhost:3000/api/food/${pageInt}`)
}

function likeFood(){
    
    i = location.href.lastIndexOf('/') + 1;
    pageInt = location.href.substr(i)

    location.replace(`http://localhost:3000/api/food/${pageInt}/likes`)

}

function restaurantPage(){
    var foodName = document.getElementById('send_name').textContent;
    console.log(foodName)
    location.replace(`http://localhost:3000/restaurant/${foodName}`)
}