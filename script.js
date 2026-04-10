// Espera tudo carregar antes de fazer qualquer coisa
document.addEventListener('DOMContentLoaded', function () {

  // ======== NAVBAR: compacta quando rola a página ========
  
  const navbar = document.getElementById('navbar');

  // Escuta cada vez que  rola
  window.addEventListener('scroll', function () {
    
    // window.scrollY = quanto rolou em pixels
    if (window.scrollY > 50) {
      // Passou de 50px? Coloca a classe 'scrolled' pra compactar
      navbar.classList.add('scrolled');
    } else {
      // Não passou? Remove a classe
      navbar.classList.remove('scrolled');
    }
  });


  // ======== ANIMAÇÃO: elementos aparecem quando entra na tela ========
  
  // Pega todos os elementos que quer animar
  const elementosAnimados = document.querySelectorAll(
    '#sobre, #skills, #projetos, #contato, .card-projeto, .skill-grupo, .info-item'
  );

  // IntersectionObserver fica "observando" se os elementos entram na tela
  const observer = new IntersectionObserver(function (entries) {
    
    entries.forEach(function (entry) {
      // Se o elemento tá visível na tela agora...
      if (entry.isIntersecting) {
        // Coloca a classe 'visivel' que dispara a animação do CSS
        entry.target.classList.add('visivel');
        
        // Para de observar depois que já animou
        observer.unobserve(entry.target);
      }
    });

  }, {
    threshold: 0.1  // Dispara quando 10% do elemento tá visível
  });

  // Registra cada elemento pra ser observado
  elementosAnimados.forEach(function (el) {
    observer.observe(el);
  });


  // ======== NAVBAR: destaca o link da seção que  tá ========
  
  const secoes = document.querySelectorAll('section[id]');
  const linksNav = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', function () {
    
    let secaoAtual = '';

    // Verifica qual seção tá vendo agora
    secoes.forEach(function (secao) {
      // offsetTop = a distância da seção até o topo da página
      const topo = secao.offsetTop - 100;
      
      // Se  já passou dessa seção, ela é a atual
      if (window.scrollY >= topo) {
        secaoAtual = secao.getAttribute('id');
      }
    });

    // Remove a classe 'ativo' de todos os links
    linksNav.forEach(function (link) {
      link.classList.remove('ativo');
      
      // E coloca só no link da seção que tá vendo
      if (link.getAttribute('href') === '#' + secaoAtual) {
        link.classList.add('ativo');
      }
    });
  });

});