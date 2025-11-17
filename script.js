const respostas = {
  q1: "11",
  q2: "jogo violento",
  q3: "estar à frente do último zagueiro e participar da jogada",
  q4: "6",
  q5: "falta dentro da área"
};

const form = document.getElementById("quizForm");
const resultado = document.getElementById("resultado");
const resetar = document.getElementById("resetar");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  resultado.innerHTML = "";

  let pontos = 0;

  for (let i = 1; i <= 5; i++) {

    const selecionada = form.querySelector('input[name="q' + i + '"]:checked');

    if (!selecionada) {
      document.getElementById("p" + i).classList.add("errada");
      continue;
    }

    if (selecionada.value === respostas["q" + i]) {
      pontos++;
      document.getElementById("p" + i).classList.add("correta");
    } else {
      document.getElementById("p" + i).classList.add("errada");
    }
  }

  resultado.innerHTML =
    '<div class="card p-3">' +
      '<h5 class="mb-1">Resultado final</h5>' +
      '<p>Você acertou <strong>' + pontos + '</strong> de 5 perguntas.</p>' +
    '</div>';
});

resetar.addEventListener("click", function() {
  form.reset();
  resultado.innerHTML = "";

  for (let i = 1; i <= 5; i++) {
    document.getElementById("p" + i).classList.remove("correta", "errada");
  }
});
