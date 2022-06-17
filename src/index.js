
const greeting = document.getElementById("greetings");
greeting.addEventListener("mouseover",Greeting);
greeting.addEventListener("keyup",Greetings);

function Greeting() {
    console.log("hii,welcome, this is the mouseover event")
}
const SAVED = [];
function Greetings() {
    const val= greeting.value;
    console.log(val);
    const txt = document.createElement("p");
    txt.textContent = val;
    if (val){
        SAVED.push(val)
    }
    document.body.append(SAVED); 
}

// const names = ["field", "campus", "az", "build"];


// for (x = 0; x < names.length;  x++) {
//     const node = document.createElement("p");
//     console.log(names[x]);
//     node.textContent = names[x];
//     document.body.append(node)

//     // const cadena = names.join(" * ");
//     // const p = document.createElement("p");
//     // p.textContent = cadena;
//     // document.body.append(p)
// }

const genereText = [
    "the asp net is a framework to develop with c# most known in microsoft world, but lastest many people is turning into it",
    "the basic concepts of js you can find them on my own site",
    "Asynchronous development is a new technique to make differentes things in the same time",
]

// function text() {

//     const campus = document.getElementById("insert_p");
//     for( i in genereText){
//         console.log(genereText[i])
//         const p = document.createElement("p");
//         p.genereText[i];
//         campus.append(p)
//         console.log(campus)
        
//     }
// }

// text();

//tomar el curso de manipulacion de arrays

function updateText(e){
    let parrafo = document.querySelector("#parrafo");
    parrafo.innerHTML = e;
  }