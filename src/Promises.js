function PROMISES() {
  const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
  );
  const mainDiv = document.createElement("div");
  const div = document.createElement("div");

  fetchPromise
    .then((res) => {
      return res.json();
    })
    .then((response) => {
      for (const res of response) {
        const title = document.createElement("h1");
        const price = document.createElement("p");
        title.textContent = res.name;
        console.log(res.name);
        price.textContent = res.price;
        console.log(res.price);
        div.append(title, price);
        mainDiv.append(div);
        console.log(res);
      }
    })
    .catch((err) => {
      const h1 = document.createElement("h1");
      h1.innerHTML = err.message;
      console.log(h1);
      document.body.append(`We're sorry  || 😢  ${err.message} 😢  || `);
    });

  document.body.append(mainDiv);
}
PROMISES();
