function searchTopic(){

let input=document.getElementById("searchBox").value.toLowerCase()

if(input.includes("introduction") || input.includes("intro")){

window.location.href="introduction.html"

}

else if(input.includes("concept")){

window.location.href="concepts.html"

}

else if(input.includes("technique") || input.includes("prompt technique")){

window.location.href="techniques.html"

}

else if(input.includes("example") || input.includes("prompt example")){

window.location.href="examples.html"

}

else{

alert("Topic not found. Try Introduction, Concepts, Techniques or Examples.")

}

}