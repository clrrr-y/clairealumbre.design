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
    'negros-tourist-pass': {
      title: 'Negros Tourism Pass',
      type: 'MOBILE APP DESIGN',
      tagline: 'Discover, book, and travel Negros in one app.',
      overview: 'Negros Tourism Pass is a mobile travel app that helps tourists discover and book destinations, activities, and local service providers across Negros. From browsing places to paying for bookings and checking in with a QR code, the whole trip can be planned and managed in one place.',
      problem: 'Planning a trip around Negros often means going through scattered social media pages, messaging different operators, and arranging payments one by one. Tourists had no single, reliable place to see what’s available, compare offers, and confirm bookings, while local tourism organizers had no easy way to guide visitors to specific areas they were promoting.',
      solution: 'The app brings destinations, activities, and service providers together in one bookable platform. Tourists can browse listings, check availability, add multiple bookings to a cart, and pay in one checkout. Each user gets a personal QR code for verification, and a link-based filtering system lets organizers share links that show only the destinations for a specific province or area.',
      challenge: 'The main challenge was making a full travel booking flow, from discovery to payment to the trip itself, feel simple on a small screen. We also had to handle different booking states like pending, partially paid, and confirmed, and design a landing page that could adapt its content depending on the link a tourist used to open the app.',
      usercentric: 'We designed around how tourists actually plan trips: discovering places through shared posts, comparing options, then booking several activities at once. Listing pages show inclusions, exclusions, and photos upfront so there are no surprises, and a cart lets users plan a whole itinerary before paying. Clear booking statuses help travelers always know what still needs to be done.',
      accessibility: 'The app uses a consistent layout, a bottom navigation bar with the QR code always one tap away, and clear status labels throughout. Large photos and short descriptions make listings easy to scan, while a step-by-step booking flow reduces errors. Multiple sign-in options and flexible payment support, including partial payments, make the app easier for more travelers to use.',
      outcome: 'Negros Tourism Pass turns trip planning into one connected experience, from discovering a destination to checking in on the day. The link-based filtering also gives tourism organizers a practical way to promote specific areas through their marketing. Along with the app, we created a tourist user manual to support onboarding. Working as a two-person team strengthened my collaboration skills, from dividing work to keeping our designs consistent.',
      usercentricVisual: 'negros-tourism-pass/booking.png',
      usercentricAlt: 'Negros Tourism Pass booking screens for choosing dates, travelers, and extra services',
    },
    'planout-back-office': {
      title: 'PlanOut (Back Office)',
      type: 'WEB DESIGN',
      tagline: 'Connecting people to places through meaningful experiences',
      overview: 'PlanOut Back Office is the organizer’s workspace for running events from start to finish. Organizers can create events, set up tickets, publish event pages, track sales and orders, manage reservations and check-ins, and request payouts, all in one place.',
      problem: 'Running an event involves many moving parts, from setting up tickets and collecting registrations to tracking sales and getting paid. Organizers needed a tool that could handle all of this while staying clear and easy to navigate, so they could spend less time figuring out the system and more time running their events.',
      solution: 'The Back Office breaks big tasks into clear, guided steps and brings related tools together. Event creation offers an AI-assisted path, ticket setup starts from ready-made templates, and publishing follows a step-by-step review. Sales, orders, reservations, check-ins, and payouts each have focused screens that make information easy to scan and act on.',
      challenge: 'The main challenge was organizing a large amount of data and many management tasks without overwhelming organizers. Every screen had to show the right information at the right time, while making sure important actions like publishing an event or requesting a payout felt clear and deliberate.',
      usercentric: 'I designed around what organizers need to do next. When creating an event, they can choose how much help they want, either answering a few quick questions and letting PlanOut AI generate a draft, or building it step by step with full control. Empty states guide first-time users toward their next action, and helpful hints, like explaining how the percentage of tickets sold is calculated, make the data easier to understand.',
      accessibility: 'Every list includes search and filters, so organizers can quickly find a specific order, ticket code, reservation, or participant. Clear status labels, tooltips, and inline validation reduce errors, while splitting long processes into shorter steps lowers the chance of missing important details. The layout stays consistent across all modules, making it easier to learn and navigate.',
      outcomeHeading: 'CONCLUSION',
      outcome: 'The PlanOut Back Office brings a complex set of tools together in a guided, organized workspace. Clear steps, AI-assisted event creation, and reusable templates help organizers set up and manage events with more confidence. This project strengthened my skills in designing data-heavy interfaces that stay simple and easy to use.',
      usercentricVisual: 'planout-back-office/user-centric-event-creation.png',
      usercentricAlt: 'PlanOut event creation choice modal offering a manual setup path and AI-generated event draft',
    },
    'aspire-mfi': {
      title: 'Aspire MFI',
      type: 'WEB DESIGN',
      tagline: 'Empowering communities through responsible microfinance.',
      overview: 'Aspire MFI is the responsive website for Aspire Microfinance, Inc. It introduces the organization and its PAGLAUM programs, explains center-based lending and member benefits, and helps families and entrepreneurs across Negros Oriental and Siquijor find a branch or become a member.',
      problem: 'Many families and small livelihood owners have never borrowed through a formal lender before. Microfinance terms like center lending, orientations, and weekly meetings can feel unfamiliar, and without clear information, first-time borrowers may feel unsure about joining or whether they even qualify.',
      solution: 'The website explains microfinance in plain, reassuring language. Programs are laid out side by side with who they’re for, a step-by-step timeline shows how center lending works, and a simple guide covers who can join and what to prepare. A single inquiry form connects every visitor with the right branch team.',
      challenge: 'The main challenge was building trust with a community audience while explaining a lending model that works differently from regular loans. The site had to feel warm and approachable, not corporate, and work well on mobile, where most visitors would be browsing.',
      usercentric: 'I designed around the questions a first-time member would ask: What is this? Is it for me? What happens after I join? Key phrases are highlighted in green so visitors grasp the main message without reading long paragraphs. Community impact stories, practical financial education articles, and member benefits like burial and emergency assistance show that Aspire supports members beyond lending.',
      mfiPrograms: 'Four numbered cards compare PAGLAUM Puhonan Primer, PAGLAUM Regular Loan, Golden Years Line, and PAGLAUM Savings, from a first loan to support for senior citizens.',
      mfiCenterLending: 'A six-step timeline explains the journey, from joining a center and attending orientation to weekly meetings and repeat loan cycles.',
      mfiJoining: 'A reassuring guide covers who can join, basic requirements, and four simple steps, with expandable answers to common questions.',
      mfiEducation: 'Practical guides on budgeting, savings, and responsible borrowing can be filtered by topic without reloading the page.',
      accessibility: 'The site is fully responsive, with layouts that adapt for mobile, like the timeline wrapping into a two-column grid and program cards stacking into one column. Plain language and consistent labels make programs easy to compare, while highlighted key phrases help visitors scan quickly. A “Become a Member” button stays in the header on every page, so joining is always one tap away.',
      outcome: 'Aspire MFI gives families and entrepreneurs a clear, welcoming introduction to microfinance, from understanding programs to taking the first step toward membership. By explaining center lending in simple terms and highlighting support beyond loans, the site helps build trust with first-time borrowers. This project strengthened my skills in designing for community audiences and making unfamiliar processes feel approachable.'
    },
    'aspire-clc': {
      title: 'Aspire CLC',
      type: 'WEB DESIGN',
      tagline: 'Financing business growth across the Visayas.',
      overview: 'Aspire CLC is the responsive, multi-page website for Aspire Credit & Lending Corporation. It introduces the company, explains its loan products and application process, and helps MSMEs and growing businesses find the nearest branch or talk to a loan officer, all in one place.',
      problem: 'For many small business owners, borrowing can feel confusing and intimidating. They often don’t know which loan fits their needs, whether they qualify, what documents to bring, or how long the process takes. Without clear answers, many hesitate to apply or have to visit a branch just to ask basic questions.',
      solution: 'The website answers these questions upfront. Loan products are easy to compare, eligibility and required documents are listed before users apply, and a five-step timeline explains the whole lending journey. A branch locator, contact form, and simple loan inquiry form make it easy to take the next step, whether online or in person.',
      challenge: 'The main challenge was presenting financial information in a way that feels clear and approachable, not technical or overwhelming. The site also had to build trust with first-time borrowers while working equally well on desktop and mobile, since many business owners browse from their phones.',
      usercentric: 'I designed around the questions a business owner asks before borrowing. Industry pages with familiar client tags, like sari-sari stores, jeepney operators, and milk tea shops, help visitors quickly see that their type of business is covered. Success stories from local vendors and business owners add trust, and a “Talk to a Loan Officer” prompt supports users who aren’t sure which loan fits them.',
      clcLoanSolutions: 'Three core loans—Working Capital, Business Expansion, and MSME Business—appear as comparison cards. The Business Expansion Loan is highlighted as Most Requested to help visitors decide faster.',
      clcHowItWorks: 'A five-step timeline walks borrowers from inquiry to application, assessment, approval, and loan release. On mobile, it switches to a vertical layout for easier reading.',
      clcLoanProducts: 'Expandable panels show what each loan includes, who can apply, and the documents to prepare. A “Talk to a Loan Officer” prompt and a FAQ help users who are still deciding.',
      clcLoanApplication: 'A simple inquiry form lets users share their contact details, choose a loan product and preferred branch, and describe their financing needs. A clear note explains that submitting isn’t loan approval, and a loan officer follows up with next steps.',
      accessibility: 'The site is fully responsive, with layouts that adapt for mobile, like the timeline switching to a vertical view and a hamburger menu that locks scrolling while open. Expandable panels and FAQs keep long pages easy to scan, while forms flag missing required fields before submitting. A consistent header with an always-visible Apply button makes it easy to start an application from any page.',
      outcome: 'Aspire CLC gives small business owners a clear, trustworthy place to explore financing, from comparing loans to finding the nearest branch. By answering common questions upfront and making the next step easy, the site helps borrowers apply with confidence. This project strengthened my skills in designing responsive websites that make complex information simple and approachable.'
    }
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
    put('[data-case-tagline]', project.tagline || '');
    put('[data-case-overview]', project.overview);
    put('[data-case-problem]', project.problem || generic);
    put('[data-case-solution]', project.solution || generic);
    put('[data-case-challenge]', project.challenge || generic);
    put('[data-case-usercentric]', project.usercentric || generic);
    put('[data-case-accessibility]', project.accessibility || generic);
    put('[data-case-outcome]', project.outcome || generic);
    put('[data-case-outcome-heading]', project.outcomeHeading || 'THE OUTCOME');
    const isPlaza = params.get('project') === 'plaza' || !params.has('project');
    const isLoyalty = params.get('project') === 'loyalty-rewards';
    const isTourism = params.get('project') === 'negros-tourist-pass';
    const isPlanout = params.get('project') === 'planout-back-office';
    const isAspireClc = params.get('project') === 'aspire-clc';
    const isAspireMfi = params.get('project') === 'aspire-mfi';
    currentCase.classList.toggle('uiux-case--plaza', isPlaza);
    currentCase.classList.toggle('uiux-case--loyalty', isLoyalty);
    currentCase.classList.toggle('uiux-case--tourism', isTourism);
    currentCase.classList.toggle('uiux-case--planout', isPlanout);
    currentCase.classList.toggle('uiux-case--aspire-clc', isAspireClc);
    currentCase.classList.toggle('uiux-case--aspire-mfi', isAspireMfi);
    if (isAspireClc) {
      put('[data-case-clc-loan-solutions]', project.clcLoanSolutions);
      put('[data-case-clc-how-it-works]', project.clcHowItWorks);
      put('[data-case-clc-loan-products]', project.clcLoanProducts);
      put('[data-case-clc-loan-application]', project.clcLoanApplication);
    }
    if (isAspireMfi) {
      put('[data-case-mfi-programs]', project.mfiPrograms);
      put('[data-case-mfi-center-lending]', project.mfiCenterLending);
      put('[data-case-mfi-joining]', project.mfiJoining);
      put('[data-case-mfi-education]', project.mfiEducation);
    }
    if (project.usercentricVisual) {
      const visual = document.querySelector('.uiux-story-section--usercentric-placeholder .uiux-story-visual');
      if (visual) {
        const image = document.createElement('img');
        image.src = `../../assets/images/work/ui-ux/${project.usercentricVisual}`;
        image.alt = project.usercentricAlt || '';
        image.loading = 'lazy';
        visual.className = isTourism ? 'uiux-story-visual uiux-tourism-usercentric-visual' : isPlanout ? 'uiux-story-visual uiux-planout-usercentric-visual' : 'uiux-story-visual uiux-loyalty-usercentric-visual';
        visual.removeAttribute('role');
        visual.removeAttribute('aria-label');
        if (isTourism || isPlanout) {
          visual.replaceChildren(image);
        } else {
        const phone = document.createElement('div');
        phone.className = 'uiux-loyalty-phone uiux-loyalty-phone--single';
        phone.append(image);
        visual.replaceChildren(phone);
        }
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
