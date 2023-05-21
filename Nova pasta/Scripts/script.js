let Numero = document.querySelector("#Numero");
let botao = document.querySelector("#botao");

function numeroImpar() {
  let num = Number(Numero.value);

  if (num % 2 !== 0) {
    alert("O número é ímpar.");
  } else {
    alert("O número é par.");
  }
}

botao.onclick = function() {
  numeroImpar();
};