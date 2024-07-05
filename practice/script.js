// let button = document.createElement("button");
// button.innerText = "Click me!";
// button.style.backgroundColor = "pink";

// let body = document.querySelector("body");
// body.append(button);


// let p = document.createElement("p");
// p.innerText = "hello all of you";
// body.append(p);

// p.setAttribute("class", "newbee");

 let body = document.querySelector("body");

let currMode = "light";

let ym = document.querySelector("#ym");
ym.addEventListener("click", ()=>{
    if(currMode === "light"){
        currMode = "yellow";
        body.style.backgroundColor = "yellow";
    }
    else if (currMode == "yellow") {
        currMode = "black";
        body.style.backgroundColor = "black";
    }
    else if (currMode == "black") {
        currMode = "light";
        body.style.backgroundColor = "white";
    }


})

let image = document.querySelector("#jai");
let div = document.querySelector(".he");

let colour = "white";
image.addEventListener("mouseover", ()=>{
    
if(colour == "white"){
    colour = "grey";
    
    body.style.backgroundColor = "orange";
}
else if(colour == "grey"){
    colour = "white";
   
    body.style.backgroundColor = "white";
}
})

div.addEventListener("mouseover", ()=>{
    if(colour == "white"){
        colour = "grey";
        
            
          div.classList.add("new");
          div.classList.remove("he");
        }
        else if(colour == "grey"){
            colour = "white";
            div.classList.add("he");
          div.classList.remove("new");
            
        }
        
    }
    
)

