// API
const API_ENDPOINT = 'https://yesno.wtf/api';

//********************************
//*** Obteniendo datos con fetch

var boton = document.getElementById('button');
var contenedor = document.getElementById('input');
var answer= document.getElementById("answer");
var posts = null;

boton.addEventListener('click', function () {

    fetch('https://yesno.wtf/api')
    .then(data => data.json())
    .then(data => {
        posts = data;
        console.log("Funciona")
       answer.innerHTML = data.answer;
       
    })

});



function handleKeyEnter(event) {
    if (event.key === 'Enter') {
      // Get the input's value
      const input = document.querySelector('#input');
      const value = input.value;
      
      // Do something with the value
      console.log(value);
    }
  }

  
  var myTimeout = setTimeout(window.clearall, 3000);







/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */
