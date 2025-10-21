// === MAIN JAVASCRIPT FILE ===
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Initialize the map
    const map = L.map('map').setView([42.35779835492816, 13.364578905602608], 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);
    const marker = L.marker([42.35779835492816, 13.364578905602608]).addTo(map);
    marker.bindPopup('Clair Clinique S.r.l.').openPopup();

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // === VIDEO + CAROUSEL INTEGRATION ===
    let currentSlide = 0;
    const totalSlides = 3;
    const carousel = document.querySelector('.carousel');
    const dots = document.querySelectorAll('.dot');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');
    let autoAdvanceInterval;
    let isUserInteracting = false;

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentSlide * 100 / 3}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    function startAutoAdvance() {
        clearInterval(autoAdvanceInterval);
        autoAdvanceInterval = setInterval(() => {
            if (!isUserInteracting) {
                const allVideos = document.querySelectorAll('.media-card video');
                const isAnyPlaying = Array.from(allVideos).some(vid => !vid.paused);
                if (!isAnyPlaying) {
                    currentSlide = (currentSlide + 1) % totalSlides;
                    updateCarousel();
                }
            }
        }, 5000);
    }

    nextBtn.addEventListener('click', () => {
        isUserInteracting = true;
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
        setTimeout(() => isUserInteracting = false, 1000);
    });

    prevBtn.addEventListener('click', () => {
        isUserInteracting = true;
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
        setTimeout(() => isUserInteracting = false, 1000);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            isUserInteracting = true;
            currentSlide = index;
            updateCarousel();
            setTimeout(() => isUserInteracting = false, 1000);
        });
    });

    // Video play handling
    document.querySelectorAll('.media-play-overlay').forEach(overlay => {
        const video = overlay.closest('.media-card').querySelector('video');
        if (!video) return;

        overlay.addEventListener('click', () => {
            isUserInteracting = true;
            video.play().then(() => {
                overlay.style.opacity = '0';
                overlay.style.pointerEvents = 'none';
            }).catch(e => console.warn("Video play failed:", e));
        });

        video.addEventListener('ended', () => {
            const playOverlay = overlay;
            playOverlay.style.opacity = '1';
            playOverlay.style.pointerEvents = 'auto';
            isUserInteracting = false;
        });
    });

    // Start auto-advance
    startAutoAdvance();

    // Scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.alternating-item, .timeline-item, .team-member').forEach(el => {
        observer.observe(el);
    });
