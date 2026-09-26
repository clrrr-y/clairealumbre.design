(() => {
  const projects = {
    plaza: {
      title: 'Project Plaza',
      type: 'MOBILE APP DESIGN',
      tagline: 'Chat, connect, and transact in one place.',
      overview: 'Project Plaza is a chat-first super app that brings messaging, money transfers, buying and selling, group collections, and partner services together in one place. Designed with Filipino users in mind, it lets people handle everyday conversations and transactions without switching between multiple apps.',
      problem: 'Everyday transactions are scattered across too many apps. People agree on a payment in one chat app, send the money in an e-wallet, screenshot the receipt as proof, and track orders somewhere else. This constant switching wastes time, causes confusion over who has paid, and makes it easy to lose track of important records.',
      solution: 'Plaza puts payments right where the conversation happens. Users can send, request, and pay money inside a chat, buy from sellers without leaving the thread, and collect group payments with automatic tracking. Every transaction leaves a receipt in the chat, so both sides always have a clear record.',
      challenge: 'The biggest challenge was fitting chat, a wallet, a marketplace, and a services hub into one app without making it feel crowded. Each feature needed to feel connected to the conversation, while money actions still had to feel safe, clear, and deliberate.',
      usercentric: 'I designed around how people already talk about money, like a parent asking for grocery money or friends splitting a dinner bill. Payment requests appear as cards in the chat, receipts are saved automatically, and Smart Amount Detection notices when an amount like “₱250” is mentioned and offers a one-tap option to send or request it. The Plaza Smart Assistant helps users pay bills or find the right service, and it always asks for confirmation before any money action.',
      accessibility: 'Interactive elements are labeled for screen readers, and every transaction uses clear status labels like Pending, Paid, and Completed so users are never unsure where their money is. Fingerprint verification and confirmation screens protect every payment. Familiar patterns, a consistent layout, and payments that happen inside the chat keep the number of steps low.',
      outcome: 'Project Plaza shows how a chat can become the center of everyday life, not just a place to talk. By building payments, shopping, and services around the conversation, the app turns scattered tasks into one simple flow. This project pushed me to balance many features with clarity, trust, and ease of use.',
      heroImage: '../../assets/images/work/ui-ux/plaza/chat-thread.png',
      heroAlt: 'Project Plaza chat showing Smart Amount Detection and in-chat payment actions',
      finalImage: '../../assets/images/work/ui-ux/plaza/plaza-home.png'
    },
    analytics: { title: 'Analytics Dashboard', type: 'WEB APPLICATION', overview: 'A data-focused dashboard designed to make complex business information easier to understand.' },
    booking: { title: 'Booking Experience', type: 'RESPONSIVE PRODUCT DESIGN', overview: 'A streamlined booking flow created to reduce friction and help users complete reservations confidently.' },
    portfolio: { title: 'Creative Portfolio Platform', type: 'WEBSITE DESIGN', overview: 'A modern portfolio experience that organizes creative work through clear and engaging visual storytelling.' }
  };
  const generic = 'Case-study details and project visuals will be added as the final research and screens are prepared.';

  const currentCase = document.querySelector('.uiux-case');
  if (currentCase) {
    const params = new URLSearchParams(window.location.search);
    const project = projects[params.get('project')] || projects.plaza;
    document.title = `${project.title} — UI/UX Case Study | Claire Alumbre`;
    const put = (selector, value) => {
      document.querySelectorAll(selector).forEach((node) => { node.textContent = value; });
    };
    put('[data-case-title]', project.title);
    put('[data-case-type]', project.type);
    put('[data-case-tagline]', project.tagline || '');
    put('[data-case-overview]', project.overview);
    put('[data-case-problem]', project.problem || generic);
    put('[data-case-solution]', project.solution || generic);
    put('[data-case-challenge]', project.challenge || generic);
    put('[data-case-usercentric]', project.usercentric || generic);
    put('[data-case-accessibility]', project.accessibility || generic);
    put('[data-case-outcome]', project.outcome || generic);
    const isPlaza = params.get('project') === 'plaza' || !params.has('project');
    currentCase.classList.toggle('uiux-case--plaza', isPlaza);
    if (isPlaza) {
      const heroImage = document.querySelector('[data-case-hero-image]');
      const finalImage = document.querySelector('[data-case-final-image]');
      if (heroImage) {
        heroImage.src = project.heroImage;
        heroImage.alt = project.heroAlt;
      }
      if (finalImage) {
        finalImage.src = project.finalImage;
        finalImage.alt = 'Project Plaza services hub screen';
      }
      put('[data-case-hero-label]', 'CHAT · SMART AMOUNT DETECTION');
      put('[data-case-final-label]', 'PLAZA SERVICES HUB');
    }
  }

  document.querySelectorAll('[data-uiux-project-link]').forEach((link) => {
    link.addEventListener('click', () => {
      try { sessionStorage.setItem('uiuxListingScrollY', String(window.scrollY)); } catch (_) {}
    });
  });

  const restoreListingPosition = () => {
    if (document.body.classList.contains('uiux-case-page')) return;
    let saved;
    try { saved = sessionStorage.getItem('uiuxListingScrollY'); } catch (_) { return; }
    if (saved === null) return;
    const y = Number(saved);
    if (!Number.isFinite(y)) return;
    requestAnimationFrame(() => {
      window.scrollTo(0, y);
      requestAnimationFrame(() => window.scrollTo(0, y));
    });
    try { sessionStorage.removeItem('uiuxListingScrollY'); } catch (_) {}
  };
  window.addEventListener('pageshow', restoreListingPosition);
  if (document.readyState === 'complete') restoreListingPosition();

  const revealNodes = document.querySelectorAll('[data-uiux-reveal]');
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    revealNodes.forEach((node) => node.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries, activeObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        activeObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' });
    revealNodes.forEach((node) => observer.observe(node));
  }
})();
