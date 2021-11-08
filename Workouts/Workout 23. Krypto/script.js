const baseUrl = "https://api.coinranking.com/v2/coins";
const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const apiKey = "coinranking3f8783fc03be92dd62e219ff6ffcd1567103168c8b2d30ad";

fetch(`${proxyUrl}${baseUrl}`,{
    method: "GET",
    headers:{
        'Content-Type': 'application/json',
        // 'x-acces-token': `${apiKey}`,
        'Access-Control-Allow-Origin': '*'
    }
}).then((response) =>{
    if(response.ok){
        response.json().then((json) =>{
            console.log(json.data.coins);
            let coinsData = json.data.coins;
            let cryptoCoin;

            if (coinsData.length > 0) {
                cryptoCoin = "";                
            }

            coinsData.forEach(coin => {    
                cryptoCoin += "<tr>";
                cryptoCoin += `<td> <img src='${coin.iconUrl}'> </td>`;
                cryptoCoin += `<td> ${coin.btcPrice} </td>`;
                cryptoCoin += `<td> ${coin.rank}</td>`;
                cryptoCoin += `<td> ${coin.tier} </td>`;
                cryptoCoin += `<td> ${coin.name}</td>`;
                cryptoCoin += `<td> $${Math.round(coin.price)} Billion</td>`;
                cryptoCoin += `<td> ${coin.symbol}</td>`;"<tr>";
            })
            document.querySelector('tbody').innerHTML = cryptoCoin
        })
    }
}).catch((error) =>{
    console.log(error);
})


// ['Hola', 'Como', 'Estas'] => [['H', 'o', 'l', 'a'], ['C', 'o', 'm', 'o'], ['E', 's', 't', 'a', 's']]

// function toCamelCase(str){
//     return str.length > 0 ? str.split(/[/\-_/]/).map(e => {
//       return e.split('').map(e=> {
//         return e[0].charCodeAt() > 96 ? e: e[0].toUpperCase()
//       }).join('')
//     }).join(''): str;
// }

// console.log(toCamelCase("The-Stealth-Warrior"));