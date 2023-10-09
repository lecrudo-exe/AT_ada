// Pega o ID do produto a partir da URL
function getProductIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Busca os dados do produto
function getProductData(productId) {
    // Procurar o produto no nosso "banco de dados" fictício
    for (var i = 0; i < database.length; i++) {
        if (database[i].id == productId) {
            return database[i];
        }
    }
    
    // Se não encontrarmos o produto, retornamos null
    return null;
}

// Preenche os detalhes do produto na página
function populateProductDetails(product) {
    document.getElementById('product-image').src = product.image;
    document.getElementById('product-title').innerText = product.title;
    document.getElementById('product-description').innerText = product.description;
}

// Quando a página for carregada, pega o ID do produto, busca os dados e 
// preenche a página.
window.onload = function() {
    const productId = getProductIdFromUrl();
    const product = getProductData(productId);
    if (product) {
        populateProductDetails(product);
    } else {
        // Se não encontrarmos o produto no banco de dados, exibimos uma mensagem de erro.
        document.getElementById('product-detail').innerHTML = "<p>Produto não encontrado.</p>";
    }
};

