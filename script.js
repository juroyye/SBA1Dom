
document.body.style.backgroundImage = "url('https://wallpaperaccess.com/full/159160.png')"
document.body.style.backgroundSize= "cover"
// using getElementById
// also used styling here
document.getElementById("main-chart").style.color = "red";

//using QuerySelector
// used nextElementSibling
document.querySelector("tr").nextElementSibling.style.backgroundColor = "gold"

//used createElement method
let newStudent = document.createElement('p');

// used innerHTML method
newStudent.innerHTML = "These are the best students in the class!"

// append p taq to the table
document.getElementById("main-chart").appendChild(newStudent)

document.getElementById("justin").firstElementChild.addEventListener("mouseover", onmouseenter = () => {
    window.alert("Careful! He's a JavaScript legend!")
})

// use of prompt 
document.getElementById("Jeff").firstElementChild.addEventListener("click", onclick = () => {
    window.prompt("Where does Jeff get his burgers from?") 
    document.getElementById("Jeff").style.color = "green"
})



document.getElementById("main").style.height = "100vh";



