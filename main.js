function scrollCards(direction, cardsContainer) {
    const scrollAmount = 200;
    cardsContainer.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}
  