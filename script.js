document.addEventListener('DOMContentLoaded', () => {
  const loadMoreBtn = document.getElementById('load-more');

  let currPage = 1;

  async function getProducts(page) {
    const res = await fetch(
      `https://fakestoreapi.com/products?limit=${6*page}`
    );
    const products = await res.json();
    return products;
  }


  function displayProducts(products) {
    const container = document.getElementById('product_images');
    container.innerHTML = "";
    products.forEach(product => {
      const productDIv = document.createElement('div');
      productDIv.className = 'product-info';
      productDIv.innerHTML = `
            <img src=${product.image} alt=${product.title} id="product-image">
            <h3 id="product-title">${product.title}</h3>
            <p id="product-description">${product.description}</p>
            <p id="product-price">$ ${product.price}</p>
            <p id="product-category">${product.category}</p>
            <p id="product-rating">${product.rating.rate} <span id="reviews">(${product.rating.count} reviews)</span></p>
            `;
      container.appendChild(productDIv);
    });
  }

  loadMoreBtn.addEventListener('click', () => {
    const container = document.getElementById('product_images');
    const emptyCategoryDiv = document.createElement('div');
    emptyCategoryDiv.className = 'product-empty';
    emptyCategoryDiv.innerHTML = `
    <div class="loading">
      <div class="loader-container">
      <div class="loader"></div>
      </div>
    </div>
      `;
    container.appendChild(emptyCategoryDiv);
    setTimeout(async() => {
      const products = await getProducts(currPage);
      displayProducts(products);
      currPage++;
    }, 2000)
  });

  loadMoreBtn.click();
});
