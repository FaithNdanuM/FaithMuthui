// Testimonial slider
        let currentTestimonial = 0;
        const testimonials = document.querySelectorAll('.testimonial-slide');
        
        function showTestimonial(index) {
            testimonials.forEach((slide, i) => {
                if (i === index) {
                    slide.classList.add('active');
                    slide.classList.remove('hidden');
                } else {
                    slide.classList.remove('active');
                    slide.classList.add('hidden');
                }
            });
        }
        
        document.getElementById('nextTestimonial').addEventListener('click', () => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        });
        
        document.getElementById('prevTestimonial').addEventListener('click', () => {
            currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
            showTestimonial(currentTestimonial);
        });
        
        // Initialize first testimonial
        showTestimonial(currentTestimonial);
        
        // Auto-rotate testimonials
        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }, 5000);
        
        // Password validation
        const passwordInput = document.getElementById('password');
        const passwordRequirements = document.getElementById('passwordRequirements');
        
        passwordInput.addEventListener('focus', () => {
            passwordRequirements.classList.add('show');
        });
        
        passwordInput.addEventListener('blur', () => {
            if (passwordInput.value === '') {
                passwordRequirements.classList.remove('show');
            }
        });
        
        passwordInput.addEventListener('input', () => {
            const value = passwordInput.value;
            const requirements = {
                length: value.length >= 8,
                uppercase: /[A-Z]/.test(value),
                lowercase: /[a-z]/.test(value),
                number: /[0-9]/.test(value),
                special: /[!@#$%^&*(),.?":{}|<>]/.test(value)
            };
            
            for (const [key, met] of Object.entries(requirements)) {
                const icon = passwordRequirements.querySelector(`.requirement.${key} i`);
                const text = passwordRequirements.querySelector(`.requirement.${key}`);
                
                if (met) {
                    icon.classList.remove('fa-times', 'text-red-500');
                    icon.classList.add('fa-check', 'text-green-500');
                    text.style.color = 'rgb(16, 185, 129)';
                } else {
                    icon.classList.remove('fa-check', 'text-green-500');
                    icon.classList.add('fa-times', 'text-red-500');
                    text.style.color = 'rgb(239, 68, 68)';
                }
            }
        });
        
        // Form submission
        document.getElementById('loginForm').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Login submitted! (This is a demo)');
            // In a real application, you would handle the login here
        });