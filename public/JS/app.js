function randomPage(){
    let pageInt = Math.floor(Math.random()*100)
    
    location.replace(`http://localhost:3000/api/food/${pageInt}`)
}