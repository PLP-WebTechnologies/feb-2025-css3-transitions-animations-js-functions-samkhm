// Check if user preference exists in localStorage
let animationEnabled = localStorage.getItem('animationEnabled') === 'true';

// Get the button and the element to animate
const animateButton = document.getElementById('animateButton');
const animatedElement = document.getElementById('animatedElement');

// Apply animation based on user preference
if (animationEnabled) {
    animatedElement.classList.add('animate');
}

// Function to toggle the animation
function toggleAnimation() {
    if (animationEnabled) {
        // If animation is enabled, add the class to animate
        animatedElement.classList.toggle('animate');
    }
    // Toggle the preference in localStorage
    animationEnabled = !animationEnabled;
    localStorage.setItem('animationEnabled', animationEnabled);
}

// Add click event to the button
animateButton.addEventListener('click', toggleAnimation);
