document.addEventListener("DOMContentLoaded", () => {
  const cardAdj = [
    {
      name: "Alpha Turi",
      img: "imagenes/alpha turi.jpg"
    },
    {
      name: "Alpha Turi",
      img: "imagenes/alpha turi.jpg"
    },
    {
      name: "Aston Martin",
      img: "imagenes/aston martin.jpg"
    },
    {
      name: "Aston Martin",
      img: "imagenes/aston martin.jpg"
    },
    {
      name: "Ferrari",
      img: "imagenes/ferrari.jpg"
    },
    {
      name: "Ferrari",
      img: "imagenes/ferrari.jpg"
    },
    {
      name: "Haas",
      img: "imagenes/haas.jpg"
    },
    {
      name: "Haas",
      img: "imagenes/haas.jpg"
    },
    {
      name: "Mclaren",
      img: "imagenes/mclaren.jpg"
    },
    {
      name: "Mclaren",
      img: "imagenes/mclaren.jpg"
    },
    {
      name: "Mercedes",
      img: "imagenes/mercedes.jpg"
    },
    {
      name: "Mercedes",
      img: "imagenes/mercedes.jpg"
    }
  ];

  const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasEscogidas = [];
  var cartasEscogidasId = [];
  var cartasGanadas = [];
  //----------------- lectura03 ---------------------------//
  function crearTablero() {
    for (let i = 0; i < cardAdj.length; i++) {
      var carta = document.createElement("image");
      carta.setAttribute("src", "image/reverso.png");

      carta.setAttribute("data-id", i);
      carta.addEventListener("click", voltearCarta);

      cuadricula.appendChild(carta);
    }
  }

  function voltearCarta() {
    var cardId = this.getAttribute("data-id");
    cartasEscogidas.push(cardAdj[cardId].name);
    cartasEscogidasId.push(cardId);
    this.setAttribute("src", cardAdj[cardId].image);
    if (cartasEscogidas.length === 2) {
      setTimeout(verificarPareja, 1000);
    }
  }

  function verificarPareja() {
    var cards = document.querySelectorAll("image");
    const opcionUnoId = cartasEscogidasId[0];
    const opcionDosId = cartasEscogidasId[1];

    if (opcionUnoId === opcionDosId) {
      cards[opcionUnoId].setAttribute("src", "image/reverso.png");
      cards[opcionDosId].setAttribute("src", "image/reverso.png");
      alert("¡Diste click a la misma imagen!");
    } else if (cartasEscogidas[0] === cartasEscogidas[1]) {
      alert("¡Correcto!");
      cards[opcionUnoId].setAttribute("src", "image/blank-png");
      cards[opcionDosId].setAttribute("src", "image/bLank.png");
      cards[opcionUnoId].removeEventListener("click", voltearCarta);
      cards[opcionDosId].removeEventListener("click", voltearCarta);
      cartasGanadas.push(cartasEscogidas);
    } else {
      cards[opcionUnoId].setAttribute("src", "image/reverso.png");
      cards[opcionDosId].setAttribute("src", "image/reverso.png");
      alert("¡Intenta de nuevo!");
    }
    cartasEscogidas = [];
    cartasEscogidasId = [];

    resultado.textContent = cartasGanadas.length;

    if (cartasGanadas.length === cardAdj.length / 2) {
      resultado.textContent = "!Felicidades, encontraste todos los pares!";
    }
  }
  crearTablero();
});
