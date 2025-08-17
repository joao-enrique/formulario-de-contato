document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const nameInput = document.querySelector("input[name='name']");
  const emailInput = document.querySelector("input[name='email']");
  const messageInput = document.querySelector("textarea[name='message']");
  const feedback = document.createElement("p");

  feedback.style.marginTop = "10px";
  feedback.style.fontSize = "14px";
  feedback.style.fontWeight = "bold";
  form.appendChild(feedback);

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // impede envio real

    // Reset feedback
    feedback.textContent = "";
    feedback.style.color = "red";

    // validações simples
    if (nameInput.value.trim() === "") {
      feedback.textContent = "⚠️ Por favor, insira seu nome.";
      return;
    }

    if (emailInput.value.trim() === "" || !validateEmail(emailInput.value)) {
      feedback.textContent = "⚠️ Insira um e-mail válido.";
      return;
    }

    if (messageInput.value.trim() === "") {
      feedback.textContent = "⚠️ Escreva uma mensagem.";
      return;
    }

    // Simulação de envio
    feedback.style.color = "green";
    feedback.textContent = "✅ Mensagem enviada com sucesso!";
    
    // limpar campos depois de enviar
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
  });

  function validateEmail(email) {
    // Regex simples de validação de email
    return /\S+@\S+\.\S+/.test(email);
  }
});
