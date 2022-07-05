const   URL = "https://api.giphy.com/v1/gifs/search?api_key=dqPc5JPGUGdb90DjS9DlmqDQ2yKDRoFh&q=casa&limit=25&offset=0&rating=pg&lang=en"
function updateText(e){
    var texting = e;
    let parrafo = document.querySelector("#parrafo");
    parrafo.innerHTML = texting;
  }

async function getGift() {
    const info = await fetch(URL );
    const gift = await info.json();
    const mappear = gift.data.map(g => {
        const div = document.getElementById("gift")
        div.innerHTML = g.title;
        console.log(g.images.downsized)
    })
    return mappear;
        // console.log(gift.data[0].title  )
    console.log()
    
}

getGift();

//https://developers.giphy.com/explorer/?