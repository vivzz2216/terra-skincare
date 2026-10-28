/**
 * TERRA SKINCARE — INTERACTIVE & MOTION LOGIC
 * Powered by Motion.dev (MotionOne)
 */

document.addEventListener('DOMContentLoaded', () => {
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const Motion = window.Motion;

  /* ==========================================================================
     1. SCROLL PROGRESS INDICATOR (Motion.scroll)
     ========================================================================== */
  const progressBar = document.getElementById('scrollProgress');
  if (progressBar && Motion?.scroll && !isReducedMotion) {
    Motion.scroll((progress) => {
      progressBar.style.transform = `scaleX(${progress})`;
    });
  }

  /* ==========================================================================
     2. HERO SCROLL PARALLAX (Motion.scroll & animate)
     ========================================================================== */
  const heroSection = document.getElementById('hero');
  const heroArt = document.getElementById('heroArt');
  const heroSticker = document.getElementById('heroSticker');
  const sunRays = document.getElementById('sunRays');

  if (heroSection && Motion?.scroll && !isReducedMotion) {
    if (heroArt) {
      Motion.scroll(
        Motion.animate(heroArt, { y: [0, 45], scale: [1, 1.05] }),
        { target: heroSection, offset: ["start start", "end start"] }
      );
    }
    if (heroSticker) {
      Motion.scroll(
        Motion.animate(heroSticker, { y: [0, 50], rotate: [-10, 18] }),
        { target: heroSection, offset: ["start start", "end start"] }
      );
    }
    if (sunRays) {
      Motion.scroll(
        Motion.animate(sunRays, { rotate: [0, 60], opacity: [1, 0.3] }),
        { target: heroSection, offset: ["start start", "end start"] }
      );
    }
  }

  /* ==========================================================================
     3. VIEWPORT ENTRANCE ANIMATIONS (Motion.inView)
     ========================================================================== */
  if (Motion?.inView && !isReducedMotion) {
    // Quick Shop Cards
    Motion.inView('.quick-card', (element) => {
      Motion.animate(
        element.target,
        { opacity: [0, 1], y: [20, 0] },
        { duration: 0.5, easing: [0.16, 1, 0.3, 1] }
      );
    });

    // Product Cards (Essentials)
    Motion.inView('.product-card', (element) => {
      Motion.animate(
        element.target,
        { opacity: [0, 1], y: [30, 0] },
        { duration: 0.6, easing: [0.16, 1, 0.3, 1] }
      );
    });

    // Ingredient Cards Staggered
    Motion.inView('.ingredients-grid', (element) => {
      const cards = element.target.querySelectorAll('.ingredient-card');
      cards.forEach((card, i) => {
        Motion.animate(
          card,
          { opacity: [0, 1], y: [25, 0] },
          { duration: 0.5, delay: i * 0.1, easing: [0.16, 1, 0.3, 1] }
        );
      });
    });

    // Routine Step Cards
    Motion.inView('.routine-step-card', (element) => {
      Motion.animate(
        element.target,
        { opacity: [0, 1], y: [25, 0] },
        { duration: 0.55, easing: [0.16, 1, 0.3, 1] }
      );
    });

    // Review Cards
    Motion.inView('.review-card', (element) => {
      Motion.animate(
        element.target,
        { opacity: [0, 1], y: [25, 0] },
        { duration: 0.55, easing: [0.16, 1, 0.3, 1] }
      );
    });
  }

  /* ==========================================================================
     4. INTERACTIVE ROUTINE EXPLORER (AM / PM Switcher)
     ========================================================================== */
  const tabAm = document.getElementById('tabAm');
  const tabPm = document.getElementById('tabPm');
  const step1Title = document.getElementById('step1Title');
  const step1Desc = document.getElementById('step1Desc');
  const step2Title = document.getElementById('step2Title');
  const step2Desc = document.getElementById('step2Desc');
  const step3Title = document.getElementById('step3Title');
  const step3Desc = document.getElementById('step3Desc');

  const routines = {
    am: {
      step1: {
        title: "Wake up & gently cleanse.",
        desc: "Massage a gentle pump of Daily Gel Cleanser with lukewarm water. Dissolves overnight oils while maintaining skin's acid mantle."
      },
      step2: {
        title: "A splash of balance.",
        desc: "Press 4-5 drops of Balancing Essence into damp skin. Replenishes electrolytes and primes your face for daytime absorption."
      },
      step3: {
        title: "Shield with radiance.",
        desc: "Warm 2-3 drops of Glow Drops over high points. Antioxidant vitamins fend off pollution fatigue; follow with your favorite SPF."
      }
    },
    pm: {
      step1: {
        title: "Melt the day away.",
        desc: "Double cleanse if wearing makeup. Gently breaks down sunscreen, city debris, and daily stress without stinging the eye area."
      },
      step2: {
        title: "Deep cellular replenish.",
        desc: "Pat two thin layers of Balancing Essence. Centella and Niacinamide soothe irritation and initiate overnight skin renewal."
      },
      step3: {
        title: "Lock in overnight bounce.",
        desc: "Press 3-4 drops of Glow Drops onto face and neck. Squalane and plant ceramides deeply condition while you sleep."
      }
    }
  };

  function setRoutine(mode) {
    if (mode === 'am') {
      tabAm?.classList.add('active');
      tabAm?.setAttribute('aria-selected', 'true');
      tabPm?.classList.remove('active');
      tabPm?.setAttribute('aria-selected', 'false');
    } else {
      tabPm?.classList.add('active');
      tabPm?.setAttribute('aria-selected', 'true');
      tabAm?.classList.remove('active');
      tabAm?.setAttribute('aria-selected', 'false');
    }

    const data = routines[mode];
    if (step1Title) step1Title.textContent = data.step1.title;
    if (step1Desc) step1Desc.textContent = data.step1.desc;
    if (step2Title) step2Title.textContent = data.step2.title;
    if (step2Desc) step2Desc.textContent = data.step2.desc;
    if (step3Title) step3Title.textContent = data.step3.title;
    if (step3Desc) step3Desc.textContent = data.step3.desc;

    // Trigger subtle bounce feedback on stage
    const cards = document.querySelectorAll('.routine-step-card');
    if (Motion?.animate && !isReducedMotion) {
      cards.forEach((card, idx) => {
        Motion.animate(card, { y: [8, 0], opacity: [0.6, 1] }, { duration: 0.35, delay: idx * 0.05 });
      });
    }
  }

  tabAm?.addEventListener('click', () => setRoutine('am'));
  tabPm?.addEventListener('click', () => setRoutine('pm'));

  /* ==========================================================================
     5. FAQ ACCORDION (Interactive Collapsible)
     ========================================================================== */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const trigger = item.querySelector('.faq-trigger');
    trigger?.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      // Close all other open items
      faqItems.forEach((other) => {
        if (other !== item) {
          other.classList.remove('active');
          other.querySelector('.faq-trigger')?.setAttribute('aria-expanded', 'false');
        }
      });

      if (!isOpen) {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
      } else {
        item.classList.remove('active');
        trigger.setAttribute('aria-expanded', 'false');
      }
    });
  });

  /* ==========================================================================
     6. SHOPPING BAG DRAWER & QUICK-ADD TOAST
     ========================================================================== */
  const cartTrigger = document.getElementById('cartTrigger');
  const cartDrawerOverlay = document.getElementById('cartOverlay');
  const cartCloseBtn = document.getElementById('cartCloseBtn');
  const cartCountEl = document.getElementById('cartCount');
  const drawerCountEl = document.getElementById('drawerCount');
  const drawerSubtotal = document.getElementById('drawerSubtotal');
  const cartItemsList = document.getElementById('cartItemsList');
  const toastNotice = document.getElementById('toastNotice');

  // Cart state
  const cart = {
    cleanser: { name: "Daily Gel Cleanser", price: 20, count: 1, thumb: "assets/product-cleanser.webp", volume: "150ml" },
    essence: { name: "Balancing Essence", price: 28, count: 1, thumb: "assets/product-essence.webp", volume: "120ml" },
    drops: { name: "Glow Drops", price: 32, count: 1, thumb: "assets/product-drops.webp", volume: "30ml" }
  };

  function updateCartUI() {
    let totalItems = 0;
    let totalPrice = 0;
    let html = '';

    Object.keys(cart).forEach((key) => {
      const item = cart[key];
      if (item.count > 0) {
        totalItems += item.count;
        totalPrice += item.price * item.count;
        html += `
          <div class="cart-item" data-id="${key}">
            <img src="${item.thumb}" alt="${item.name}" class="cart-thumb-img">
            <div class="cart-item-info">
              <h4>${item.name} (${item.count})</h4>
              <span>${item.volume} · $${item.price * item.count}</span>
            </div>
            <button class="remove-btn" data-id="${key}" aria-label="Remove ${item.name}">✕</button>
          </div>
        `;
      }
    });

    if (totalItems === 0) {
      html = '<p style="text-align:center; padding: 40px 0; color:#8c7094;">Your feel-good bag is empty.</p>';
    }

    if (cartItemsList) cartItemsList.innerHTML = html;
    if (cartCountEl) cartCountEl.textContent = totalItems;
    if (drawerCountEl) drawerCountEl.textContent = totalItems;
    if (drawerSubtotal) drawerSubtotal.textContent = `$${totalPrice.toFixed(2)}`;

    // Reattach remove listeners
    document.querySelectorAll('.remove-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        if (id && cart[id]) {
          cart[id].count = 0;
          updateCartUI();
          showToast(`Removed from your bag.`);
        }
      });
    });
  }

  function showToast(msg) {
    if (!toastNotice) return;
    toastNotice.textContent = msg;
    toastNotice.classList.add('show');
    if (Motion?.animate && !isReducedMotion) {
      Motion.animate(toastNotice, { scale: [0.9, 1] }, { duration: 0.25 });
    }
    setTimeout(() => {
      toastNotice.classList.remove('show');
    }, 2800);
  }

  function openCart() {
    cartDrawerOverlay?.classList.add('open');
    cartDrawerOverlay?.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    cartDrawerOverlay?.classList.remove('open');
    cartDrawerOverlay?.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  cartTrigger?.addEventListener('click', openCart);
  cartCloseBtn?.addEventListener('click', closeCart);
  cartDrawerOverlay?.addEventListener('click', (e) => {
    if (e.target === cartDrawerOverlay) closeCart();
  });

  // Quick add buttons
  document.querySelectorAll('.add-cart-btn, .quick-add').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.getAttribute('data-id') || 'cleanser';
      const name = e.currentTarget.getAttribute('data-name') || 'Item';
      if (cart[id]) {
        cart[id].count += 1;
      }
      updateCartUI();
      showToast(`✨ Added ${name} to your bag!`);

      // Micro bounce animation on cart icon
      if (cartTrigger && Motion?.animate && !isReducedMotion) {
        Motion.animate(cartTrigger, { scale: [1, 1.25, 1] }, { duration: 0.35 });
      }
    });
  });

  // Bundle button
  const bundleAddBtn = document.getElementById('bundleAddBtn');
  bundleAddBtn?.addEventListener('click', () => {
    cart.cleanser.count += 1;
    cart.essence.count += 1;
    cart.drops.count += 1;
    updateCartUI();
    showToast(`✨ Added The Complete Trio (Save 15%)!`);
    openCart();
  });

  // Checkout button simulation
  const checkoutBtn = document.getElementById('checkoutBtn');
  checkoutBtn?.addEventListener('click', () => {
    showToast('Redirecting to secure feel-good checkout...');
  });

  // Initial render
  updateCartUI();

  /* ==========================================================================
     7. NEWSLETTER CLUB FORM
     ========================================================================== */
  const newsletterForm = document.getElementById('newsletterForm');
  const emailInput = document.getElementById('emailInput');
  const formFeedback = document.getElementById('formFeedback');

  newsletterForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = emailInput?.value.trim();
    if (!val || !val.includes('@')) {
      if (formFeedback) {
        formFeedback.textContent = 'Please enter a valid email address.';
        formFeedback.style.color = '#ff3366';
      }
      return;
    }

    if (formFeedback) {
      formFeedback.textContent = '✨ Welcome to the circle! Check your inbox for your 15% code.';
      formFeedback.style.color = 'var(--plum)';
    }
    if (emailInput) emailInput.value = '';
    showToast('✨ 15% Welcome coupon applied!');
  });
});
