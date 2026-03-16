// ============================================
// ENHANCED PORTFOLIO WITH ADVANCED ANIMATIONS
// STRANGER THINGS EPIC EXPERIENCE
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const isTouchPrimaryDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    const tapResetDelayMs = 5000;
    const tapFeedbackTimers = new WeakMap();

    if (isTouchPrimaryDevice) {
        document.body.classList.add('touch-device');
    }

    const tapFeedbackSelector = '.skill-item, .project-card, .passion-card, .stat, .contact-item, .btn, .social-link';
    if (isTouchPrimaryDevice) {
        document.addEventListener('touchstart', function(e) {
            if (e.touches && e.touches.length > 1) return;
            const target = e.target.closest(tapFeedbackSelector);
            if (!target) return;

            const existingTimer = tapFeedbackTimers.get(target);
            if (existingTimer) {
                clearTimeout(existingTimer);
            }

            target.classList.add('tap-active');
            const timerId = setTimeout(() => {
                target.classList.remove('tap-active');
                tapFeedbackTimers.delete(target);
            }, tapResetDelayMs);
            tapFeedbackTimers.set(target, timerId);
        }, { passive: true });
    }

            // ============================================
            // LOADER SCREEN - STRANGER THINGS STYLE
            // ============================================
            const loader = document.getElementById('loader-screen');
            if (loader) {
                    // Subtle flicker: reduced frequency and intensity for a calmer loader
                    let flickerInterval = setInterval(() => {
                        // slightly stronger but still subtle opacity variance
                        loader.style.opacity = 0.94 + Math.random() * 0.06; // 0.94 - 1.0
                        const text = loader.querySelector('.loader-flicker-text');
                        if (text) {
                            const flicker = Math.random();
                            if (flicker > 0.78) {
                                text.style.textShadow = '0 0 32px rgba(211,47,47,0.95)';
                            } else if (flicker > 0.48) {
                                text.style.textShadow = '0 0 22px rgba(211,47,47,0.82)';
                            } else {
                                text.style.textShadow = '0 0 16px rgba(211,47,47,0.65)';
                            }
                        }
                    }, 140);

                    // Shorter flicker lifetime so loader calms sooner
                    setTimeout(() => {
                        clearInterval(flickerInterval);
                        // smooth fade out
                        loader.style.transition = 'opacity 0.8s ease';
                        loader.style.opacity = 0;
                        setTimeout(() => {
                            loader.style.display = 'none';
                        }, 900);
                    }, 1800);
            }
        // ============================================
        // ABOUT SLIDESHOW
        // ============================================
        const slideElements = document.querySelectorAll('.about-slide');
        let slideIndex = 0;

        // Preload slideshow images to avoid frame flashes
        slideElements.forEach(img => {
            const p = new Image();
            p.src = img.src;
        });

        // transitionDuration should match CSS transition (ms)
        const transitionDuration = 820;
        function showSlide(idx) {
            const previous = document.querySelector('.about-slide.active');

            // bring the new slide on top and start fading it in
            const next = slideElements[idx];
            if (!next) return;

            // ensure new slide is prepared
            next.classList.add('active');
            next.style.zIndex = 3;
            next.style.pointerEvents = 'auto';

            // after the fade completes, remove 'active' from other slides
            setTimeout(() => {
                slideElements.forEach((img, i) => {
                    if (img !== next) {
                        img.classList.remove('active');
                        img.style.zIndex = 1;
                        img.style.pointerEvents = 'none';
                    }
                });
                // ensure the next slide sits at normal active z-index
                next.style.zIndex = 2;
            }, transitionDuration);
        }

        // show initial slide once DOM is ready
        showSlide(slideIndex);

        if (slideElements.length) {
            setInterval(() => {
                slideIndex = (slideIndex + 1) % slideElements.length;
                showSlide(slideIndex);
            }, 4500);
        }
    // ============================================
    // CURSOR TRAIL EFFECT (Upside Down particles)
    // ============================================
    let mouseX = 0, mouseY = 0;
    let cursorTrails = [];

    function shouldDisableCursorTrail() {
        return window.matchMedia('(max-width: 900px), (pointer: coarse), (hover: none)').matches;
    }
    
    document.addEventListener('mousemove', function(e) {
        if (shouldDisableCursorTrail()) return;
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Only create trails in Upside Down theme
        if (!document.body.classList.contains('real-world')) {
            createCursorTrail(mouseX, mouseY);
        }
    });
    
    function createCursorTrail(x, y) {
        if (shouldDisableCursorTrail()) return;
        if (cursorTrails.length > 8) return; // Limit trails
        
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: 8px;
            height: 8px;
            background: radial-gradient(circle, rgba(211, 47, 47, 0.8), transparent);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9998;
            animation: trailFade 0.8s ease-out forwards;
        `;
        document.body.appendChild(trail);
        cursorTrails.push(trail);
        
        setTimeout(() => {
            trail.remove();
            cursorTrails = cursorTrails.filter(t => t !== trail);
        }, 800);
    }
    
    // trailFade keyframe is defined in styles.css

    window.addEventListener('resize', function() {
        if (!shouldDisableCursorTrail()) return;
        cursorTrails.forEach(trail => trail.remove());
        cursorTrails = [];
    });

    // ============================================
    // THEME SWITCHING SYSTEM
    // ============================================
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.querySelector('.theme-icon');
    const htmlElement = document.documentElement;
    
    // Load saved theme preference or default to 'upside-down'
    const savedTheme = localStorage.getItem('portfolio-theme') || 'upside-down';
    
    // Apply saved theme on load
    if (savedTheme === 'real-world') {
        document.body.classList.add('real-world');
        themeIcon.textContent = '🌍';
    } else {
        document.body.classList.remove('real-world');
        themeIcon.textContent = '🌀';
    }
    
    // Theme toggle click handler with transition effect
    themeToggle.addEventListener('click', function() {
        const isRealWorld = document.body.classList.contains('real-world');
        
        // Create portal transition effect
        createPortalTransition();
        
        setTimeout(() => {
            if (isRealWorld) {
                // Switch to Upside Down
                document.body.classList.remove('real-world');
                themeIcon.textContent = '🌀';
                localStorage.setItem('portfolio-theme', 'upside-down');
            } else {
                // Switch to Real World
                document.body.classList.add('real-world');
                themeIcon.textContent = '🌍';
                localStorage.setItem('portfolio-theme', 'real-world');
            }
        }, 300);
    });

    // ============================================
    // BACKGROUND MUSIC CONTROL
    // ============================================
    const bgMusic = document.getElementById('bg-music');
    const musicToggle = document.getElementById('music-toggle');

    // initialize mute state from localStorage
    const savedMute = localStorage.getItem('music-muted') === 'true';
    if (bgMusic) {
        bgMusic.muted = savedMute || true; // start muted until user interacts
    }

    function updateMusicIcon() {
        if (!musicToggle || !bgMusic) return;
        musicToggle.innerHTML = bgMusic.muted ? '<i class="fas fa-volume-mute"></i>' : '<i class="fas fa-volume-up"></i>';
    }

    // attempt to play, handle autoplay restrictions
    function tryPlayMusic() {
        if (!bgMusic) return;
        bgMusic.play().catch(() => {
            // autoplay was prevented; stay paused until user toggles
            console.warn('Autoplay prevented, music will start on user interaction.');
        });
    }

    if (musicToggle) {
        updateMusicIcon();
        musicToggle.addEventListener('click', () => {
            if (!bgMusic) return;
            // toggle mute state
            bgMusic.muted = !bgMusic.muted;
            updateMusicIcon();
            localStorage.setItem('music-muted', bgMusic.muted);

            // if unmuted and paused, try to play
            if (!bgMusic.muted && bgMusic.paused) {
                tryPlayMusic();
            }
        });
    }

    // start playback attempt (DOM is already loaded at this point)
    tryPlayMusic();

    
    function createPortalTransition() {
        const portal = document.createElement('div');
        portal.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: radial-gradient(circle, var(--primary-color), transparent);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            z-index: 10000;
            pointer-events: none;
            animation: portalExpand 0.6s ease-out forwards;
        `;
        document.body.appendChild(portal);
        
        setTimeout(() => portal.remove(), 600);
    }
    
    // portalExpand keyframe is defined in styles.css

    // ============================================
    // MOBILE MENU TOGGLE
    // ============================================
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    function setMenuState(isOpen) {
        if (!mobileMenu || !navMenu) return;
        navMenu.classList.toggle('active', isOpen);
        mobileMenu.classList.toggle('active', isOpen);
        mobileMenu.setAttribute('aria-expanded', String(isOpen));
        document.body.classList.toggle('menu-open', isOpen);
    }

    function closeMobileMenu() {
        setMenuState(false);
    }

    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', function() {
            const isExpanded = !navMenu.classList.contains('active');
            setMenuState(isExpanded);
        });
    }

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            closeMobileMenu();
        });
    });

    // Close on outside click for better mobile UX
    document.addEventListener('click', function(e) {
        if (!mobileMenu || !navMenu) return;
        if (!navMenu.classList.contains('active')) return;
        if (navMenu.contains(e.target) || mobileMenu.contains(e.target)) return;
        closeMobileMenu();
    });

    // Close on Escape key for accessibility
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMobileMenu();
        }
    });

    // Ensure menu is closed when returning to desktop widths.
    window.addEventListener('resize', function() {
        if (window.innerWidth > 900) {
            closeMobileMenu();
        }
    });

    // ============================================
    // NAVBAR SCROLL EFFECT WITH ENHANCED ANIMATION
    // ============================================
    const navbar = document.getElementById('navbar');
    let lastScrollY = 0;

    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;

        if (navbar) {
            navbar.classList.toggle('scrolled', currentScrollY > 80);

            // Hide navbar on downward scroll and reveal on upward scroll.
            if (currentScrollY > 140 && currentScrollY > lastScrollY) {
                navbar.classList.add('nav-hidden');
            } else {
                navbar.classList.remove('nav-hidden');
            }
        }
        lastScrollY = currentScrollY;
        
        // Parallax effect for particles
        const particles = document.querySelector('.floating-particles');
        if (particles) {
            particles.style.transform = `translateY(${window.scrollY * 0.3}px)`;
        }
    });

    // ============================================
    // LOGO TYPEWRITER - WELCOME TO THE UPSIDE DOWN
    // ============================================
    const logoTypewriter = document.querySelector('.logo-typewriter');
    const fullWelcomeText = 'WELCOME TO THE UPSIDE DOWN';
    let logoCharIndex = 0;
    let logoTypeTimer = null;

    function typeLogoEffect() {
        if (!logoTypewriter) return;

        if (logoCharIndex <= fullWelcomeText.length) {
            logoTypewriter.textContent = fullWelcomeText.substring(0, logoCharIndex);
            logoCharIndex++;
            logoTypeTimer = setTimeout(typeLogoEffect, 100);
        } else {
            // After complete, wait and restart with glitch effect
            logoTypeTimer = setTimeout(() => {
                logoTypewriter.style.animation = 'glitchText 0.3s ease';
                logoTypeTimer = setTimeout(() => {
                    logoTypewriter.style.animation = '';
                    logoCharIndex = 0;
                    logoTypeTimer = setTimeout(typeLogoEffect, 1000);
                }, 300);
            }, 5000);
        }
    }

    // Start logo typewriter immediately
    if (logoTypewriter) {
        logoTypeTimer = setTimeout(typeLogoEffect, 100);

        // Restart animation on resize to keep timing smooth.
        window.addEventListener('resize', () => {
            logoCharIndex = 0;
            logoTypewriter.textContent = '';
            if (logoTypeTimer) {
                clearTimeout(logoTypeTimer);
                logoTypeTimer = null;
            }
            logoTypeTimer = setTimeout(typeLogoEffect, 120);
        });
    }

    // ============================================
    // TYPING ANIMATION - ENHANCED
    // ============================================
    const typingText = document.querySelector('.typing-text');
    const words = ['Full Stack Developer', 'UI/UX Designer', 'Backend Engineer', 'Frontend Developer', 'Problem Solver'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        if (!typingText) return;
        
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            charIndex--;
            typingText.textContent = currentWord.substring(0, charIndex);
        } else {
            typingText.textContent = currentWord.substring(0, charIndex);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 30 : 80;

        if (!isDeleting && charIndex > currentWord.length) {
            typeSpeed = 1500;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 300;
        }

        setTimeout(typeEffect, typeSpeed);
    }

    // Start typing animation immediately
    if (typingText) {
        setTimeout(typeEffect, 200);
    }

    // ============================================
    // SMOOTH SCROLLING WITH OFFSET
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // WEB3FORMS DEBUG (Netlify/Vercel only)
    // Attach a debug submit handler on deployed previews to log server responses
    // This won't run on localhost/file://
    (function attachWeb3FormsDebug() {
        try {
            const host = location.hostname || '';
            if (!(host.includes('netlify') || host.includes('vercel') || host.endsWith('.app') || host.includes('your-custom-domain'))) {
                return; // only enable on deployed hosts (adjust condition as needed)
            }

            const form = document.getElementById('contact-form');
            if (!form) return;

            form.addEventListener('submit', async function (e) {
                e.preventDefault();
                const action = form.action || 'https://api.web3forms.com/submit';
                const data = new FormData(form);

                console.log('Web3Forms debug: submitting to', action);

                try {
                    const res = await fetch(action, {
                        method: 'POST',
                        body: data,
                    });

                    let body;
                    const ct = res.headers.get('content-type') || '';
                    if (ct.includes('application/json')) {
                        body = await res.json();
                    } else {
                        body = await res.text();
                    }

                    console.log('Web3Forms response status:', res.status, res.statusText);
                    console.log('Web3Forms response body:', body);

                    // if Web3Forms returns JSON with success flag, follow redirect
                    if (res.ok) {
                        const redirect = form.querySelector('input[name="redirect"]')?.value;
                        if (redirect) {
                            window.location.href = redirect;
                            return;
                        }
                        alert('Form submitted (check console for server response).');
                    } else {
                        alert('Form submission failed — check console network/response for details.');
                    }
                } catch (err) {
                    console.error('Web3Forms debug error:', err);
                    alert('Error submitting form — see console for details.');
                }
            });
        } catch (e) {
            console.warn('Could not attach Web3Forms debug handler', e);
        }
    })();

    // ============================================
    // INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Staggered animation delay
                setTimeout(() => {
                    entry.target.classList.add('show');
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.style.opacity = '1';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation with initial hidden state
    document.querySelectorAll('.skill-category, .project-card, .about-text, .about-image, .contact-item, .stat, .passion-card').forEach((el, index) => {
        el.classList.add('fade-in');
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.5s ease ${index * 0.05}s`;
        observer.observe(el);
    });
    
    // ============================================
    // TILT EFFECT ON CARDS
    // ============================================
    document.querySelectorAll('.passion-card, .skill-category, .project-card').forEach(card => {
        card.addEventListener('mousemove', function(e) {
            if (document.body.classList.contains('real-world')) return;
            
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.02)`;
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
        });
    });

    // ============================================
    // ACTIVE NAVIGATION HIGHLIGHTING
    // ============================================
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
            }
        });
    });

    // ============================================
    // CONTACT FORM WITH VALIDATION
    // ============================================
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Client-side validation before submission
        if (!name || !email || !subject || !message) {
            e.preventDefault();
            showNotification('Please fill in all fields.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            e.preventDefault();
            showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        // Form will submit to Web3Forms automatically
        showNotification('Message sent successfully! I\'ll get back to you soon. 🎉', 'success');
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // ============================================
    // NOTIFICATION SYSTEM
    // ============================================
    function showNotification(message, type) {
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());
        
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 16px 24px;
            background: ${type === 'success' ? 'linear-gradient(135deg, #6c63ff, #764ba2)' : '#f44336'};
            color: white;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            animation: slideIn 0.4s ease;
            font-weight: 600;
            backdrop-filter: blur(10px);
        `;
        
        // slideIn/slideOut keyframes are defined in styles.css
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.4s ease';
            setTimeout(() => notification.remove(), 400);
        }, 5000);
    }

    // ============================================
    // ENHANCED SKILL ITEMS INTERACTION
    // ============================================
    document.querySelectorAll('.skill-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.08) translateY(-8px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
        });
    });

    // ============================================
    // PARALLAX EFFECT FOR PROJECT CARDS
    // ============================================
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 12;
            const rotateY = (centerX - x) / 12;
            
            this.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)';
        });
    });

    // ============================================
    // RIPPLE EFFECT ON BUTTONS
    // ============================================
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.5);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            // ripple keyframe is defined in styles.css
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // ============================================
    // BACK TO TOP BUTTON
    // ============================================
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '<i class="fas fa-chevron-up"></i>';
    backToTop.className = 'back-to-top';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #0ea5e9, #ff8c00);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.3rem;
        display: none;
        z-index: 1000;
        transition: all 0.3s ease;
        box-shadow: 0 8px 20px rgba(14, 165, 233, 0.4);
        font-weight: 700;
    `;
    
    document.body.appendChild(backToTop);
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTop.style.display = 'flex';
            backToTop.style.alignItems = 'center';
            backToTop.style.justifyContent = 'center';
        } else {
            backToTop.style.display = 'none';
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    backToTop.addEventListener('mouseenter', function() {
        this.style.background = 'linear-gradient(135deg, #ff8c00, #0ea5e9)';
        this.style.transform = 'scale(1.15)';
        this.style.boxShadow = '0 12px 30px rgba(255, 140, 0, 0.5)';
    });
    
    backToTop.addEventListener('mouseleave', function() {
        this.style.background = 'linear-gradient(135deg, #0ea5e9, #ff8c00)';
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 8px 20px rgba(14, 165, 233, 0.4)';
    });

    // ============================================
    // COUNTER ANIMATION
    // ============================================
    const stats = document.querySelectorAll('.stat h4');
    let hasAnimated = false;

    function animateCounters() {
        if (hasAnimated) return;
        
        stats.forEach(stat => {
            const text = stat.textContent;
            const number = parseInt(text);
            
            if (!isNaN(number)) {
                let current = 0;
                const increment = Math.ceil(number / 50);
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= number) {
                        stat.textContent = text;
                        clearInterval(timer);
                    } else {
                        stat.textContent = current + '+';
                    }
                }, 30);
            }
        });
        
        hasAnimated = true;
    }

    // Trigger counter animation when stat section is visible
    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const aboutSection = document.querySelector('.about');
    if (aboutSection) {
        statObserver.observe(aboutSection);
    }

    // ============================================
    // IMAGE LOADING - FAST
    // ============================================
    document.querySelectorAll('img').forEach(img => {
        img.style.opacity = '1';
    });

    // ============================================
    // STRANGER THINGS GLITCH EFFECT
    // ============================================
    function addGlitchEffect() {
        const titles = document.querySelectorAll('.hero-title, .section-title');
        titles.forEach(title => {
            title.addEventListener('mouseenter', function() {
                this.style.animation = 'glitchEffect 0.3s ease';
                setTimeout(() => {
                    this.style.animation = 'none';
                }, 300);
            });
        });
    }

    addGlitchEffect();

    // ============================================
    // RANDOM NEON FLICKER
    // ============================================
    setInterval(() => {
        const randomFactor = Math.random();
        if (randomFactor > 0.95) {
            document.body.style.opacity = '0.98';
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 50);
        }
    }, 3000);

    console.log('👾 Welcome to the Upside Down. Portal initialized. 🌀');
});
