(function () {
    'use strict';

    /**
     * 10. PAGE LOAD
     * Initialize all interactions when the DOM is ready.
     * Adds 'loaded' class to body after a short delay for CSS transitions.
     */
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            document.body.classList.add('loaded');
        }, 100);

        initCursor();
        initNavbar();
        initSmoothScroll();
        initScrollReveal();
        initAccordion();
        initStatCounter();
        initHeroCanvas();
        initAiCanvas();
        initEasterEgg();
    });

    /**
     * Utilities
     */
    const isTouchDevice = () => matchMedia('(hover:none)').matches || matchMedia('(pointer:coarse)').matches;
    const prefersReducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

    /**
     * 1. CUSTOM CURSOR
     * Desktop only custom cursor with lerped trailing ring.
     */
    function initCursor() {
        if (isTouchDevice()) return;

        const cursorDot = document.createElement('div');
        cursorDot.classList.add('cursor-dot');
        const cursorRing = document.createElement('div');
        cursorRing.classList.add('cursor-ring');
        const cursorLabel = document.createElement('div');
        cursorLabel.classList.add('cursor-label');

        document.body.appendChild(cursorDot);
        document.body.appendChild(cursorRing);
        document.body.appendChild(cursorLabel);

        let mouseX = -100, mouseY = -100;
        let ringX = -100, ringY = -100;
        const lerpFactor = 0.15;

        // Instantly update dot position
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        }, { passive: true });

        // Lerp ring and update label position
        function updateRing() {
            ringX += (mouseX - ringX) * lerpFactor;
            ringY += (mouseY - ringY) * lerpFactor;
            
            cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
            cursorLabel.style.transform = `translate3d(${mouseX + 15}px, ${mouseY + 15}px, 0)`;
            
            requestAnimationFrame(updateRing);
        }
        requestAnimationFrame(updateRing);

        // Hover interactions
        const interactables = document.querySelectorAll('a, button, .project, .exp__item, .skills__item, .btn');
        interactables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorDot.classList.add('active');
                cursorRing.classList.add('active');
                
                if (el.classList.contains('project')) {
                    cursorLabel.textContent = 'View';
                    cursorLabel.classList.add('active');
                }
            });
            
            el.addEventListener('mouseleave', () => {
                cursorDot.classList.remove('active');
                cursorRing.classList.remove('active');
                cursorLabel.classList.remove('active');
            });
        });
    }

    /**
     * 2. NAVBAR SCROLL
     * Handles sticky navbar state and active section highlighting.
     * Also manages mobile navigation toggle.
     */
    function initNavbar() {
        const nav = document.getElementById('nav');
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav__link');
        const navToggle = document.querySelector('.nav__toggle');
        const navLinksContainer = document.querySelector('.nav__links');

        if (!nav) return;

        let ticking = false;

        function handleScroll() {
            // Sticky scrolled state
            if (window.scrollY > 20) {
                nav.classList.add('nav--scrolled');
            } else {
                nav.classList.remove('nav--scrolled');
            }

            // Active section highlighting
            let currentSectionId = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                if (window.scrollY >= sectionTop) {
                    currentSectionId = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSectionId}`) {
                    link.classList.add('active');
                }
            });
        }

        // 11. PERFORMANCE: Throttled scroll listener
        document.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });

        // Mobile menu toggle
        if (navToggle && navLinksContainer) {
            navToggle.addEventListener('click', () => {
                navToggle.classList.toggle('active');
                navLinksContainer.classList.toggle('open');
                document.body.style.overflow = navLinksContainer.classList.contains('open') ? 'hidden' : '';
            });

            // Close on link click
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    navToggle.classList.remove('active');
                    navLinksContainer.classList.remove('open');
                    document.body.style.overflow = '';
                });
            });

            // 12. ACCESSIBILITY: Close mobile menu with Escape
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && navLinksContainer.classList.contains('open')) {
                    navToggle.classList.remove('active');
                    navLinksContainer.classList.remove('open');
                    document.body.style.overflow = '';
                }
            });
        }
    }

    /**
     * 3. SMOOTH SCROLL
     * Custom smooth scrolling for anchor links.
     */
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }

    /**
     * 4. SCROLL REVEAL
     * IntersectionObserver implementation for scroll reveal animations.
     */
    function initScrollReveal() {
        const reveals = document.querySelectorAll('.reveal');
        if (reveals.length === 0) return;

        // Respect system motion preferences
        if (prefersReducedMotion()) {
            reveals.forEach(el => el.classList.add('is-visible'));
            return;
        }

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    obs.unobserve(entry.target); // Only animate once
                }
            });
        }, { 
            rootMargin: '0px 0px -80px 0px', 
            threshold: 0.1 
        });

        reveals.forEach(el => observer.observe(el));
    }

    /**
     * 5. EXPERIENCE ACCORDION
     * Handles collapsible experience items.
     */
    function initAccordion() {
        const expItems = document.querySelectorAll('.exp__item');
        
        expItems.forEach(item => {
            const header = item.querySelector('.exp__header');
            if (!header) return;

            header.addEventListener('click', () => {
                const isOpen = item.classList.contains('open');
                
                // Close all other accordions
                expItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('open')) {
                        otherItem.classList.remove('open');
                        const otherBody = otherItem.querySelector('.exp__body');
                        if (otherBody) otherBody.style.maxHeight = '0px';
                    }
                });

                // Toggle current accordion
                if (isOpen) {
                    item.classList.remove('open');
                    const body = item.querySelector('.exp__body');
                    if (body) body.style.maxHeight = '0px';
                } else {
                    item.classList.add('open');
                    const body = item.querySelector('.exp__body');
                    if (body) body.style.maxHeight = body.scrollHeight + 'px';
                }
            });
        });
    }

    /**
     * 6. STAT COUNTER
     * Animates numbers from 0 to data-count value when scrolled into view.
     */
    function initStatCounter() {
        const counters = document.querySelectorAll('[data-count]');
        if (counters.length === 0) return;

        // easeOutExpo easing function
        const easeOutExpo = t => t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const targetEl = entry.target;
                    const targetValue = parseFloat(targetEl.getAttribute('data-count'));
                    const duration = 1500; // 1.5s
                    let startTime = null;

                    function updateCount(currentTime) {
                        if (!startTime) startTime = currentTime;
                        const progress = currentTime - startTime;
                        const percent = Math.min(progress / duration, 1);
                        
                        const currentVal = targetValue * easeOutExpo(percent);
                        targetEl.textContent = Math.floor(currentVal);

                        if (percent < 1) {
                            requestAnimationFrame(updateCount);
                        } else {
                            targetEl.textContent = targetValue; // Exact final snap
                        }
                    }

                    requestAnimationFrame(updateCount);
                    obs.unobserve(targetEl);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => observer.observe(counter));
    }

    /**
     * Canvas Common Setup Utility
     * Handles resizing, scaling (DPR), mouse tracking, and observer-based animation loops.
     */
    function setupCanvas(canvas, initNodesFn, updateNodesFn, drawFn) {
        if (!canvas) return;
        const ctx = canvas.getContext('2d', { alpha: true });
        
        let width, height, dpr;
        let nodes = [];
        let animationFrameId;
        let isVisible = false;
        let mouseX = -1000, mouseY = -1000;

        function resize() {
            const rect = canvas.parentElement.getBoundingClientRect();
            width = rect.width;
            height = rect.height;
            // 11. PERFORMANCE: Cap DPR at 2
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.scale(dpr, dpr);
            
            nodes = initNodesFn(width, height);
        }

        window.addEventListener('resize', resize, { passive: true });
        resize();

        // Track mouse relative to canvas
        canvas.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        }, { passive: true });

        canvas.addEventListener('mouseleave', () => {
            mouseX = -1000;
            mouseY = -1000;
        });

        function animate() {
            if (!isVisible) return;
            ctx.clearRect(0, 0, width, height);
            
            updateNodesFn(nodes, width, height, mouseX, mouseY);
            drawFn(ctx, nodes, width, height);
            
            animationFrameId = requestAnimationFrame(animate);
        }

        // 11. PERFORMANCE: Only run canvas animation when visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                isVisible = entry.isIntersecting;
                if (isVisible) {
                    animate();
                } else {
                    cancelAnimationFrame(animationFrameId);
                }
            });
        }, { threshold: 0 });
        
        observer.observe(canvas);
    }

    /**
     * 7. HERO CANVAS
     * Subtle neural network visualization.
     */
    function initHeroCanvas() {
        const canvas = document.getElementById('heroCanvas');
        
        function initNodes(w, h) {
            const arr = [];
            for (let i = 0; i < 40; i++) {
                arr.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    vx: (Math.random() - 0.5) * 0.6, // random -0.3 to 0.3
                    vy: (Math.random() - 0.5) * 0.6,
                    radius: 1.5
                });
            }
            return arr;
        }

        function updateNodes(nodes, w, h, mx, my) {
            nodes.forEach(node => {
                node.x += node.vx;
                node.y += node.vy;

                // Wrap around edges
                if (node.x > w + 50) node.x = -50;
                if (node.x < -50) node.x = w + 50;
                if (node.y > h + 50) node.y = -50;
                if (node.y < -50) node.y = h + 50;

                // Mouse interaction: push away
                const dx = node.x - mx;
                const dy = node.y - my;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 100) {
                    const force = (100 - dist) / 100;
                    node.vx += (dx / dist) * force * 0.05;
                    node.vy += (dy / dist) * force * 0.05;
                    // Dampen velocity when pushed to avoid exploding speed
                    node.vx *= 0.95;
                    node.vy *= 0.95;
                } else {
                    // Natural slow down if speed gets too high
                    const speed = Math.sqrt(node.vx*node.vx + node.vy*node.vy);
                    if (speed > 0.6) {
                        node.vx *= 0.99;
                        node.vy *= 0.99;
                    }
                }
            });
        }

        function draw(ctx, nodes) {
            // Draw connections
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 120) {
                        const opacity = (1 - dist / 120) * 0.08;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.strokeStyle = `rgba(41,151,255, ${opacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }

            // Draw nodes
            nodes.forEach(node => {
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(41,151,255, 0.15)';
                ctx.fill();
            });
        }

        setupCanvas(canvas, initNodes, updateNodes, draw);
    }

    /**
     * 8. AI SHOWCASE CANVAS
     * Simpler, slower floating particles.
     */
    function initAiCanvas() {
        const canvas = document.getElementById('aiCanvas');
        
        function initNodes(w, h) {
            const arr = [];
            for (let i = 0; i < 25; i++) {
                arr.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    vx: (Math.random() - 0.5) * 0.3,
                    vy: (Math.random() - 0.5) * 0.3,
                    radius: 1
                });
            }
            return arr;
        }

        function updateNodes(nodes, w, h) {
            nodes.forEach(node => {
                node.x += node.vx;
                node.y += node.vy;

                // Wrap
                if (node.x > w + 20) node.x = -20;
                if (node.x < -20) node.x = w + 20;
                if (node.y > h + 20) node.y = -20;
                if (node.y < -20) node.y = h + 20;
            });
        }

        function draw(ctx, nodes) {
            // Draw connections
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 100) {
                        const opacity = (1 - dist / 100) * 0.06;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.strokeStyle = `rgba(41,151,255, ${opacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }

            // Draw nodes
            nodes.forEach(node => {
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(41,151,255, 0.1)';
                ctx.fill();
            });
        }

        setupCanvas(canvas, initNodes, updateNodes, draw);
    }

    /**
     * 9. EASTER EGG
     * Opens a terminal overlay on Cmd+Shift+K / Ctrl+Shift+K.
     */
    function initEasterEgg() {
        const overlay = document.querySelector('.terminal-overlay');
        if (!overlay) return;

        function closeTerminal() {
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }

        document.addEventListener('keydown', (e) => {
            // Match Ctrl+Shift+K or Cmd+Shift+K
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            }
            
            // 12. ACCESSIBILITY: Close on Escape
            if (e.key === 'Escape' && overlay.classList.contains('active')) {
                closeTerminal();
            }
        });

        // Close on background click
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeTerminal();
            }
        });
    }

})();
