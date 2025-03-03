// Simple script to handle button hover effects
document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.querySelector('.cta-button');
    const daftarBtn = document.querySelector('.daftar-btn');
    
    ctaButton.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    ctaButton.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
    
    daftarBtn.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05)';
        this.style.cursor = 'pointer';
    });
    
    daftarBtn.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});
