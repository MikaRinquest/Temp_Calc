function convertF() {
  celsius = parseFloat(document.getElementById("celsius").value);
  converterF = (celsius * 9) / 5 + 32;
  document.getElementById("ResultF").innerHTML = converterF.toFixed(2);
}

function convertC() {
  fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
  converterC = ((fahrenheit - 32) * 5) / 9;
  document.getElementById("ResultC").innerHTML = converterC.toFixed(2);
}
