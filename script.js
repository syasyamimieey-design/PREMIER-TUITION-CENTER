document.addEventListener('DOMContentLoaded', () => {
    // 1. Select the element where the text will appear
    const textElement = document.getElementById('typewriter-text');
    
    // 2. The exact sentence you want to animate
    const fullText = "Join Premier Tuition Centre for an exceptional learning experience with expert tutors and proven results for the 2025/2026 session.";
    
    // 3. Clear the content initially
    textElement.textContent = '';
    
    let index = 0;
    const typingSpeed = 45; // Speed in milliseconds per character

    /**
     * Typing logic function
     */
    function typeEffect() {
        if (index < fullText.length) {
            // Append the next character to the text content
            textElement.textContent += fullText.charAt(index);
            index++;
            
            // Call the function again after the specified speed
            setTimeout(typeEffect, typingSpeed);
        } else {
            // --- HILANGKAN BAR MENAIP DI SINI ---
            // Once the text is fully typed, remove the border/cursor instantly
            textElement.style.borderRight = "none";
            
            // Log for debugging (Optional)
            console.log("Typing complete. Cursor removed.");
        }
    }

    // 4. Start the animation after a short 800ms delay for a smooth entrance
    setTimeout(typeEffect, 800);
});