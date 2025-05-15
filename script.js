
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


const gallery = document.getElementById('track');
let isResetting = false;

function resetScroll() {
  if (isResetting) return;
  isResetting = true;

  // Apply blur
  gallery.classList.add('blur');

  // Stop animation temporarily
  gallery.style.animation = 'none';

  // Wait for blur effect
  setTimeout(() => {
    // Reset position instantly
    gallery.style.transition = 'transform 0.8s ease';
    gallery.style.transform = 'translateY(0)';

    // Force reflow to apply new position
    void gallery.offsetWidth;

     // Restart scroll animation
    setTimeout(() => {
      gallery.style.transition = '';
      gallery.style.animation = 'scrollDown 30s linear infinite';
      gallery.classList.remove('blur');
      isResetting = false;
    }, 100); // slight delay to allow transform reset to apply
  }, 600); // match blur duration
}

// Auto-check scroll position
setInterval(() => {
  const galleryRect = gallery.getBoundingClientRect();
  if (galleryRect.bottom <= window.innerHeight + 10) {
    resetScroll();
  }
}, 500);



