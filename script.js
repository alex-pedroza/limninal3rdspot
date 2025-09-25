// Minimal test - just alert and console.log
alert("Script is starting!");
console.log("Script is starting!");

function testFunction() {
    alert("testFunction is running!");
    console.log("testFunction is running!");
    
    // Just try to set one button to a test image
    const testButton = document.getElementById('writ-btn');
    if (testButton) {
        console.log("Found writ-btn button");
        testButton.style.backgroundImage = "url('https://via.placeholder.com/125x125/FF0000/FFFFFF?text=TEST')";
        testButton.style.border = "3px solid yellow";
    } else {
        console.log("Could not find writ-btn button");
    }
}

// Call the function after a short delay to ensure DOM is ready
setTimeout(testFunction, 100);