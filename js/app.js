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

const calculadora = (function () {
  var operaciones = [];
  var resultado = 0;

  function actualizarResultado(resultadonuevo) {
    resultado = resultadonuevo;
  }
  function suma(param1, param2) {
    var resultado = parseFloat(param1) + parseFloat(param2);
    actualizarResultado(Number(resultado).toFixed(2));
    return resultado;
  }
  function resta(param1, param2) {
    var resultado = parseFloat(param1) - parseFloat(param2);
    actualizarResultado(Number(resultado).toFixed(2));
    return resultado;
  }
  function multiplicacion(param1, param2) {
    var resultado = parseFloat(param1) * parseFloat(param2);
    actualizarResultado(Number(resultado).toFixed(2));
    return resultado;
  }
  function division(param1, param2) {
    var resultado = parseFloat(param1) / parseFloat(param2);
    actualizarResultado(Number(resultado).toFixed(2));
    return resultado;
  }
  function calcula() {
    return resultado;
  }
  function operar() {
    const { param1, operador } = operaciones[operaciones.length - 1];
    if (operaciones.length > 1 && operador != "=") {
      operaciones[operaciones.length - 2].param2 = param1;
      var res = realizarOperacion(operaciones[operaciones.length - 2]);
      operaciones[operaciones.length - 1].param1 = res;
      return;
    }
    if (operaciones.length > 1 && operador == "=") {
      var t1;
      var t2;
      if ( operaciones[operaciones.length - 2].param2 != null) {
        t1 = param1;
        t2 = operaciones[operaciones.length - 2].param2;
        operaciones[operaciones.length - 2].param1 = t1;
        operaciones[operaciones.length - 2].param2 = t2;
      }else{
        t1 = operaciones[operaciones.length - 2].param1;
        t2 = param1;
        operaciones[operaciones.length - 2].param1 = t1;
        operaciones[operaciones.length - 2].param2 = t2;
      }

      var res = realizarOperacion(operaciones[operaciones.length - 2]);
      operaciones[operaciones.length - 1].param2 = t2;
      operaciones[operaciones.length - 1].operador = operaciones[operaciones.length - 2].operador;
      operaciones[operaciones.length - 1].param1 = res;
    }
    operaciones.forEach((element) => {
      console.log(element);
    });
  }
  function realizarOperacion(param) {
    var op = param.operador;
    var resultadoparam = 0;
    switch (op) {
      case "+":
        resultadoparam = suma(param.param1, param.param2);
        break;
      case "-":
        resultadoparam = resta(param.param1, param.param2);
        break;
      case "*":
        resultadoparam = multiplicacion(param.param1, param.param2);
        break;
      case "/":
        resultadoparam = division(param.param1, param.param2);
        break;
      case "=":
        resultadoparam = resultado;
        break;
    }
    return resultadoparam;
  }
  return {
    sumar: function (param1, operador) {
      const op = { param1, operador };
      operaciones.push(op);
      operar();
    },
    restar: function (param1, operador) {
      const op = { param1, operador };
      operaciones.push(op);
      operar();
    },
    multiplicar: function (param1, operador) {
      const op = { param1, operador };
      operaciones.push(op);
      operar();
    },
    dividir: function (param1, operador) {
      const op = { param1, operador };
      operaciones.push(op);
      operar();
    },
    calcula: function (param1, operador) {
      const op = { param1, operador };
      operaciones.push(op);
      operar();
    },
    total: function () {
      return resultado;
    },
    reset: function () {
      operaciones = [];
      resultado = 0;
    },
  };
})();

teclaigual.onclick = function () {
  parametro1 = display.innerText;
  operacion = "=";
  calculadora.calcula(parametro1,operacion);
  prepararOperacion();
  display.innerText = calculadora.total();
  // calculadora.reset();
};

function prepararOperacion() {
  display.innerText = "";
}

teclasuma.onclick = function () {
  parametro1 = display.innerText;
  operacion = "+";
  calculadora.sumar(parametro1, operacion);
  prepararOperacion();
};
teclaresta.onclick = function () {
  parametro1 = display.innerText;
  operacion = "-";
  calculadora.restar(parametro1, operacion);
  prepararOperacion();
};
teclamultiplica.onclick = function () {
  parametro1 = display.innerText;
  operacion = "*";
  calculadora.multiplicar(parametro1, operacion);
  prepararOperacion();
};
tecladivide.onclick = function () {
  parametro1 = display.innerText;
  operacion = "/";
  calculadora.dividir(parametro1, operacion);
  prepararOperacion();
};
teclaon.onclick = function () {
  display.innerText = "0";
  calculadora.reset();
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
