/* ============================================
   PATINHA FELIZ – JavaScript Principal
   ============================================ */

'use strict';

/* ---- Hamburger Menu ---- */
const hamburger = document.querySelector('.nav__hamburger');
const navLinks  = document.querySelector('.nav__links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!isOpen));
    navLinks.classList.toggle('open');
  });

  // Fechar ao clicar em link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('open');
    });
  });

  // Fechar ao clicar fora
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      hamburger.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('open');
    }
  });
}

/* ---- Marcar link ativo conforme a página atual ---- */
(function markActiveLink() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
})();

/* ---- Tabs de Serviços ---- */
const tabButtons = document.querySelectorAll('.tab-btn');
const serviceCards = document.querySelectorAll('.service-card[data-category]');

if (tabButtons.length) {
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.tab;

      tabButtons.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      serviceCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
          card.style.display = '';
          card.animate([{ opacity: 0, transform: 'translateY(10px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 250, easing: 'ease' });
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ---- Toast notification ---- */
function showToast(message, duration = 4000) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    toast.innerHTML = `<span class="toast__icon">✅</span><span class="toast__msg"></span>`;
    document.body.appendChild(toast);
  }
  toast.querySelector('.toast__msg').textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

/* ---- Validação de Formulário de Contato ---- */
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  const fields = {
    nome:     { el: document.getElementById('nome'),     errorId: 'nomeError',     successId: 'nomeSuccess' },
    email:    { el: document.getElementById('email'),    errorId: 'emailError',    successId: 'emailSuccess' },
    telefone: { el: document.getElementById('telefone'), errorId: 'telefoneError', successId: 'telefoneSuccess' },
    pet:      { el: document.getElementById('pet'),      errorId: 'petError',      successId: 'petSuccess' },
    servico:  { el: document.getElementById('servico'),  errorId: 'servicoError',  successId: 'servicoSuccess' },
    mensagem: { el: document.getElementById('mensagem'), errorId: 'mensagemError', successId: 'mensagemSuccess' },
  };

  const REGEX = {
    email:    /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    telefone: /^\(?\d{2}\)?[\s-]?9?\d{4}[\s-]?\d{4}$/,
  };

  function setFieldState(field, state, errorMsg) {
    const { el, errorId, successId } = field;
    const errorEl   = document.getElementById(errorId);
    const successEl = document.getElementById(successId);

    el.classList.remove('invalid', 'valid');
    if (errorEl)   errorEl.classList.remove('show');
    if (successEl) successEl.classList.remove('show');

    if (state === 'error') {
      el.classList.add('invalid');
      if (errorEl) { errorEl.textContent = '⚠ ' + errorMsg; errorEl.classList.add('show'); }
    } else if (state === 'success') {
      el.classList.add('valid');
      if (successEl) successEl.classList.add('show');
    }
  }

  function validateNome(val) {
    if (!val.trim()) return [false, 'Nome é obrigatório.'];
    if (val.trim().length < 3) return [false, 'Nome muito curto (mín. 3 caracteres).'];
    return [true];
  }
  function validateEmail(val) {
    if (!val.trim()) return [false, 'E-mail é obrigatório.'];
    if (!REGEX.email.test(val)) return [false, 'Formato de e-mail inválido (ex: nome@email.com).'];
    return [true];
  }
  function validateTelefone(val) {
    if (!val.trim()) return [false, 'Telefone é obrigatório.'];
    if (!REGEX.telefone.test(val.replace(/\s/g, ''))) return [false, 'Formato inválido. Ex: (47) 99999-9999'];
    return [true];
  }
  function validatePet(val) {
    if (!val.trim()) return [false, 'Nome do pet é obrigatório.'];
    return [true];
  }
  function validateServico(val) {
    if (!val) return [false, 'Selecione um serviço.'];
    return [true];
  }
  function validateMensagem(val) {
    if (!val.trim()) return [false, 'Mensagem é obrigatória.'];
    if (val.trim().length < 10) return [false, 'Mensagem muito curta (mín. 10 caracteres).'];
    return [true];
  }

  const validators = {
    nome:     validateNome,
    email:    validateEmail,
    telefone: validateTelefone,
    pet:      validatePet,
    servico:  validateServico,
    mensagem: validateMensagem,
  };

  // Validação ao sair do campo (blur)
  Object.entries(fields).forEach(([key, field]) => {
    if (!field.el) return;
    field.el.addEventListener('blur', () => {
      const [ok, msg] = validators[key](field.el.value);
      setFieldState(field, ok ? 'success' : 'error', msg);
    });
    field.el.addEventListener('input', () => {
      field.el.classList.remove('invalid', 'valid');
      const errEl = document.getElementById(field.errorId);
      const sucEl = document.getElementById(field.successId);
      if (errEl) errEl.classList.remove('show');
      if (sucEl) sucEl.classList.remove('show');
    });
  });

  // Submissão do formulário
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let allValid = true;

    Object.entries(fields).forEach(([key, field]) => {
      if (!field.el) return;
      const [ok, msg] = validators[key](field.el.value);
      setFieldState(field, ok ? 'success' : 'error', msg);
      if (!ok) allValid = false;
    });

    if (allValid) {
      showToast('Mensagem enviada com sucesso! Entraremos em contato em breve. 🐾');
      contactForm.reset();
      Object.values(fields).forEach(field => {
        if (field.el) {
          field.el.classList.remove('valid', 'invalid');
          const s = document.getElementById(field.successId);
          if (s) s.classList.remove('show');
        }
      });
    } else {
      // Foca no primeiro campo inválido
      const first = contactForm.querySelector('.invalid');
      if (first) first.focus();
    }
  });
}

/* ---- Máscara de Telefone ---- */
const telefoneInput = document.getElementById('telefone');
if (telefoneInput) {
  telefoneInput.addEventListener('input', (e) => {
    let v = e.target.value.replace(/\D/g, '');
    if (v.length > 11) v = v.slice(0, 11);
    if (v.length <= 10) {
      v = v.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    } else {
      v = v.replace(/^(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
    }
    e.target.value = v;
  });
}

/* ---- Scroll reveal suave ---- */
const revealEls = document.querySelectorAll('.card, .service-card, .team-card, .value-card, .testimonial');
if ('IntersectionObserver' in window && revealEls.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}
