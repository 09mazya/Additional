const btnOrozo = document.getElementById("btn");
let result = document.getElementById('dataOrozo')
const options = { year: 'numeric', month: 'long', day: 'numeric' };

function calcDate() {
  const orInitPt = new Date('2021-05-12T00:00:00');
  let year = orInitPt.getFullYear();
  let month = orInitPt.getMonth();
  let day = orInitPt.getDate();
  let inputValue = document.getElementById("inputYear").value;

  if ((inputValue < 2000 || inputValue > 2050) || isNaN(inputValue)) {
    document.getElementById("dataOrozo").style.color = 'red';
    document.getElementById("dataOrozo").innerHTML = `Input "${inputValue}" in not in allowed range!`;
    return;
  }
  else if ( inputValue > year) {
    let difference = inputValue - year;
    let orAitCalc = new Date(year + difference, month, day - (10 * difference));
    let kurAitCalc = new Date(year + difference, month, day - (10 * difference)  + 70);
    document.getElementById("dataOrozo").innerHTML = `<h3>Дата Орозо Айта в ${inputValue} году: ${orAitCalc.toLocaleDateString('ru-RU', options)}</h3>
    <h3>Дата  Курман Айта в ${inputValue} году: ${kurAitCalc.toLocaleDateString('ru-RU', options)}</h3>`;
  }else if ( inputValue < year) {
    let difference = year - inputValue;
    let orAitCalc = new Date(year - difference, month, day + (10 * difference));
    let kurAitCalc = new Date(year - difference, month, day + (10 * difference) + 70);
    document.getElementById("dataOrozo").innerHTML = `<h3>Дата Орозо Айта в ${inputValue} году: ${orAitCalc.toLocaleDateString('ru-RU', options)}</h3>
    <h3>Дата  Курман Айта в ${inputValue} году: ${kurAitCalc.toLocaleDateString('ru-RU', options)}</h3>`;
  }else {
    let orCalc = new Date(year, month, day + 70)
    document.getElementById("dataOrozo").innerHTML = `<h3>Дата Орозо Айта в ${inputValue} году: ${orInitPt.toLocaleDateString('ru-RU', options)}</h3>
    <h3>Дата  Курман Айта в ${inputValue} году: ${orCalc.toLocaleDateString('ru-RU', options)}</h3>`;
  }
}

btn.addEventListener("click", function handleClick(event) {
  event.preventDefault();
  const input = document.getElementById("inputYear");
  input.value = "";
});

export {calcDate};
export let inputValue = document.getElementById("inputYear").value;









