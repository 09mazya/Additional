let API_URL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/kgs.json';
let currContainer = document.getElementById('data');

async function getKGSRate() {
    let url = API_URL;
    try {
        let result = await fetch(url);
        return await result.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderKSGRate() {
    let rate = await getKGSRate();
    document.getElementById('data').innerHTML = `<div class="currency">
                            <h2>Todays exchange rate: 1$ = ${rate.kgs.toFixed(2)}</h2>
                        </div>`;

};



