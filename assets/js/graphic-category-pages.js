(() => {
  document.querySelectorAll('[data-hero-images]').forEach((hero) => {
    const images = hero.dataset.heroImages.split('|').map((src) => src.trim()).filter(Boolean);
    const layers = Array.from(hero.querySelectorAll('[data-hero-slide]'));
    if (images.length < 2 || layers.length < 2) return;

    let current = 0;
    let activeLayer = 0;
    layers[0].style.backgroundImage = `url('${images[0]}')`;

    window.setInterval(() => {
      current = (current + 1) % images.length;
      const nextLayer = activeLayer === 0 ? 1 : 0;
      layers[nextLayer].style.backgroundImage = `url('${images[current]}')`;
      layers[nextLayer].classList.add('is-active');
      layers[activeLayer].classList.remove('is-active');
      activeLayer = nextLayer;
    }, 3000);
  });
})();
