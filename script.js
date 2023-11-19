// Get all elements with the class "badge html rounded-pill"
var badgeElements = document.querySelectorAll('.html');

// Add a click event listener to each element
badgeElements.forEach(function(badgeElement) {
  badgeElement.addEventListener('click', function() {
         // Get all cards
    const allCards = document.querySelectorAll('.card');

    // Iterate through each card and check if it has a descendant with class "html"
    allCards.forEach(card => {
        const hasHtmlDescendant = card.querySelector('.html');

        // If no descendant has class "html," add the class "hidden" to hide the card
        if (!hasHtmlDescendant) {
            card.classList.add('hidden');
        }
    });
  });
});