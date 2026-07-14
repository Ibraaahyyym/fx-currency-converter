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
        //listItem.textContent = `${data[i].base}/${data[i].quote}${data[i].rate}`;
        listItem.style.display = "flex";
        listItem.style.gap = "10px"; // add gap of 10px between the elements
        
      
        listItem.innerHTML= `
        <div style="width: 54px; height: 14px; font-size: 12px; color:#9D9D9D; line-height: 120%; letter-spacing: 0.5px; font-family: JetBrains Mono; font-style: regular; font-weight: 400;">
          ${data[i].base}/${data[i].quote}
        </div>
        <div style="width: 46px; height: 16px; font-size: 12px; color:#FFFFFF; line-height: 130%; letter-spacing: 0.5px; font-family: JetBrains Mono; font-style: medium; font-weight: 500;">
          ${data[i].rate}
        </div>
        <div style="width: 62px; height: 14px; font-size: 12px; color: #42EB05; line-height: 120%; letter-spacing: 0.5px; font-family: JetBrains Mono; font-style: regular; font-weight: 400;">
          ▲+0.04%
        </div>
        `;

        containerList.appendChild(listItem);
    }
  })
  .catch(err=>{
    console.error("error: ",err)
  })


























