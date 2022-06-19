
// const greeting = document.getElementById("greetings");
// greeting.addEventListener("mouseover",Greeting);
// greeting.addEventListener("keyup",Greetings);

// function Greeting() {
//     console.log("hii,welcome, this is the mouseover event")
// }
// const SAVED = [];
// function Greetings() {
//     const val= greeting.value;
//     console.log(val);
//     const txt = document.createElement("p");
//     txt.textContent = val;
//     if (val){
//         SAVED.push(val)
//     }
//     document.body.append(SAVED); 
// }

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
// const texting = document.getElementById('texting');

// const EXAMPLE = ["juan  dice  que no puede."]
// texting.textContent = EXAMPLE[1]
function updateText(e){
    let parrafo = document.querySelector("#parrafo");
    parrafo.innerHTML = e;
  }