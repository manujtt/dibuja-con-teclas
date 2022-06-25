var teclas = {
 UP: 38,
 DOWN: 40,
 RIGHT: 39,
 LEFT: 37,
};

document.addEventListener("keydown", dibujarTeclado);
document.addEventListener("mousedown", dibujarTeclado);
var cuadro = document.getElementById("area_de_dibujo");
var papel = cuadro.getContext("2d");
var x = 150;
var y = 150;

dibujarlinea("black", 149, 149, 151, 151, papel);

function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)

{
 console.log(evento);
  var color = "black"
  var movimiento = 5;
  switch(evento.keyCode)
  {

    case teclas.UP:
    dibujarlinea(color, x, y, x, y - movimiento, papel);
    y = y - movimiento;
    break;
    case teclas.DOWN:
    dibujarlinea(color, x, y, x, y + movimiento, papel);
    y = y + movimiento;
    break;
    case teclas.RIGHT:
    dibujarlinea(color, x, y, x + movimiento, y, papel);
    x = x + movimiento;
    break;
    case teclas.LEFT:
    dibujarlinea(color, x, y, x - movimiento, y, papel);
    x = x - movimiento;;
    break;
  }
}
