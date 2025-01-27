document.addEventListener("DOMContentLoaded", function() {
    const welcomeText = document.querySelector('.main-header');
    setTimeout(() => {
        welcomeText.style.opacity = 1;
        welcomeText.style.transition = 'opacity 2s ease-in-out';
    }, 500);
});

document.addEventListener("DOMContentLoaded", function() {
    const dynamicText = document.getElementById('dynamic-text');
    let textArray = ['our Project','Twi-Loc:Location based analysis'];
    let arrayIndex = 0;
    let letterIndex = 0;
    let currentText = '';
    let direction = 'forward';

    function typeText() {
        if (direction === 'forward') {
            if (letterIndex < textArray[arrayIndex].length) {
                currentText = textArray[arrayIndex].substring(0, letterIndex + 1);
                dynamicText.textContent = currentText;
                letterIndex++;
                setTimeout(typeText, 150);
            } else {
                setTimeout(typeText, 1500); // Pause at end
                direction = 'backward';
            }
        } else {
            if (letterIndex > 0) {
                currentText = textArray[arrayIndex].substring(0, letterIndex - 1);
                dynamicText.textContent = currentText;
                letterIndex--;
                setTimeout(typeText, 100);
            } else {
                direction = 'forward';
                arrayIndex = (arrayIndex + 1) % textArray.length;
                setTimeout(typeText, 500); // Pause before start typing next word
            }
        }
    }

    typeText();
});

