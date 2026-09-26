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
      outcome: 'Project Plaza shows how a chat can become the center of everyday life—not just a place to talk. By building payments, shopping, and services around the conversation, the app turns scattered tasks into one simple flow. This project challenged me to balance a wide set of features with clarity, trust, and ease of use.',
    },
    'loyalty-rewards': {
      title: 'LMF Loyalty Rewards',
      type: 'MOBILE APP DESIGN',
      tagline: 'Earn, redeem, and track points across partner stores.',
      overview: 'LMF Loyalty Rewards, branded as Rewards by LMFC, is a mobile loyalty program that connects customers with a network of partner merchants. It has two apps: one for customers to earn, redeem, and track their points, and one for merchants to scan customer QR codes and process rewards at checkout.',
      problem: 'Traditional loyalty programs often rely on physical cards, paper stamps, or separate systems for each store. Customers lose track of their points, and merchants struggle to record transactions quickly while serving people at the counter. There was a need for one simple system that works for both sides.',
      solution: 'Rewards by LMFC gives every customer a personal QR code that works across all partner merchants. Customers show their code, merchants scan it, and points are earned or redeemed in seconds. Both apps keep a clear transaction history, so customers and merchants can always see where points came from and where they went.',
      challenge: 'The main challenge was designing two connected apps for very different users. Customers needed an app that made their points and rewards easy to understand, while merchants needed a fast, error-free checkout flow they could use during busy hours. Both had to feel like part of the same system.',
      usercentric: 'For customers, I placed the points balance and QR code front and center on the Home screen, so they’re ready to use the moment the app opens. Signing in uses only a mobile number and a one-time password, with no passwords to remember. For merchants, I focused on speed and accuracy, showing a clear breakdown of amounts and points before any transaction is confirmed.',
      accessibility: 'Key actions use large, high-contrast buttons, and points are color-coded so earned and redeemed activity is easy to tell apart. OTP login removes the hassle of passwords for customers, while review screens and clear success and error messages help merchants avoid mistakes. Friendly empty states guide users when there’s no activity yet, and a consistent layout across both apps makes them quick to learn.',
      outcome: 'The result is a connected loyalty experience where customers can earn and use points at any partner store with a single QR code, and merchants can process rewards in just a few taps. I also created user and merchant manuals to support onboarding, helping both groups get started quickly. This project strengthened my ability to design for two user groups while keeping the experience unified.',
      usercentricVisual: 'loyalty/lmf-home.png',
      usercentricAlt: 'Rewards by LMFC customer Home screen with points balance, personal QR code, recent transactions, and partner rewards',
    },
    cabana: { title: 'Cabana', type: 'MOBILE APP DESIGN', overview: 'A mobile guest experience for planning stays, discovering amenities, and accessing services.' },
    'negros-tourist-pass': { title: 'Negros Tourist Pass', type: 'MOBILE APP DESIGN', overview: 'A digital tourism pass for discovering local destinations and keeping travel access in one place.' },
    'planout-back-office': { title: 'Planout (Back Office)', type: 'WEB DESIGN', overview: 'A back-office workspace mockup for organizing schedules, daily operations, and team workflows.' },
    'aspire-mfi': { title: 'Aspire MFI', type: 'WEB DESIGN', overview: 'A financial services portal mockup for managing member accounts, payments, and essential information.' },
    'aspire-clc': { title: 'Aspire CLC', type: 'WEB DESIGN', overview: 'A learning portal mockup for finding course details, learning activities, and student resources.' }
  };
  const generic = 'Case-study details and project visuals will be added as the final research and screens are prepared.';

  const currentCase = document.querySelector('.uiux-case');
  if (currentCase) {
    currentCase.classList.add('uiux-case--uniform');
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
    const isLoyalty = params.get('project') === 'loyalty-rewards';
    currentCase.classList.toggle('uiux-case--plaza', isPlaza);
    currentCase.classList.toggle('uiux-case--loyalty', isLoyalty);
    if (project.usercentricVisual) {
      const visual = document.querySelector('.uiux-story-section--usercentric-placeholder .uiux-story-visual');
      if (visual) {
        const image = document.createElement('img');
        image.src = `../../assets/images/work/ui-ux/${project.usercentricVisual}`;
        image.alt = project.usercentricAlt || '';
        image.loading = 'lazy';
        visual.className = 'uiux-story-visual uiux-loyalty-usercentric-visual';
        visual.removeAttribute('role');
        visual.removeAttribute('aria-label');
        const phone = document.createElement('div');
        phone.className = 'uiux-loyalty-phone uiux-loyalty-phone--single';
        phone.append(image);
        visual.replaceChildren(phone);
      }
    }
    if (isPlaza) {
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
