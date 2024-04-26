document.addEventListener('DOMContentLoaded', function() {
  // Adiciona evento de mouseover e mouseout aos links de navegação
  document.querySelectorAll('nav ul li a').forEach(item => {
      item.addEventListener('mouseover', event => {
          item.classList.add('hovered');
      });
      item.addEventListener('mouseout', event => {
          item.classList.remove('hovered');
      });
  });

  // Adiciona evento de clique para alternar o modo escuro
  document.getElementById('dark-mode-btn').addEventListener('click', function() {
      document.body.classList.toggle('dark-theme');
  });

  // Adiciona evento de mouseover e mouseout aos botões sociais
  document.querySelectorAll('.social-button, .contact-me-button, .read-more-button').forEach(item => {
      item.addEventListener('mouseover', event => {
          item.classList.add('hovered');
      });
      item.addEventListener('mouseout', event => {
          item.classList.remove('hovered');
      });
  });

  // Simula a digitação do nome
  var name = document.getElementById('myName');
  var nameText = 'Luis Henrique Trichez.';
  var index = 0;

  // Remove o texto existente
  name.textContent = '';

  // Função para simular a digitação do nome
  function typeWriter() {
      if (index < nameText.length) {
          name.textContent += nameText.charAt(index);
          if (nameText.charAt(index) === ' ') {
              name.textContent += ' ';
          }
          index++;
          setTimeout(typeWriter, 100); // Ajuste o intervalo de tempo para controlar a velocidade da digitação
      }
  }

  typeWriter(); // Chama a função para iniciar a animação de digitação
});

// Adicione esse código para abrir e fechar o overlay ao clicar no botão
document.getElementById('open-overlay-btn').addEventListener('click', function() {
    document.getElementById('dark-mode-overlay').style.display = 'flex';
});

document.getElementById('close-overlay-btn').addEventListener('click', function() {
    document.getElementById('dark-mode-overlay').style.display = 'none';
});

