let contador = 0;
function incrementar() 
{
    contador++;
    document.getElementById("contador").innerText = contador;
}
function reiniciar()
{
    contador = 0;
    document.getElementById("contador").innerText = contador;
}