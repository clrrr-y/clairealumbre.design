const hasGSAP = typeof window.gsap !== 'undefined';
if (hasGSAP && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

// ---------------------------------------------------------------------------
// Nav: scrolled state, mobile toggle, scrollspy
// ---------------------------------------------------------------------------
(function () {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  if (!nav) return;

  const onScroll = () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 40);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  if (toggle) {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.addEventListener('click', () => {
      const opening = !nav.classList.contains('is-open');
      nav.classList.toggle('is-open', opening);
      toggle.setAttribute('aria-expanded', String(opening));

      if (hasGSAP) {
        const links = nav.querySelectorAll('.nav__links li, .nav__cta');
        if (opening) {
          const mobile = window.matchMedia('(max-width: 780px)').matches;
          gsap.fromTo(
            links,
            { x: mobile ? 16 : 0, y: mobile ? 0 : 16, opacity: 0 },
            { x: 0, y: 0, opacity: 1, duration: 0.32, ease: 'power2.out', stagger: 0.05, delay: 0.04 }
          );
        }
      }
    });
    nav.querySelectorAll('.nav__links a, .nav__cta').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape' || !nav.classList.contains('is-open')) return;
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    });
  }

  const sections = ['home', 'about', 'services', 'projects', 'contact']
    .map((id) => document.getElementById(id))
    .filter(Boolean);
  const navLinks = Array.from(nav.querySelectorAll('.nav__links a'));

  if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          navLinks.forEach((link) => {
            link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
          });
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((section) => spy.observe(section));
  }
})();

// ---------------------------------------------------------------------------
// Sticky project/category stack: scale + lift the active (topmost-pinned) card
// ---------------------------------------------------------------------------
(function () {
  const cards = Array.from(document.querySelectorAll('.stack-card'));
  if (!cards.length) return;

  if (hasGSAP && window.ScrollTrigger) {
    cards.forEach((card) => {
      gsap.set(card, { transformOrigin: '50% 100%' });

      ScrollTrigger.create({
        trigger: card,
        start: 'top 60%',
        end: 'bottom 40%',
        onToggle: (self) => {
          card.classList.toggle('is-active', self.isActive);
          gsap.to(card, {
            scale: self.isActive ? 1.015 : 1,
            duration: 0.5,
            ease: 'power2.out',
          });
        },
      });

      gsap.fromTo(
        card.querySelector('.stack-card__body'),
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
    return;
  }

  // Fallback when GSAP/ScrollTrigger isn't available.
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('is-active', entry.isIntersecting);
      });
    },
    { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
  );
  cards.forEach((card) => observer.observe(card));
})();

// ---------------------------------------------------------------------------
// Selected Work: coverflow carousel
// ---------------------------------------------------------------------------
(function () {
  const carousel = document.getElementById('carousel');
  if (!carousel) return;

  const track = document.getElementById('carouselTrack');
  const cards = Array.from(track.querySelectorAll('.carousel__card'));
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');
  const pill = document.getElementById('carouselPill');
  const count = cards.length;

  // Start centered on "UI/UX Design" (index 2), matching the Figma frame.
  let activeIndex = 2;

  // Figma offsets (px at the 322px base card width): center, ±1, ±2.
  const layout = [
    { x: 0, y: 0, scale: 1, z: 10 },
    { x: 258, y: 23.5, scale: 0.791, z: 6 },
    { x: 454, y: 42, scale: 0.611, z: 3 },
  ];

  const unit = () => (cards[0]?.offsetWidth || 322) / 322;

  function shortestOffset(index) {
    let diff = index - activeIndex;
    if (diff > count / 2) diff -= count;
    if (diff < -count / 2) diff += count;
    return diff;
  }

  function render(animate) {
    cards.forEach((card, i) => {
      const offset = shortestOffset(i);
      const abs = Math.abs(offset);
      const dir = Math.sign(offset);
      const isActive = offset === 0;

      card.classList.toggle('is-active', isActive);
      card.setAttribute('aria-current', isActive ? 'true' : 'false');

      const u = unit();
      let target;
      if (abs >= layout.length) {
        target = { x: dir * 720 * u, y: 0, scale: 0.4, opacity: 0, z: 0, pointerEvents: 'none' };
      } else {
        const step = layout[abs];
        target = { x: dir * step.x * u, y: step.y * u, scale: step.scale, opacity: 1, z: step.z, pointerEvents: 'auto' };
      }

      card.style.zIndex = String(target.z);
      card.style.pointerEvents = target.pointerEvents;

      if (hasGSAP && animate) {
        gsap.to(card, {
          x: target.x,
          y: target.y,
          scale: target.scale,
          opacity: target.opacity,
          duration: 0.55,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      } else if (hasGSAP) {
        gsap.set(card, { x: target.x, y: target.y, scale: target.scale, opacity: target.opacity });
      } else {
        card.style.transition = animate ? 'transform 0.5s ease, opacity 0.5s ease' : 'none';
        card.style.transform = `translate(-50%, -50%) translate(${target.x}px, ${target.y}px) scale(${target.scale})`;
        card.style.opacity = String(target.opacity);
      }
    });

    if (pill) {
      const activeCard = cards[activeIndex];
      const label = activeCard?.dataset.label || '';
      if (hasGSAP) {
        gsap.fromTo(pill, { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' });
      }
      pill.textContent = label;
    }
  }

  function goTo(index) {
    activeIndex = ((index % count) + count) % count;
    render(true);
  }

  if (hasGSAP) {
    gsap.set(cards, { xPercent: -50, yPercent: -50, left: '50%', top: '50%', position: 'absolute' });
  }

  prevBtn.addEventListener('click', () => goTo(activeIndex - 1));
  nextBtn.addEventListener('click', () => goTo(activeIndex + 1));

  cards.forEach((card, i) => {
    card.addEventListener('click', (event) => {
      if (i !== activeIndex) {
        event.preventDefault();
        goTo(i);
      }
      // If it IS the active card, let the link navigate to the work page.
    });
  });

  carousel.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') goTo(activeIndex - 1);
    if (event.key === 'ArrowRight') goTo(activeIndex + 1);
  });

  let touchStartX = null;
  carousel.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
  carousel.addEventListener('touchend', (e) => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) goTo(activeIndex + (dx < 0 ? 1 : -1));
    touchStartX = null;
  });

  render(false);
  window.addEventListener('resize', () => render(false));
})();

// ---------------------------------------------------------------------------
// About section: continuous background orbit
// ---------------------------------------------------------------------------
(function () {
  const orbit = document.querySelector('#about .about-orbit__images');
  if (!orbit) return;

  const thumbnails = Array.from(orbit.querySelectorAll('img'));
  const thumbnailTilts = [-14, -9, -4, 8, 14, 12, 7, -5, -10, -16, -12, 10];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const mobileLayout = window.matchMedia('(max-width: 767px)');

  const baseAngles = thumbnails.map((_, index) => (Math.PI * 2 * index) / thumbnails.length);
  const duration = 52000;
  let start = 0;
  let frame = 0;

  function animate(now) {
    if (reducedMotion.matches || mobileLayout.matches) {
      frame = 0;
      return;
    }
    const rotation = ((now - start) / duration) * Math.PI * 2;
    thumbnails.forEach((thumbnail, index) => {
      const angle = baseAngles[index] + rotation;
      // Keep the orbit outside the central copy column: wide horizontally,
      // with enough vertical separation to clear the headline and button.
      const x = 50 + Math.cos(angle) * 47;
      const y = 50 + Math.sin(angle) * 47;
      const tilt = thumbnailTilts[index] || 0;
      thumbnail.style.left = `${x.toFixed(2)}%`;
      thumbnail.style.top = `${y.toFixed(2)}%`;
      thumbnail.style.transform = `translate(-50%, -50%) rotate(${tilt}deg)`;
    });
    frame = window.requestAnimationFrame(animate);
  }

  function syncOrbit() {
    if (frame) window.cancelAnimationFrame(frame);
    frame = 0;

    if (mobileLayout.matches) {
      thumbnails.forEach((thumbnail) => {
        thumbnail.style.removeProperty('left');
        thumbnail.style.removeProperty('top');
        thumbnail.style.removeProperty('transform');
      });
      return;
    }

    if (reducedMotion.matches) return;
    start = performance.now();
    frame = window.requestAnimationFrame(animate);
  }

  mobileLayout.addEventListener('change', syncOrbit);
  reducedMotion.addEventListener('change', syncOrbit);
  syncOrbit();
})();

// ---------------------------------------------------------------------------
// "What I can do for you" accordion: click the header/chevron to expand/collapse
// ---------------------------------------------------------------------------
(function () {
  const items = Array.from(document.querySelectorAll('.service-row'));
  if (!items.length) return;

  function setPanelState(item, opening, { animate = true } = {}) {
    const panel = item.querySelector('.service-row__panel');
    const inner = item.querySelector('.service-row__panel-inner');
    const arrow = item.querySelector('.service-row__arrow');
    if (!panel || !inner) return;

    item.classList.toggle('is-open', opening);
    item.querySelector('.service-row__header')?.setAttribute('aria-expanded', opening ? 'true' : 'false');

    if (!hasGSAP) return; // CSS height:auto fallback already handles this via .is-open

    if (!animate) {
      gsap.set(panel, { height: opening ? 'auto' : 0 });
      if (arrow) gsap.set(arrow, { rotate: opening ? 90 : 0 });
      return;
    }

    gsap.killTweensOf(panel);
    if (opening) {
      gsap.fromTo(
        panel,
        { height: 0 },
        { height: inner.offsetHeight, duration: 0.45, ease: 'power2.inOut', onComplete: () => gsap.set(panel, { height: 'auto' }) }
      );
      gsap.fromTo(
        inner.querySelectorAll('li'),
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out', stagger: 0.05, delay: 0.1 }
      );
    } else {
      gsap.to(panel, { height: 0, duration: 0.4, ease: 'power2.inOut' });
    }

    if (arrow) {
      gsap.to(arrow, { rotate: opening ? 90 : 0, duration: 0.4, ease: 'power2.inOut' });
    }
  }

  // Remove the CSS-only height fallback transition when GSAP is driving height
  // directly, so the two animation systems don't fight each other.
  if (hasGSAP) {
    items.forEach((item) => item.querySelector('.service-row__panel')?.style.setProperty('transition', 'none'));
  }

  items.forEach((item) => {
    const header = item.querySelector('.service-row__header');
    if (!header) return;

    // Sync initial state (the first item ships open in the HTML).
    setPanelState(item, item.classList.contains('is-open'), { animate: false });

    header.addEventListener('click', () => {
      const wasOpen = item.classList.contains('is-open');
      items.forEach((other) => {
        if (other !== item) setPanelState(other, false);
      });
      setPanelState(item, !wasOpen);
      if (hasGSAP && window.ScrollTrigger) {
        ScrollTrigger.refresh();
      }
    });
  });
})();

// ---------------------------------------------------------------------------
// General scroll reveal for cards and gallery grids (progressive enhancement)
// ---------------------------------------------------------------------------
(function () {
  if (!hasGSAP || !window.ScrollTrigger) return;

  const cardSelectors = '.timeline, .entry-card, .skills-card, .langs-card, .case-hero__content, .case-info, .case-body, .work-footer';
  gsap.utils.toArray(cardSelectors).forEach((el) => {
    gsap.fromTo(
      el,
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none reverse' },
      }
    );
  });

  gsap.utils.toArray('.work-group__grid').forEach((grid) => {
    const items = grid.querySelectorAll('.work-item');
    if (!items.length) return;
    gsap.fromTo(
      items,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.05,
        scrollTrigger: { trigger: grid, start: 'top 88%', toggleActions: 'play none none reverse' },
      }
    );
  });
})();

// ---------------------------------------------------------------------------
// About page: Cohesion-style tech stack cards
// ---------------------------------------------------------------------------
(function () {
  const tools = Array.from(document.querySelectorAll('.about-page__tool'));
  const techStack = document.querySelector('.about-page__tech-stack-frame');
  const tooltip = document.getElementById('techStackFlipTooltip');
  if (!tools.length) return;

  if (techStack && tooltip) {
    const moveTooltip = (event) => {
      if (event.pointerType === 'touch') return;
      const bounds = techStack.getBoundingClientRect();
      const x = Math.min(Math.max(event.clientX - bounds.left, 8), bounds.width - tooltip.offsetWidth - 8);
      const y = Math.min(Math.max(event.clientY - bounds.top, 8), bounds.height - tooltip.offsetHeight - 8);
      tooltip.style.left = `${x}px`;
      tooltip.style.top = `${y}px`;
    };

    const hideTooltip = () => {
      tooltip.classList.remove('is-visible');
      tooltip.setAttribute('aria-hidden', 'true');
    };

    tools.forEach((tool) => {
      tool.addEventListener('pointerenter', (event) => {
        if (event.pointerType !== 'touch') {
          moveTooltip(event);
          tooltip.classList.add('is-visible');
          tooltip.setAttribute('aria-hidden', 'false');
        }
      });
      tool.addEventListener('pointermove', (event) => {
        if (event.pointerType === 'touch') return;
        moveTooltip(event);
        tooltip.classList.add('is-visible');
        tooltip.setAttribute('aria-hidden', 'false');
      });
      tool.addEventListener('pointerleave', hideTooltip);
    });
  }

  tools.forEach((tool) => {
    const front = tool.querySelector('.about-page__tool-face--front');
    const back = tool.querySelector('.about-page__tool-face--back');

    tool.addEventListener('click', () => {
      const flipped = tool.classList.toggle('is-flipped');
      tool.setAttribute('aria-pressed', String(flipped));
      if (front) front.setAttribute('aria-hidden', String(flipped));
      if (back) back.setAttribute('aria-hidden', String(!flipped));
    });
  });
})();

// ---------------------------------------------------------------------------
// Featured Projects: scroll-linked folder stacking and restrained image parallax
// ---------------------------------------------------------------------------
(function () {
  const stack = document.querySelector('.project-stack');
  const cards = Array.from(document.querySelectorAll('[data-project-card]'));
  if (!stack || !cards.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduceMotion.matches) return;

  let frame = 0;
  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

  const updateStack = () => {
    frame = 0;
    if (reduceMotion.matches) return;

    const stackTop = stack.getBoundingClientRect().top;
    const stackStyles = getComputedStyle(stack);
    const rowGap = parseFloat(stackStyles.rowGap) || parseFloat(stackStyles.gap) || 0;
    let flowOffset = 0;
    const progress = cards.map((card) => {
      const stickyTop = parseFloat(getComputedStyle(card).top) || 0;
      // Use the cards' normal-flow heights, not offsetTop: sticky positioning
      // can change offsetTop as scrolling advances and break later handoffs.
      const naturalTop = stackTop + flowOffset;
      flowOffset += card.offsetHeight + rowGap;
      const approachDistance = Math.min(180, Math.max(120, window.innerHeight * 0.28));
      const start = stickyTop + approachDistance;
      return clamp((start - naturalTop) / approachDistance, 0, 1);
    });

    cards.forEach((card, index) => {
      const enter = progress[index];
      const cover = progress[index + 1] || 0;
      card.style.setProperty('--folder-y', `${((1 - enter) * 60).toFixed(1)}px`);
      // Repeat the same scale handoff for every folder. Completed folders stay
      // tucked beneath the next full-size folder instead of snapping back.
      const handoffScale = 1 - cover * 0.03;
      card.style.setProperty('--cover-scale', handoffScale.toFixed(3));
      card.style.setProperty('--image-parallax', `${((enter - 0.5) * 14).toFixed(1)}px`);
    });
  };

  const scheduleUpdate = () => {
    if (frame) return;
    frame = window.requestAnimationFrame(updateStack);
  };

  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate, { passive: true });
  reduceMotion.addEventListener?.('change', scheduleUpdate);
  updateStack();
})();

// ---------------------------------------------------------------------------
// Contact CTA: in-view reveal and simple mailto form
// ---------------------------------------------------------------------------
(function () {
  const section = document.querySelector('.contact-cta');
  const panel = section?.querySelector('[data-contact-panel]');
  if (!section || !panel) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!reduceMotion.matches && 'IntersectionObserver' in window) {
    section.classList.add('contact-cta--motion-ready');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        panel.classList.add('is-visible');
        observer.unobserve(panel);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    observer.observe(panel);
  } else {
    panel.classList.add('is-visible');
  }

  const form = section.querySelector('[data-inquiry-form]');
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const values = new FormData(form);
    const name = String(values.get('name') || '').trim();
    const email = String(values.get('email') || '').trim();
    const service = String(values.get('service') || '').trim();
    const message = String(values.get('message') || '').trim();
    const subject = `Portfolio inquiry — ${name}`;
    const body = [`Name: ${name}`, `Email: ${email}`, `Service needed: ${service}`, '', 'What can I help you with?', message].join('\n');
    window.location.href = `mailto:clairealumbre@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
})();
