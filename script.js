/* ═══════════════════════════════════════════════════════════
   SUSMIT ROY — PORTFOLIO JS
   Scroll animations, nav behavior, mobile menu
   ═══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

    // ─── NAV SCROLL EFFECT ───
    const nav = document.getElementById('main-nav');
    const navLinks = document.querySelectorAll('.nav__link');
    const sections = document.querySelectorAll('section[id]');

    function handleNavScroll() {
        if (window.scrollY > 40) {
            nav.classList.add('nav--scrolled');
        } else {
            nav.classList.remove('nav--scrolled');
        }
    }

    // Active section highlighting
    function updateActiveNav() {
        const scrollPos = window.scrollY + 150;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', () => {
        handleNavScroll();
        updateActiveNav();
    }, { passive: true });

    handleNavScroll();

    // ─── MOBILE MENU ───
    const hamburger = document.getElementById('nav-hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-menu__link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // ─── SCROLL ANIMATIONS (INTERSECTION OBSERVER) ───
    const animatedElements = document.querySelectorAll('[data-animate]');

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -80px 0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => observer.observe(el));

    // ─── SMOOTH SCROLL FOR ANCHOR LINKS ───
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            e.preventDefault();
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ─── STAGGERED ANIMATION FOR GRID ITEMS ───
    const gridItems = document.querySelectorAll('.project-card, .skill-card, .cert-badge');
    gridItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.08}s`;
    });

    // ─── PARALLAX EFFECT ON HERO ───
    const heroPortrait = document.querySelector('.hero__portrait-frame');
    if (heroPortrait && window.innerWidth > 1024) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            if (scrolled < 800) {
                heroPortrait.style.transform = `translateY(${scrolled * 0.08}px)`;
            }
        }, { passive: true });
    }

    // ─── COUNTER ANIMATION FOR STATS ───
    const stats = document.querySelectorAll('.hero__stat-value');
    let statsCounted = false;

    function animateCounters() {
        if (statsCounted) return;
        statsCounted = true;

        stats.forEach(stat => {
            const text = stat.textContent;
            const match = text.match(/(\d+)/);
            if (!match) return;

            const target = parseInt(match[1]);
            const percentSpan = stat.querySelector('.hero__stat-percent');
            let current = 0;
            const duration = 1500;
            const start = performance.now();

            function update(now) {
                const elapsed = now - start;
                const progress = Math.min(elapsed / duration, 1);
                // Ease out cubic
                const eased = 1 - Math.pow(1 - progress, 3);
                current = Math.floor(eased * target);

                stat.textContent = current;
                if (percentSpan) {
                    stat.appendChild(percentSpan);
                }

                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    stat.textContent = target;
                    if (percentSpan) {
                        stat.appendChild(percentSpan);
                    }
                }
            }

            requestAnimationFrame(update);
        });
    }

    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                heroObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const heroStats = document.querySelector('.hero__stats');
    if (heroStats) heroObserver.observe(heroStats);

    // ─── TRIGGER INITIAL HERO ANIMATIONS ───
    setTimeout(() => {
        document.querySelectorAll('.hero [data-animate]').forEach(el => {
            el.classList.add('animate-in');
        });
    }, 200);

});
