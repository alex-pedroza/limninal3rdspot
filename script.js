document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.randobutton');

    
    // Function to randomly place buttons
    function placeButtonsRandomly() {
        const header = document.querySelector('.gif-background'); // Replace with your header's selector
        
        const headerWidth = header ? header.offsetWidth: 200; // Default if header missing
        const headerHeight = header ? header.offsetHeight : 200;

        buttons.forEach(button => {
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

    // Call the function to place buttons randomly
    placeButtonsRandomly();

    // Change cursor on mouse down and revert on mouse up
    document.body.addEventListener('mousedown', function() {
        document.body.style.cursor = "url('assets/cursor-click.png'), auto";
    });

    document.body.addEventListener('mouseup', function() {
        document.body.style.cursor = "url('assets/cursor.png'), auto";
    });



    //toggling the review section

    const reviewTitles = document.querySelectorAll('.review-title');
    const subsectionTitles = document.querySelectorAll('.subsection-title');

    reviewTitles.forEach(title => {
        title.addEventListener('click', function() {
            const content = this.nextElementSibling.nextElementSibling;
            if (content.style.display === "none" || content.style.display === "") {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        });
    });

    subsectionTitles.forEach(title => {
        title.addEventListener('click', function() {
            const content = this.nextElementSibling;
            if (content.style.display === "none" || content.style.display === "") {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        });
    });
});
