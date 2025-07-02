// Details page specific functionality
document.addEventListener('DOMContentLoaded', function() {
    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Form validation
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Validate required fields
            const requiredFields = ['name', 'institution', 'role', 'email', 'interest', 'message'];
            let isValid = true;
            let firstInvalidField = null;
            
            requiredFields.forEach(field => {
                const input = document.getElementById(field);
                const value = data[field];
                
                if (!value || value.trim() === '') {
                    isValid = false;
                    input.style.borderColor = '#ef4444';
                    if (!firstInvalidField) {
                        firstInvalidField = input;
                    }
                } else {
                    input.style.borderColor = '#e5e7eb';
                }
            });
            
            // Email validation
            const emailInput = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (data.email && !emailRegex.test(data.email)) {
                isValid = false;
                emailInput.style.borderColor = '#ef4444';
                if (!firstInvalidField) {
                    firstInvalidField = emailInput;
                }
            }
            
            // Privacy checkbox validation
            const privacyCheckbox = document.getElementById('privacy');
            if (!privacyCheckbox.checked) {
                isValid = false;
                showNotification('Devi accettare il trattamento dei dati personali per continuare.', 'error');
                if (!firstInvalidField) {
                    firstInvalidField = privacyCheckbox;
                }
            }
            
            if (!isValid) {
                if (firstInvalidField) {
                    firstInvalidField.focus();
                    firstInvalidField.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
                showNotification('Compila tutti i campi obbligatori correttamente.', 'error');
                return;
            }
            
            // Simulate form submission
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Invio in corso...';
            submitButton.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
                
                // Show success message
                showNotification('Richiesta inviata con successo! Ti contatteremo entro 24 ore.', 'success');
                
                // Reset form
                contactForm.reset();
                
                // Send confirmation email simulation
                setTimeout(() => {
                    showNotification('Email di conferma inviata al tuo indirizzo.', 'info');
                }, 2000);
                
            }, 2000);
        });
        
        // Real-time validation
        const inputs = contactForm.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                if (this.style.borderColor === 'rgb(239, 68, 68)') {
                    validateField(this);
                }
            });
        });
    }
    
    // Field validation function
    function validateField(field) {
        const value = field.value.trim();
        const isRequired = field.hasAttribute('required');
        
        if (isRequired && !value) {
            field.style.borderColor = '#ef4444';
            return false;
        }
        
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                field.style.borderColor = '#ef4444';
                return false;
            }
        }
        
        field.style.borderColor = '#10b981';
        return true;
    }
    
    // Enhanced notification system
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());
        
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        
        const icons = {
            success: 'check-circle',
            error: 'exclamation-circle',
            info: 'info-circle',
            warning: 'exclamation-triangle'
        };
        
        notification.innerHTML = `
            <i class="fas fa-${icons[type]}"></i>
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        `;
        
        document.body.appendChild(notification);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);
        
        // Manual close
        notification.querySelector('.notification-close').addEventListener('click', () => {
            notification.remove();
        });
    }
    
    // Pricing card interactions
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
        const button = card.querySelector('.btn');
        if (button) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                const cardTitle = card.querySelector('h3').textContent;
                const price = card.querySelector('.price').textContent;
                
                // Pre-fill contact form based on selected package
                const interestSelect = document.getElementById('interest');
                const messageTextarea = document.getElementById('message');
                
                if (interestSelect && messageTextarea) {
                    // Scroll to contact form
                    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                    
                    // Pre-fill form
                    setTimeout(() => {
                        if (cardTitle.includes('Pilot')) {
                            interestSelect.value = 'pilot';
                        } else if (cardTitle.includes('Professional')) {
                            interestSelect.value = 'demo';
                        } else if (cardTitle.includes('Enterprise')) {
                            interestSelect.value = 'custom';
                        }
                        
                        messageTextarea.value = `Sono interessato al pacchetto ${cardTitle} (${price}). Vorrei ricevere maggiori informazioni e una demo personalizzata.`;
                        messageTextarea.focus();
                    }, 500);
                }
            });
        }
    });
    
    // Animate timeline phases on scroll
    const timelineObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, { threshold: 0.2 });
    
    document.querySelectorAll('.timeline-phase').forEach((phase, index) => {
        phase.style.opacity = '0';
        phase.style.transform = index % 2 === 0 ? 'translateX(-50px)' : 'translateX(50px)';
        phase.style.transition = 'all 0.6s ease';
        timelineObserver.observe(phase);
    });
    
    // ROI items animation
    const roiObserver = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    }, { threshold: 0.3 });
    
    document.querySelectorAll('.roi-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'all 0.6s ease';
        roiObserver.observe(item);
    });
    
    // Method cards stagger animation
    const methodObserver = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 150);
            }
        });
    }, { threshold: 0.2 });
    
    document.querySelectorAll('.method-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        methodObserver.observe(card);
    });
    
    // Pricing cards animation
    const pricingObserver = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.pricing-card').forEach(card => {
        if (!card.classList.contains('featured')) {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px) scale(0.95)';
            card.style.transition = 'all 0.6s ease';
        }
        pricingObserver.observe(card);
    });
});

// Add additional CSS for enhanced notifications
const additionalStyle = document.createElement('style');
additionalStyle.textContent = `
    .notification-error {
        border-left: 4px solid #ef4444;
        color: #991b1b;
    }
    
    .notification-error i {
        color: #ef4444;
    }
    
    .notification-info {
        border-left: 4px solid #3b82f6;
        color: #1e40af;
    }
    
    .notification-info i {
        color: #3b82f6;
    }
    
    .notification-warning {
        border-left: 4px solid #f59e0b;
        color: #92400e;
    }
    
    .notification-warning i {
        color: #f59e0b;
    }
    
    .form-group input.error,
    .form-group select.error,
    .form-group textarea.error {
        border-color: #ef4444 !important;
        background-color: #fef2f2;
    }
    
    .form-group input.valid,
    .form-group select.valid,
    .form-group textarea.valid {
        border-color: #10b981 !important;
        background-color: #f0fdf4;
    }
`;
document.head.appendChild(additionalStyle);

