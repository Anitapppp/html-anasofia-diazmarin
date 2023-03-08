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
  var CartasEscogidas = [];
  var CartasEscogidasId = [];
  var CartasGanadas = [];

  function crearTablero() {
    for (let i = 0; i < cardAdj.length; i++) {
      var carta = document.createe8("img");
      carta.setAttribute("src", "imagenes/reverso.png");

      carta.setAttribute("data-id", i);
      carta.addEventListener("click", VoltearCarta);

      cuadricula.appendChild(carta);
    }
  }
  function VoltearCarta() {
    var CardId = this.getAtribute("data-id");
    CartasEscogidas.push(cardAdj[CardId].name);
    CartasEscogidas.push(CardId);
    this.setAttribute("src", cardAdj[CardId].img);
    if (CartasEscogidas.length === 2) {
      setTimeout(VerificarPareja, 1000);
    }
  }
  crearTablero();
});
