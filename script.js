document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.randobutton');
    const buttonImages = {
        'writ-btn': 'assets/reach_me.jpg',
        'lino-btn': 'path/to/lino-cuts-image.jpg',
        'reach-btn': 'assets/reach_me.jpg',
        'projs-btn': 'path/to/projects-image.jpg'
};
    
    // Function to randomly place buttons
    function placeButtonsRandomly() {
        const header = document.querySelector('.gif-background'); 

        const headerWidth = header ? header.offsetWidth: 200; // Default if header missing
        const headerHeight = header ? header.offsetHeight : 200;

        buttons.forEach(button => {

            const buttonId = button.id;
            if (buttonImages[buttonId]) {
            button.style.backgroundImage = `url(${buttonImages[buttonId]})`;
            }

            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            let randomTop, randomLeft;
            let attempts = 0;
            const maxAttempts = 100;

            do {
                randomTop = Math.floor(Math.random() * (viewportHeight - button.offsetHeight));
                randomLeft = Math.floor(Math.random() * (viewportWidth - button.offsetWidth));
                attempts++;
            } while (
                (randomTop < headerHeight && randomLeft < headerWidth) && // Check if inside header zone
                (attempts < maxAttempts)
            );

            // Fallback placement if too many attempts
            if (attempts >= maxAttempts) {
                randomTop = headerHeight;
                randomLeft = headerWidth;
            }

            button.style.top = `${randomTop}px`;
            button.style.left = `${randomLeft}px`;
        });
    }

    // Call the function when the page loads
    document.addEventListener('DOMContentLoaded', placeButtonsRandomly);

    // Optional: Re-position when window is resized
    window.addEventListener('resize', placeButtonsRandomly);

    // Call the function to place buttons randomly
    placeButtonsRandomly();

    // Change cursor on mouse down and revert on mouse up
    document.body.addEventListener('mousedown', function() {
        document.body.style.cursor = "url('assets/cursor-click.png'), auto";
    });

    document.body.addEventListener('mouseup', function() {
        document.body.style.cursor = "url('assets/cursor.png'), auto";
    });

    // Check if the user is on a mobile device
    function isMobileDevice() {
        // Method 1: Check screen size (most reliable for responsiveness)
        const isSmallScreen = window.innerWidth <= 768; // Common mobile breakpoint

        // Method 2: Check user agent (optional, but catches some edge cases)
        const isMobileUserAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        return isSmallScreen || isMobileUserAgent;
    }

    // Show error if mobile
    if (isMobileDevice()) {
        document.body.innerHTML = `
            <div style="
            text-align: center;
            padding: 50px;
            font-family: Arial, sans-serif;
            background: #f8f8f8;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            ">
            <h1 style="color: #ff4444;">🚧 Mobile Not Supported</h1>
            <p>This site is designed for desktop viewing.</p>
            <p>Please visit on a larger screen.</p>
            </div>
  `     ;
    }
});
