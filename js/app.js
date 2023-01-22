// display
var display = document.getElementById("display");

// setup de eventos
var teclas = document.querySelectorAll("[class=tecla]");

teclas.forEach((tecla) => {
  tecla.addEventListener("click", function () {
    tecla.style.transform = "scale(0.93)";
    tecla.style.boxShadow = "3px 2px 22px 1px rgba(0, 0, 0, 0.24)";
  });
  tecla.addEventListener("mouseout", function () {
    tecla.style.transform = "scale(1)";
    tecla.style.boxShadow = "7px 6px 28px 1px rgba(0, 0, 0, 0.24)";
  });
});

var tecla0 = document.getElementById("0");
var tecla1 = document.getElementById("1");
var tecla2 = document.getElementById("2");
var tecla3 = document.getElementById("3");
var tecla4 = document.getElementById("4");
var tecla5 = document.getElementById("5");
var tecla6 = document.getElementById("6");
var tecla7 = document.getElementById("7");
var tecla8 = document.getElementById("8");
var tecla9 = document.getElementById("9");

var teclaon = document.getElementById("on");
var teclasign = document.getElementById("sign");
var teclaraiz = document.getElementById("raiz");
var tecladivide = document.getElementById("dividido");
var teclamultiplica = document.getElementById("por");
var teclaresta = document.getElementById("menos");
var teclasuma = document.getElementById("mas");
var teclapunto = document.getElementById("punto");
var teclaigual = document.getElementById("igual");

var parametro1 = 0;
var parametro2 = 0;
var resultado = 0;
var operacion = "";

teclaigual.onclick = function () {
  parametro2 = display.innerText;
  switch (operacion) {
    case "+":
      resultado = parseFloat(parametro1) + parseFloat(parametro2);
      display.innerText = String(resultado).substring(0, 8);
      parametro1 = 0;
      break;
    case "-":
      resultado = parseFloat(parametro1) - parseFloat(parametro2);
      display.innerText = String(resultado).substring(0, 8);
      parametro1 = 0;
      break;
    case "*":
      resultado = parseFloat(parametro1) * parseFloat(parametro2);
      display.innerText = String(resultado).substring(0, 8);
      parametro1 = 0;
      break;
    case "/":
      resultado = parseFloat(parametro1) / parseFloat(parametro2);
      display.innerText = String(resultado).substring(0, 8);
      parametro1 = 0;
      break;

    default:
      break;
  }
};

teclasuma.onclick = function () {
  parametro1 = display.innerText;
  operacion = "+";
  teclaon.click();
};

teclaresta.onclick = function () {
  parametro1 = display.innerText;
  operacion = "-";
  teclaon.click();
};
teclamultiplica.onclick = function () {
  parametro1 = display.innerText;
  operacion = "*";
  teclaon.click();
};
tecladivide.onclick = function () {
  parametro1 = display.innerText;
  operacion = "/";
  teclaon.click();
};
teclaon.onclick = function () {
  display.innerText = "0";
};

teclasign.onclick = function () {
  if (display.innerText != "0") {
    if (display.innerText.length >= 0) {
      if (display.innerText.indexOf("-") == -1) {
        display.innerText = "-" + display.innerText;
      } else {
        display.innerText = display.innerText.substring(1);
      }
    }
  }
};

teclapunto.onclick = function () {
  if (display.innerText.length == 8) return;
  if (display.innerText.length >= 0) {
    if (display.innerText.indexOf(".") == -1) {
      display.innerText += ".";
    }
  }
};

tecla0.onclick = function () {
  if (display.innerText.length == 8) return;
  if (display.innerText == "0") {
    display.innerText = "0";
    return;
  }
  if (display.innerText.length > 0) {
    display.innerText += "0";
    return;
  }
};
tecla1.onclick = function () {
  if (display.innerText.length == 8) return;
  if (display.innerText == "0") {
    display.innerText = "1";
    return;
  }
  display.innerText += "1";
};
tecla2.onclick = function () {
  if (display.innerText.length == 8) return;
  if (display.innerText == "0") {
    display.innerText = "2";
    return;
  }
  display.innerText += "2";
};
tecla3.onclick = function () {
  if (display.innerText.length == 8) return;
  if (display.innerText == "0") {
    display.innerText = "3";
    return;
  }
  display.innerText += "3";
};
tecla4.onclick = function () {
  if (display.innerText.length == 8) return;
  if (display.innerText == "0") {
    display.innerText = "4";
    return;
  }
  display.innerText += "4";
};
tecla5.onclick = function () {
  if (display.innerText.length == 8) return;
  if (display.innerText == "0") {
    display.innerText = "5";
    return;
  }
  display.innerText += "5";
};
tecla6.onclick = function () {
  if (display.innerText.length == 8) return;
  if (display.innerText == "0") {
    display.innerText = "6";
    return;
  }
  display.innerText += "6";
};
tecla7.onclick = function () {
  if (display.innerText.length == 8) return;
  if (display.innerText == "0") {
    display.innerText = "7";
    return;
  }
  display.innerText += "7";
};
tecla8.onclick = function () {
  if (display.innerText.length == 8) return;
  if (display.innerText == "0") {
    display.innerText = "8";
    return;
  }
  display.innerText += "8";
};
tecla9.onclick = function () {
  if (display.innerText.length == 8) return;
  if (display.innerText == "0") {
    display.innerText = "9";
    return;
  }
  display.innerText += "9";
};
