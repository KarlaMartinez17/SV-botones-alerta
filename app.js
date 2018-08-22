// Crea una interfaz web que tenga 4 botones llamados: Primero, Segundo, Tercero y Cuarto.
// Crea una variable con el siguiente arreglo: [‘“Brasil”, “Chile“, “México“, “Perú”’].
// Cuando se hace clic en cada botón, debe alertar el país correspondiente a la posición correspondiente en el arreglo. Por ejemplo, hacer clic en "Segundo" debería alertar a "Chile".
// Hacker edition:
// Adjunte un solo `click handler` al padre de los botones.
// Solo muestra la alerta la primera vez que se haga clic en un botón. Es decir, hacer clic una segunda vez al botón no mostrará la alerta de nuevo.
// Refactoriza el código para que no haya variables globales.

var access = document.getElementsByClassName("countryButton");
console.log(access);

var countries = ["Brasil","Chile", "México", "Peru"];
var showCountry = function (event) {
    //Reconocer que boton clickee
    var btn = event.target
    console.log(btn.dataset);
    alert(btn.dataset.country);
    //Recuperar data-country
    //Mostrar el data-country

}
for (var i = 0; i < access.length; i++){
    console.log(countries);
    access[i].addEventListener("click", showCountry);
    access[i].setAttribute("data-country", countries[i]);
    console.log(access[i]);
    
}
   
