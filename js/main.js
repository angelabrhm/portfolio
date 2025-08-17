// Portfolio JavaScript - Motion Graphics Designer Website
(function() {
    'use strict';

    // Portfolio data - In a real application, this would come from a CMS or API
    const portfolioItems = [
        {
            id: 1,
            title: "Brand Animation Suite",
            description: "Complete brand identity animation package including logo reveals, transitions, and social media content.",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
            video: null,
            tags: ["Branding", "Animation", "Logo Design"],
            category: "motion-graphics"
        },
        {
            id: 2,
            title: "Product Explainer Video",
            description: "Engaging explainer video showcasing SaaS product features with smooth transitions and modern design.",
            image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
            video: null,
            tags: ["Explainer", "Product", "UI/UX"],
            category: "explainer-video"
        },
        {
            id: 3,
            title: "Social Media Campaign",
            description: "Dynamic social media animations for multi-platform marketing campaign with consistent visual language.",
            image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600&h=400&fit=crop",
            video: null,
            tags: ["Social Media", "Campaign", "Marketing"],
            category: "social-media"
        },
        {
            id: 4,
            title: "Corporate Video Intro",
            description: "Professional corporate video introduction with elegant typography and smooth motion graphics.",
            image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
            video: null,
            tags: ["Corporate", "Intro", "Typography"],
            category: "motion-graphics"
        },
        {
            id: 5,
            title: "App Launch Animation",
            description: "Mobile app launch animation sequence featuring UI elements and interactive demonstrations.",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
            video: null,
            tags: ["Mobile", "App", "UI Animation"],
            category: "motion-graphics"
        },
        {
            id: 6,
            title: "Event Promo Video",
            description: "High-energy promotional video for tech conference with dynamic transitions and engaging visuals.",
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
            video: null,
            tags: ["Event", "Promo", "Conference"],
            category: "explainer-video"
        },
        {
            id: 7,
            title: "Logo Animation Collection",
            description: "Series of logo animations for various clients featuring unique reveal techniques and brand personality.",
            image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop",
            video: null,
            tags: ["Logo", "Animation", "Branding"],
            category: "logo-animation"
        },
        {
            id: 8,
            title: "Data Visualization",
            description: "Interactive data visualization animations for financial dashboard with smooth chart transitions.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
            video: null,
            tags: ["Data", "Charts", "Dashboard"],
            category: "motion-graphics"
        },
        {
            id: 9,
            title: "Music Video Graphics",
            description: "Creative motion graphics for music video featuring synchronized animations and artistic effects.",
            image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
            video: null,
            tags: ["Music", "Creative", "Effects"],
            category: "motion-graphics"
        },
        {
            id: 10,
            title: "Educational Content",
            description: "Educational animation series explaining complex concepts with clear visuals and engaging storytelling.",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
            video: null,
            tags: ["Education", "Learning", "Storytelling"],
            category: "explainer-video"
        },
        {
            id: 11,
            title: "Brand Guidelines Video",
            description: "Comprehensive brand guidelines presentation with animated examples and usage demonstrations.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
            video: null,
            tags: ["Brand", "Guidelines", "Presentation"],
            category: "motion-graphics"
        },
        {
            id: 12,
            title: "Website Hero Animation",
            description: "Dynamic website hero section animation with parallax effects and interactive elements.",
            image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
            video: null,
            tags: ["Web", "Hero", "Interactive"],
            category: "motion-graphics"
        },
        {
            id: 13,
            title: "Product Demo Video",
            description: "Detailed product demonstration video with screen recordings and motion graphic overlays.",
            image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
            video: null,
            tags: ["Product", "Demo", "Tutorial"],
            category: "explainer-video"
        },
        {
            id: 14,
            title: "Holiday Campaign",
            description: "Festive holiday campaign animations for retail brand with seasonal themes and celebrations.",
            image: "https://images.unsplash.com/photo-1482784160316-6eb046863ece?w=600&h=400&fit=crop",
            video: null,
            tags: ["Holiday", "Retail", "Campaign"],
            category: "social-media"
        },
        {
            id: 15,
            title: "Startup Pitch Deck",
            description: "Animated startup pitch deck with data visualizations and compelling storytelling elements.",
            image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop",
            video: null,
            tags: ["Startup", "Pitch", "Investment"],
            category: "motion-graphics"
        },
        {
            id: 16,
            title: "App Store Preview",
            description: "App store preview video showcasing mobile app features with device mockups and UI animations.",
            image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
            video: null,
            tags: ["App Store", "Mobile", "Preview"],
            category: "motion-graphics"
        },
        {
            id: 17,
            title: "Conference Speaker Intro",
            description: "Speaker introduction videos for conference with professional animations and biographical content.",
            image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop",
            video: null,
            tags: ["Conference", "Speaker", "Introduction"],
            category: "motion-graphics"
        },
        {
            id: 18,
            title: "Annual Report Animation",
            description: "Corporate annual report with animated infographics, charts, and executive messaging.",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
            video: null,
            tags: ["Annual Report", "Corporate", "Infographics"],
            category: "motion-graphics"
        }
    ];

    // DOM Elements
    const showcaseGrid = document.querySelector('.showcase__grid');
    const showcaseLoader = document.querySelector('.showcase__loader');
    const lightbox = document.querySelector('.lightbox');
    const lightboxClose = document.querySelector('.lightbox__close');
    const lightboxOverlay = document.querySelector('.lightbox__overlay');
    const lightboxMedia = document.querySelector('.lightbox__media');
    const lightboxTitle = document.querySelector('.lightbox__title');
    const lightboxDescription = document.querySelector('.lightbox__description');
    const lightboxTags = document.querySelector('.lightbox__tags');
    const contactForm = document.querySelector('.contact__form');
    const formStatus = document.querySelector('.form__status');
    const faqItems = document.querySelectorAll('.faq__item');

    // Intersection Observer for lazy loading
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.dataset.src;
                
                if (src) {
                    img.src = src;
                    img.removeAttribute('data-src');
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    }, {
        rootMargin: '50px 0px',
        threshold: 0.1
    });

    // Initialize the application
    function init() {
        renderPortfolioGrid();
        setupEventListeners();
        setupLazyLoading();
        setupFAQ();
        setupSmoothScrolling();
        setupFormValidation();
        
        // Hide loader after content is rendered
        setTimeout(() => {
            if (showcaseLoader) {
                showcaseLoader.style.display = 'none';
            }
        }, 1000);
    }

    // Render the portfolio grid
    function renderPortfolioGrid() {
        if (!showcaseGrid) return;

        const gridHTML = portfolioItems.map(item => `
            <article class="showcase__item" data-id="${item.id}" role="button" tabindex="0" aria-label="View ${item.title} project details">
                <img 
                    class="showcase__image" 
                    data-src="${item.image}" 
                    alt="${item.title}" 
                    loading="lazy"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23f5f5f5'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='system-ui' font-size='16' fill='%23a3a3a3'%3ELoading...%3C/text%3E%3C/svg%3E"
                />
                <div class="showcase__overlay">
                    <div class="showcase__info">
                        <h3 class="showcase__title">${item.title}</h3>
                        <p class="showcase__description">${item.description}</p>
                        <div class="showcase__tags">
                            ${item.tags.map(tag => `<span class="showcase__tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                </div>
            </article>
        `).join('');

        showcaseGrid.innerHTML = gridHTML;
    }

    // Setup event listeners
    function setupEventListeners() {
        // Portfolio item clicks
        if (showcaseGrid) {
            showcaseGrid.addEventListener('click', handlePortfolioClick);
            showcaseGrid.addEventListener('keydown', handlePortfolioKeydown);
        }

        // Lightbox controls
        if (lightboxClose) {
            lightboxClose.addEventListener('click', closeLightbox);
        }
        
        if (lightboxOverlay) {
            lightboxOverlay.addEventListener('click', closeLightbox);
        }

        // Keyboard navigation for lightbox
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox && lightbox.classList.contains('active')) {
                closeLightbox();
            }
        });

        // Form submission
        if (contactForm) {
            contactForm.addEventListener('submit', handleFormSubmit);
        }
    }

    // Setup lazy loading for images
    function setupLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => imageObserver.observe(img));
    }

    // Handle portfolio item clicks
    function handlePortfolioClick(e) {
        const item = e.target.closest('.showcase__item');
        if (item) {
            const itemId = parseInt(item.dataset.id);
            openLightbox(itemId);
        }
    }

    // Handle portfolio item keyboard navigation
    function handlePortfolioKeydown(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const item = e.target.closest('.showcase__item');
            if (item) {
                const itemId = parseInt(item.dataset.id);
                openLightbox(itemId);
            }
        }
    }

    // Open lightbox with portfolio item details
    function openLightbox(itemId) {
        const item = portfolioItems.find(p => p.id === itemId);
        if (!item || !lightbox) return;

        // Populate lightbox content
        if (lightboxTitle) lightboxTitle.textContent = item.title;
        if (lightboxDescription) lightboxDescription.textContent = item.description;
        
        // Set media content
        if (lightboxMedia) {
            if (item.video) {
                lightboxMedia.innerHTML = `
                    <video controls autoplay muted>
                        <source src="${item.video}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                `;
            } else {
                lightboxMedia.innerHTML = `
                    <img src="${item.image}" alt="${item.title}" />
                `;
            }
        }

        // Set tags
        if (lightboxTags) {
            lightboxTags.innerHTML = item.tags.map(tag => 
                `<span class="lightbox__tag">${tag}</span>`
            ).join('');
        }

        // Show lightbox
        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false');
        
        // Focus management
        lightboxClose.focus();
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
    }

    // Close lightbox
    function closeLightbox() {
        if (!lightbox) return;
        
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
        
        // Restore body scroll
        document.body.style.overflow = '';
        
        // Return focus to the portfolio item that was clicked
        const activeItem = document.querySelector('.showcase__item[tabindex="0"]');
        if (activeItem) {
            activeItem.focus();
        }
    }

    // Setup FAQ accordion functionality
    function setupFAQ() {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq__question');
            const answer = item.querySelector('.faq__answer');
            
            if (question && answer) {
                question.addEventListener('click', () => {
                    const isExpanded = question.getAttribute('aria-expanded') === 'true';
                    
                    // Close all other FAQ items
                    faqItems.forEach(otherItem => {
                        const otherQuestion = otherItem.querySelector('.faq__question');
                        const otherAnswer = otherItem.querySelector('.faq__answer');
                        
                        if (otherItem !== item) {
                            otherQuestion.setAttribute('aria-expanded', 'false');
                            otherAnswer.style.maxHeight = '0';
                        }
                    });
                    
                    // Toggle current item
                    if (isExpanded) {
                        question.setAttribute('aria-expanded', 'false');
                        answer.style.maxHeight = '0';
                    } else {
                        question.setAttribute('aria-expanded', 'true');
                        answer.style.maxHeight = answer.scrollHeight + 'px';
                    }
                });
            }
        });
    }

    // Setup smooth scrolling for navigation links
    function setupSmoothScrolling() {
        const navLinks = document.querySelectorAll('a[href^="#"]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Setup form validation and submission
    function setupFormValidation() {
        if (!contactForm) return;

        const inputs = contactForm.querySelectorAll('input[required], textarea[required]');
        
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearFieldError);
        });
    }

    // Validate individual form field
    function validateField(e) {
        const field = e.target;
        const value = field.value.trim();
        
        // Remove existing error styling
        field.classList.remove('error');
        
        // Validate required fields
        if (field.hasAttribute('required') && !value) {
            showFieldError(field, 'This field is required');
            return false;
        }
        
        // Validate email format
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                showFieldError(field, 'Please enter a valid email address');
                return false;
            }
        }
        
        return true;
    }

    // Show field error
    function showFieldError(field, message) {
        field.classList.add('error');
        
        // Add error styles if not already in CSS
        if (!document.querySelector('#error-styles')) {
            const styles = document.createElement('style');
            styles.id = 'error-styles';
            styles.textContent = `
                .form__input.error,
                .form__textarea.error {
                    border-color: #dc2626;
                    box-shadow: 0 0 0 1px #dc2626;
                }
            `;
            document.head.appendChild(styles);
        }
    }

    // Clear field error
    function clearFieldError(e) {
        e.target.classList.remove('error');
    }

    // Handle form submission
    function handleFormSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const inputs = contactForm.querySelectorAll('input[required], textarea[required]');
        let isValid = true;
        
        // Validate all required fields
        inputs.forEach(input => {
            if (!validateField({ target: input })) {
                isValid = false;
            }
        });
        
        if (!isValid) {
            showFormStatus('Please correct the errors above.', 'error');
            return;
        }
        
        // Show loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Simulate form submission (replace with actual endpoint)
        setTimeout(() => {
            // Reset form
            contactForm.reset();
            
            // Show success message
            showFormStatus('Thank you for your message! I\'ll get back to you within 24 hours.', 'success');
            
            // Reset button
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 2000);
    }

    // Show form status message
    function showFormStatus(message, type) {
        if (!formStatus) return;
        
        formStatus.textContent = message;
        formStatus.className = `form__status form__status--${type}`;
        formStatus.style.display = 'block';
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 5000);
    }

    // Performance monitoring
    function monitorPerformance() {
        // Monitor largest contentful paint
        new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            const lastEntry = entries[entries.length - 1];
            
            // Log performance metrics (in production, send to analytics)
            console.log('LCP:', lastEntry.startTime);
        }).observe({ entryTypes: ['largest-contentful-paint'] });
        
        // Monitor cumulative layout shift
        new PerformanceObserver((entryList) => {
            let clsScore = 0;
            
            for (const entry of entryList.getEntries()) {
                if (!entry.hadRecentInput) {
                    clsScore += entry.value;
                }
            }
            
            console.log('CLS:', clsScore);
        }).observe({ entryTypes: ['layout-shift'] });
    }

    // Header scroll behavior
    function setupHeaderScroll() {
        const header = document.querySelector('.header');
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 100) {
                header.style.transform = currentScrollY > lastScrollY ? 'translateY(-100%)' : 'translateY(0)';
            } else {
                header.style.transform = 'translateY(0)';
            }
            
            lastScrollY = currentScrollY;
        });
    }

    // Initialize everything when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Setup additional features
    setupHeaderScroll();
    
    // Monitor performance in development
    if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'development') {
        monitorPerformance();
    }

})();