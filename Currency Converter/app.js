const fromAmount = document.querySelector('#fromAmount')
const fromCurrency = document.querySelector('#fromCurrency');
const toAmount = document.querySelector('#toAmount');
const toCurrency = document.querySelector('#toCurrency');
const convertBtn = document.querySelector('#convertBtn');
const swapBtn = document.querySelector('#swap');

const from = 'usd';
const to = 'inr';

const apiUrl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`;

async function fetchData() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const currencies = Array.from(Object.keys(data[from]));
    return currencies;
}

async function init() {
    const currencies = await fetchData();
    
    fromCurrency.innerHTML = `<option selected>${from.toUpperCase()}</option> ${currencies.map(curr => `<option>${curr.toUpperCase()}</option>`)}`;
    
    toCurrency.innerHTML = `<option selected>${to.toUpperCase()}</option> ${currencies.map(curr => `<option>${curr.toUpperCase()}</option>`)}`;
}

convertBtn.addEventListener('click', () => {
    const from = fromCurrency.value.toLowerCase();
    const to = toCurrency.value.toLowerCase();
    
    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`;

    currencyConverter();
    
    function currencyConverter() {
        if(!fromAmount.value) {
            alert('Enter amount to convert!');
        } else {
            fetch(url)
            .then(res => res.json())
            .then(data => {
                const result = parseFloat(fromAmount.value * data[from][to]);
                toAmount.value = result.toFixed(2);
            });
        }

    }
});

swapBtn.addEventListener('click', () => {
    let temp = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = temp;
    toAmount.value = "0";
    fromAmount.value = "";
});

init();