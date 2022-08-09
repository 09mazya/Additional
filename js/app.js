let apiUrlSom = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/kgs.json';
let SomContainer = document.getElementById('data');

async function conversionF() {
    let url = apiUrlSom;

    try {
        let result = await fetch(url);
        return await result.json();
    } catch (error) {
        console.log(error);
    }
}
async function renderKSGRate() {
    let rate = await conversionF();
    let summarez = document.getElementById('inputSom').value
    // console.log('input', summarez);
    let summa = rate.kgs * summarez;
    // console.log(summa);
    document.getElementById('data').innerHTML = `<div class="currency">
                            <h2>Todays exchange rate: 1$ = ${rate.kgs.toFixed(2)}</h2>
                        </div>`;
                        document.getElementById('resultSom').innerHTML = `<div>
                            <h2>Result: ${summa.toFixed(2)}</h2>
                        </div>`;

};
renderKSGRate();
