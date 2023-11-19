// Show all when 'See all' badge is clicked
    // Function to remove the "hidden" class from all cards
    function showAllCards() {
        const allCards = document.querySelectorAll('.card');
        allCards.forEach(card => {
            card.classList.remove('hidden');
        });
    }

    // Add click event listener to the document body
    document.body.addEventListener('click', function(event) {
        // Check if the clicked element has the class "all"
        if (event.target.classList.contains('all')) {
            // Call the function to show all cards
            showAllCards();
        }
    });

function hideCardsWithoutDescendant(className) {
    // Get all elements with the specified class
    var badgeElements = document.querySelectorAll('.' + className);

    // Add a click event listener to each element
    badgeElements.forEach(function (badgeElement) {
        badgeElement.addEventListener('click', function () {
            showAllCards();
            // Get all cards
            const allCards = document.querySelectorAll('.card');


            // Iterate through each card and check if it has a descendant with the specified class
            allCards.forEach(card => {

                const hasDescendant = card.querySelector('.' + className);

                // If no descendant has the specified class, add the class "hidden" to hide the card
                if (!hasDescendant) {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

// Example usage
hideCardsWithoutDescendant('html');
hideCardsWithoutDescendant('css');
hideCardsWithoutDescendant('javascript');
hideCardsWithoutDescendant('sass');
hideCardsWithoutDescendant('svg');
hideCardsWithoutDescendant('api');




