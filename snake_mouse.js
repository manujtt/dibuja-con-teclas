var cuadro = document.getElementById("area_de_dibujo");
var papel = cuadro.getContext("2d");
cuadro.addEventListener("mousedown", lineaInicial);
cuadro.addEventListener("mouseup", finlinea);
cuadro.addEventListener("mousemove", lineamovimiento);
let mouse = false;
var colorPincel = "red"

function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = colorPincel;
  lienzo.lineWidth = 1;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function lineaInicial()

{
 mouse = true;
}
function finlinea()
{
  mouse = false;
}
function lineamovimiento(event)
{
  if(mouse == true)
  {
    dibujarlinea("colorPincel", event.layerX - 1, event.layerY -1, event.layerX + 1, event.layerY + 1, papel);
  }
}
