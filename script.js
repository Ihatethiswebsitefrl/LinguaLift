function checkAnswer(selectedIndex, correctIndex) {
    const buttons = choicesDiv.getElementsByTagName("button");
    const selectedBtn = buttons[selectedIndex];

    if (selectedIndex === correctIndex) {
        selectedBtn.style.background = "#4caf50";
        selectedBtn.style.color = "white";
        for (let btn of buttons) btn.disabled = true;
        nextBtn.classList.remove("hidden");
        
        // Play correct sound effect
        playCorrectSound();
    } else {
        wrongAttempts++;
        selectedBtn.style.background = "#f44336";
        selectedBtn.style.color = "white";
        selectedBtn.disabled = true;
        
        // Play wrong sound effect
        playWrongSound();

        if (wrongAttempts >= 2) {
            buttons[correctIndex].style.background = "#4caf50";
            buttons[correctIndex].style.color = "white";
            for (let btn of buttons) btn.disabled = true;
            nextBtn.classList.remove("hidden");
            
            // Play correct sound when showing correct answer
            playCorrectSound();
        }
    }
}

// --------------------------
// Sound effect functions
// --------------------------
function playCorrectSound() {
    correctSound.currentTime = 0;
    correctSound.play().catch(err => console.log("Could not play correct sound:", err));
}

function playWrongSound() {
    wrongSound.currentTime = 0;
    wrongSound.play().catch(err => console.log("Could not play wrong sound:", err));
}
