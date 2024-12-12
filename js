// Example: Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// dynamically messages are changing in welcome section
const messages = [
    "A Web Developer with a Passion for Creativity.",
    "Certified in Web Development and Design.",
    "Let's Create Something Amazing Together!"
  ];
  
  let currentIndex = 0;
  
  function changeContent() {
    const contentElement = document.getElementById("changing-content");
    contentElement.style.opacity = 0; // Fade out
    setTimeout(() => {
      contentElement.textContent = messages[currentIndex];
      contentElement.style.opacity = 1; // Fade in
      currentIndex = (currentIndex + 1) % messages.length; // Loop through messages
    }, 500); // Match fade-out duration
  }
  
  // Change content every 3 seconds
  setInterval(changeContent, 3000);
  
  

  
  
