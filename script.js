function toggleMenu(){

document.getElementById("menu").classList.toggle("active")

}


function searchTopic(){

let input = document.getElementById("searchBox").value
.trim()
.toLowerCase()

if(input.includes("introduction") || input.includes("intro")){

window.location.href="introduction.html"

}

else if(input.includes("concept")){

window.location.href="concepts.html"

}

else if(input.includes("technique")){

window.location.href="techniques.html"

}

else if(input.includes("example")){

window.location.href="examples.html"

}

else{

alert("Topic not found. Try Introduction, Concepts, Techniques or Examples.")

}

}


/* Enter key search */

document.getElementById("searchBox").addEventListener("keypress",function(e){

if(e.key==="Enter"){

searchTopic()

}

})
