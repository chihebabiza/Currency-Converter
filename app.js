const api = 'fca_live_nHDloHalqLvEhlTYPvSLLckcZaWo2TEsWMGY8GSd'
let input = document.querySelector('.input');
const convertBtn = document.querySelector('.btn');
const result = document.querySelector('.result');
const from = document.querySelector('.from-box');
const to = document.querySelector('.to-box');

convertBtn.addEventListener("click", () => {
    let amount = input.value;
    fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=${api}&currencies=${option(from)}&base_currency=${option(to)}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            let ch = Number(Object.values(data.data));
            ch = ch * amount;
            ch = ch.toFixed(2);
            result.value =
                `${amount} ${option(from)} = ${ch} ${option(to)}`
        })
        .catch(() => {
            if (!navigator.onLine) {
                alert("You are offline")
            }
        })
})
function option(from) {
    const selectedOption = from.options[from.selectedIndex];
    return selectedOption.value
}