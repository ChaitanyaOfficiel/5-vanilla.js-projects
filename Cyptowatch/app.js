// get id using 
const cyptoWatch = document.getElementsByClassName("Cshow");
console.log(cyptoWatch);


function cyptoLook(){
    let details;
    const url = 'https://api.coinlore.net/api/tickers/';
fetch(url)
.then(res => res.json())
.then((data)=> {
   details = data.data;
//    console.log(details);
    const cyptoHTMLString = details.map(show => 
       
        `<li class="card">
                <h3 class="c_head">${show.name}</h3>
                <h3>${show.symbol}</h3>
                <h3>${show.price_btc}</h3>
                <h3>${show.price_usd}</h3>
                <li>`
                
    )
    .join('');
    Cshow.innerHTML = cyptoHTMLString;
})

}

cyptoLook();