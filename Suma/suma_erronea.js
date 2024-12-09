function calcularSuma() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const suma = parseFloat(num1) + parseFloat(num2); 
    document.getElementById('resultado').innerText = `La suma es: ${suma}`;
}
