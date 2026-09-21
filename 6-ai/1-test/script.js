/**
 * NexusCore — Modern SaaS Landing Page Interactions
 * Pure Vanilla JavaScript (No libraries or frameworks)
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileNavigation();
  initSpotlightEffect();
  initHeroConsoleTabs();
  initLiveTerminalLogs();
  initRoiCalculator();
  initStatCounters();
  initScrollReveal();
  initSignupForm();
  initDemoButton();
});

/* --------------------------------------------------------------------------
   1. STICKY HEADER
   -------------------------------------------------------------------------- */
function initStickyHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 24) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* --------------------------------------------------------------------------
   2. MOBILE NAVIGATION DRAWER
   -------------------------------------------------------------------------- */
function initMobileNavigation() {
  const toggleBtn = document.getElementById('mobileToggle');
  const drawer = document.getElementById('mobileDrawer');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !drawer) return;

  const toggleMenu = () => {
    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const openMenu = () => {
    toggleBtn.classList.add('active');
    drawer.classList.add('open');
    toggleBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    toggleBtn.classList.remove('active');
    drawer.classList.remove('open');
    toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  toggleBtn.addEventListener('click', toggleMenu);

  links.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close when clicking outside drawer
  document.addEventListener('click', (e) => {
    if (drawer.classList.contains('open') && !drawer.contains(e.target) && !toggleBtn.contains(e.target)) {
      closeMenu();
    }
  });
}

/* --------------------------------------------------------------------------
   3. CURSOR SPOTLIGHT EFFECT ON FEATURE CARDS
   -------------------------------------------------------------------------- */
function initSpotlightEffect() {
  const cards = document.querySelectorAll('[data-spotlight]');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/* --------------------------------------------------------------------------
   4. HERO INTERACTIVE CONSOLE TABS
   -------------------------------------------------------------------------- */
function initHeroConsoleTabs() {
  const tabs = document.querySelectorAll('.console-tab');
  const panels = document.querySelectorAll('.tab-panel');

  if (!tabs.length || !panels.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-tab');

      // Update Tab active state
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      // Update Panel visibility
      panels.forEach(panel => {
        panel.classList.remove('active');
        if (panel.id === `tab-${targetId}`) {
          panel.classList.add('active');
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   5. LIVE TERMINAL LOGS GENERATOR
   -------------------------------------------------------------------------- */
function initLiveTerminalLogs() {
  const terminal = document.getElementById('liveLogTerminal');
  if (!terminal) return;

  const logMessages = [
    { type: 'info', text: 'NexusCore Gateway v3.2 başlatıldı (Istanbul Uç Noktası).' },
    { type: 'ok', text: 'LLM Yönlendirme: Anthropic Claude 3.5 Sonnet düğümü bağlandı (latency: 18ms).' },
    { type: 'ok', text: 'Dağıtık önbellek ısındı. İsabet tahmini: %99.6.' },
    { type: 'warn', text: 'Yoğun trafik dengelendi: 4 yeni mikro-ajan kümesi otomatik devreye girdi.' },
    { type: 'ok', text: 'Uçtan uca Zero-Knowledge şifreleme anahtarları doğrulandı.' },
    { type: 'info', text: 'PostgreSQL ve Redis dağıtık kuyrukları senkronize.' },
    { type: 'ok', text: '18.450 işlem/saniye stabil tepe değerine ulaşıldı.' }
  ];

  const renderInitialLogs = () => {
    terminal.innerHTML = '';
    logMessages.forEach(msg => appendLogLine(msg.text, msg.type));
  };

  const appendLogLine = (text, type = 'info') => {
    const row = document.createElement('div');
    row.className = 'terminal-row';

    const now = new Date();
    const timeStr = now.toTimeString().split(' ')[0];

    const typeColor = type === 'ok' ? '#34d399' : type === 'warn' ? '#f59e0b' : '#38bdf8';
    const typeLabel = type === 'ok' ? 'BAŞARILI' : type === 'warn' ? 'UYARI' : 'BİLGİ';

    row.innerHTML = `
      <span class="prompt-sign">&gt;</span>
      <span style="color: #64748b;">[${timeStr}]</span>
      <span style="color: ${typeColor}; font-weight: bold;">[${typeLabel}]</span>
      <span>${text}</span>
    `;

    terminal.appendChild(row);
    terminal.scrollTop = terminal.scrollHeight;
  };

  renderInitialLogs();

  // Periodically append simulated live stream items
  const dynamicLogs = [
    'Bölgesel yük devretme testi başarıyla tamamlandı (0ms kayıp).',
    'Yeni token tasarrufu optimizasyonu uygulandı (-%22 maliyet).',
    'Frankfurt Uç PoP &rarr; Tokyo hattında gecikme 62ms seviyesine düşürüldü.',
    'Model orkestratörü paralel 64 alt görevi başarıyla birleştirdi.',
    'Kriptografik oturum tokenları yenilendi.'
  ];

  let logIndex = 0;
  setInterval(() => {
    if (document.hidden) return;
    const msg = dynamicLogs[logIndex % dynamicLogs.length];
    appendLogLine(msg, 'ok');
    logIndex++;
    
    // Keep max 20 rows
    while (terminal.children.length > 20) {
      terminal.removeChild(terminal.firstChild);
    }
  }, 4500);
}

/* --------------------------------------------------------------------------
   6. INTERACTIVE ROI & SAVINGS CALCULATOR
   -------------------------------------------------------------------------- */
function initRoiCalculator() {
  const slider = document.getElementById('volumeSlider');
  const displayVal = document.getElementById('sliderValueDisplay');
  const hoursSavedEl = document.getElementById('hoursSaved');
  const costSavedEl = document.getElementById('costSaved');
  const speedBoostEl = document.getElementById('speedBoost');

  if (!slider || !displayVal) return;

  const updateCalculations = () => {
    const val = parseInt(slider.value, 10);

    // Format number in Turkish locale
    displayVal.textContent = `${val.toLocaleString('tr-TR')} İstek`;

    // Calculations:
    // Hours saved: roughly 1 hour per 1800 requests
    const hours = Math.round(val / 1800);
    hoursSavedEl.innerHTML = `${hours.toLocaleString('tr-TR')} <span class="calc-unit">saat/ay</span>`;

    // Cost saved: $17 per 1000 requests optimized
    const cost = Math.round((val / 1000) * 17);
    costSavedEl.innerHTML = `$${cost.toLocaleString('en-US')} <span class="calc-unit">/ay</span>`;

    // Speed boost multiplier: between 3.5x and 5.8x
    const speed = (3.4 + (val / 2000000) * 2.4).toFixed(1);
    speedBoostEl.innerHTML = `${speed}x <span class="calc-unit">Daha Hızlı</span>`;
  };

  slider.addEventListener('input', updateCalculations);
  updateCalculations();
}

/* --------------------------------------------------------------------------
   7. STAT COUNTERS ON SCROLL
   -------------------------------------------------------------------------- */
function initStatCounters() {
  const statElements = document.querySelectorAll('.stat-number');
  if (!statElements.length) return;

  let hasRun = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasRun) {
        hasRun = true;
        statElements.forEach(el => animateCounter(el));
      }
    });
  }, { threshold: 0.5 });

  const trustBar = document.querySelector('.hero-trust-bar');
  if (trustBar) {
    observer.observe(trustBar);
  }

  function animateCounter(element) {
    const target = parseFloat(element.getAttribute('data-target'));
    const suffix = element.getAttribute('data-suffix') || '';
    const isDecimal = target % 1 !== 0;
    const duration = 1800; // ms
    const startTime = performance.now();

    const updateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out quad
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = target * easeProgress;

      if (isDecimal) {
        element.textContent = current.toFixed(target > 10 ? 2 : 1) + suffix;
      } else {
        element.textContent = Math.floor(current) + suffix;
      }

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        element.textContent = (isDecimal ? target.toFixed(target > 10 ? 2 : 1) : target) + suffix;
      }
    };

    requestAnimationFrame(updateCount);
  }
}

/* --------------------------------------------------------------------------
   8. SCROLL REVEAL (INTERSECTION OBSERVER)
   -------------------------------------------------------------------------- */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal-fade');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

/* --------------------------------------------------------------------------
   9. CTA SIGNUP FORM & TOAST SYSTEM
   -------------------------------------------------------------------------- */
function initSignupForm() {
  const form = document.getElementById('signupForm');
  const emailInput = document.getElementById('emailInput');

  if (!form || !emailInput) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();

    if (!isValidEmail(email)) {
      showToast('Lütfen geçerli bir iş e-posta adresi girin.', 'error');
      emailInput.focus();
      return;
    }

    // Success simulation
    showToast(`Tebrikler! Giriş bağlantınız "${email}" adresine iletildi.`, 'success');
    emailInput.value = '';
  });

  function isValidEmail(val) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  }
}

/* Toast Message Generator */
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';

  const icon = type === 'success' ? '✓' : '⚠';
  const iconColor = type === 'success' ? '#34d399' : '#f43f5e';

  toast.innerHTML = `
    <span class="toast-icon" style="color: ${iconColor}">${icon}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Auto dismiss after 4.5 seconds
  setTimeout(() => {
    toast.classList.add('fade-out');
    toast.addEventListener('animationend', () => {
      toast.remove();
    });
  }, 4500);
}

/* --------------------------------------------------------------------------
   10. DEMO BUTTON SCROLL
   -------------------------------------------------------------------------- */
function initDemoButton() {
  const demoBtn = document.getElementById('demoButton');
  const consoleEl = document.getElementById('konsol');

  if (!demoBtn || !consoleEl) return;

  demoBtn.addEventListener('click', () => {
    consoleEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Add brief highlight flash
    consoleEl.style.transition = 'transform 0.4s ease, box-shadow 0.4s ease';
    consoleEl.style.transform = 'scale(1.02)';
    consoleEl.style.boxShadow = '0 0 50px rgba(6, 182, 212, 0.6)';

    setTimeout(() => {
      consoleEl.style.transform = '';
      consoleEl.style.boxShadow = '';
    }, 800);
  });
}
