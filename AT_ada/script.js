let cards = document.querySelectorAll(".card");
cards.forEach(card => {
    card.addEventListener("click", function() {
        let productId = this.getAttribute("data-id");
        window.location.href = "product.html?id=" + productId;
    });
});
