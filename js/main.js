
const containerList = document.getElementById("list-container-right");

// fetch live msrwket data from Frankfurter API and append it to the DOM
fetch("https://api.frankfurter.dev/v2/rates?base=USD")
  .then(res=>res.json())
  .then(data=>{
    //console.log(data);
    // loop through thr array safely
    for(let i=0; i<data.length; i++){
        // create a list item for each market data and append it to the DOM
        let listItem = document.createElement("li");
        listItem.textContent = `${data[i].base}/${data[i].quote}${data[i].rate}`;

        containerList.appendChild(listItem);
    }
  })
  .catch(err=>{
    console.error("error: ",err)
  })


























