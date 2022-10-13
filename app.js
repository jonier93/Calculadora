import {sum} from './suma.js'
import {sub} from './resta.js'
import {multiplication} from "./multi.js"
import {division} from "./divi.js"

document.querySelector('#btnCalcular').addEventListener('click', operar)

function operar () {
    let num1 = parseFloat(document.getElementById('num1').value)
    let num2 = parseFloat( document.getElementById('num2').value)
    let operacion = document.getElementById('selectOper').value
    let result;

    if (operacion == "Suma") {
        result = sum(num1, num2)
    }
    else if (operacion == "Resta"){
        result = sub(num1, num2)
    }
    else if (operacion == "Multiplicación"){
        result = multiplication(num1, num2);       
    }
    else if (operacion == "División") {
        result = division(num1, num2)        
    }
    
    document.getElementById('resultado').value =  result
}