
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


async function renderSom() {
    let rate = await conversionF();

    document.getElementById('data').innerHTML = `<div class="currency">
                            <h2>Todays exchange rate: 1$ = ${rate.kgs.toFixed(2)}</h2>
                        </div>`;

};

renderSom();
function conversionInput() {
    let resultInput = document.getElementById('buttonSom');

}
//------------Conversion
const btn = document.getElementById("buttonSom");
let result = document.getElementById('result-container')

function conversionButton() {
    inputValue = document.getElementById("inputSom")
}



{/* <div class="input-container">
<div class="input">
  <input id="inputYear" type="text" />
  <button id="btn" onclick="calcDate()">Проверить год</button>
</div>
<div id="result" class="result-container"></div>
</div>
<div id="dateContainer"></div> */}





function calcDate() {

  inputValue = document.getElementById("inputYear").value;

  if ((inputValue < 2000 || inputValue > 2050) || isNaN(inputValue)) {
    document.getElementById("result").style.color = 'red';
    document.getElementById("result").innerHTML = `Input "${inputValue}" in not in allowed range!`;
    return;
  }
  else if ( inputValue > year) {
    let difference = inputValue - year;
    let orAitCalc = new Date(year + difference, month, day - (10 * difference));
    let kurAitCalc = new Date(year + difference, month, day - (10 * difference)  + 70);
    document.getElementById("result").innerHTML = `<h3>Дата Орозо Айта в ${inputValue} году: ${orAitCalc.toLocaleDateString('ru-RU', options)}</h3>
    <h3>Дата  Курман Айта в ${inputValue} году: ${kurAitCalc.toLocaleDateString('ru-RU', options)}</h3>`;
  }else if ( inputValue < year) {
    let difference = year - inputValue;
    let orAitCalc = new Date(year - difference, month, day + (10 * difference));
    let kurAitCalc = new Date(year - difference, month, day + (10 * difference) + 70);
    document.getElementById("result").innerHTML = `<h3>Дата Орозо Айта в ${inputValue} году: ${orAitCalc.toLocaleDateString('ru-RU', options)}</h3>
    <h3>Дата  Курман Айта в ${inputValue} году: ${kurAitCalc.toLocaleDateString('ru-RU', options)}</h3>`;
  }else {
    let orCalc = new Date(year, month, day + 70)
    document.getElementById("result").innerHTML = `<h3>Дата Орозо Айта в ${inputValue} году: ${orInitPt.toLocaleDateString('ru-RU', options)}</h3>
    <h3>Дата  Курман Айта в ${inputValue} году: ${orCalc.toLocaleDateString('ru-RU', options)}</h3>`;
  }
}

btn.addEventListener("click", function handleClick(event) {
  event.preventDefault();
  const input = document.getElementById("inputYear");
  input.value = "";
});



