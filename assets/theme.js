// Countdown Timer for Flash Deals
function initCountdownTimer() {
  const countdownElements = document.querySelectorAll('[data-end-time]');
  
  countdownElements.forEach((element) => {
    const endTime = new Date(element.getAttribute('data-end-time')).getTime();
    
    function updateCountdown() {
      const now = new Date().getTime();
      const timeLeft = endTime - now;
      
      if (timeLeft < 0) {
        element.innerHTML = 'Deal ended';
        return;
      }
      
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      
      element.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
  });
}

// Initialize on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCountdownTimer);
} else {
  initCountdownTimer();
}

// Mobile menu toggle (if needed)
function toggleMobileMenu() {
  const menu = document.querySelector('.mobile-menu');
  if (menu) {
    menu.classList.toggle('open');
  }
}

// Add to cart feedback
function addToCartFeedback() {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  addToCartButtons.forEach((button) => {
    button.addEventListener('click', function() {
      const originalText = this.textContent;
      this.textContent = '✓ Added!';
      setTimeout(() => {
        this.textContent = originalText;
      }, 2000);
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', addToCartFeedback);
} else {
  addToCartFeedback();
}
