function calcularSoma() {
  let somaColuna1 = 0;
  let somaColuna2 = 0;
  let somaColuna3 = 0;
  let somaColuna4 = 0;

  for (let i = 1; i <= 27; i++) {
    const inputs = document.querySelectorAll(
      "input[name=row" + i + "]:checked"
    );
    inputs.forEach(function (input) {
      if (input.value === "Sanguíneo") somaColuna1++;
      else if (input.value === "Colérico") somaColuna2++;
      else if (input.value === "Melancólico") somaColuna3++;
      else if (input.value === "Fleumático") somaColuna4++;
    });
  }

  const totalMarcadas = somaColuna1 + somaColuna2 + somaColuna3 + somaColuna4;
  if (totalMarcadas < 27) {
    const restantes = 27 - totalMarcadas;
    alert(
      `Certifique-se de marcar todas as palavras restantes, uma por linha na horizontal. Faltam ${restantes} palavra(s).`
    );
    return;
  }

  let resultado = "Resultado:\n";
  const maxSoma = Math.max(somaColuna1, somaColuna2, somaColuna3, somaColuna4);
  if (maxSoma === somaColuna1)
    resultado += "Mais palavras da 1ª coluna: Temperamento Sanguíneo\n";
  if (maxSoma === somaColuna2)
    resultado += "Mais palavras da 2ª coluna: Temperamento Colérico\n";
  if (maxSoma === somaColuna3)
    resultado += "Mais palavras da 3ª coluna: Temperamento Melancólico\n";
  if (maxSoma === somaColuna4)
    resultado += "Mais palavras da 4ª coluna: Temperamento Fleumático\n";

  document.getElementById("resultado").innerText = resultado;
}
function openTab(tabId) {
  var tabContents = document.querySelectorAll(".tab-content");
  var tabs = document.querySelectorAll(".tab");

  for (var i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }

  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }

  document.getElementById("content_" + tabId).style.display = "block";
  document.getElementById(tabId).classList.add("active");
}
