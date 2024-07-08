document.addEventListener('DOMContentLoaded', function() {
    const decrementBtn = document.querySelector('.decrement');
    const incrementBtn = document.querySelector('.increment');
    const countSpan = document.querySelector('.count');
    
    let count = 0;
    
    function updateCountDisplay() {
      countSpan.textContent = count;
    }
    
    function incrementCount() {
      count++;
      updateCountDisplay();
      animateCount();
    }
    
    function decrementCount() {
      if (count > 0) {
        count--;
        updateCountDisplay();
        animateCount();
      }
    }
    
    function animateCount() {
      countSpan.animate([{ opacity: '0.2' }, { opacity: '1.0' }], { duration: 300, fill: 'forwards' });
    }
    
    decrementBtn.addEventListener('click', decrementCount);
    incrementBtn.addEventListener('click', incrementCount);
  });
  