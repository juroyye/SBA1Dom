
document.body.style.backgroundImage = "url('https://wallpaperaccess.com/full/159160.png')"
document.body.style.backgroundSize= "cover"
// using getElementById
// also used styling here
document.getElementById("main-chart").style.color = "green";

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
    document.getElementById("justin").firstElementChild.removeEventListener("mouseover", onmouseenter)
})


document.getElementById("main").style.height = "100vh";
document.getElementById("main").style.display ="flex"
document.getElementById("main").style.alignItems = "center"
document.getElementById("main").style.justifyContent = "space-around"


document.getElementById("prompt").style.padding = "30px"

const lines = document.querySelectorAll("#main-chart tr")

lines.forEach((line) => {

    line.addEventListener("mouseover", () => {
        line.style.backgroundColor = "orange"
    })

    line.addEventListener("mouseleave", () => {
        line.style.backgroundColor = "";
    })
})
