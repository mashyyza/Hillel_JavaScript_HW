// Функція для виконання запитів
function makeRequest(method, url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        callback(JSON.parse(xhr.responseText));
      }
    };
    xhr.send();
  }
  
  // Запит для отримання списку категорій
  makeRequest('GET', 'https://fakestoreapi.com/products/categories', function (categories) {
    let categoriesDiv = document.getElementById('categories');
    categories.forEach(function (category) {
      let categoryButton = document.createElement('button');
      categoryButton.innerText = category;
      categoryButton.addEventListener('click', function () {
        // Запит для отримання товарів обраної категорії
        makeRequest('GET', 'https://fakestoreapi.com/products/category/' + category, function (products) {
          let productsDiv = document.getElementById('products');
          productsDiv.innerHTML = '';
          products.forEach(function (product) {
            let productButton = document.createElement('button');
            productButton.innerText = product.title;
            productButton.addEventListener('click', function () {
              // Вивід інформації про обраний товар
              let productInfoDiv = document.getElementById('productInfo');
              productInfoDiv.innerHTML = '';
              let productTitle = document.createElement('h2');
              productTitle.innerText = product.title;
              let productDescription = document.createElement('p');
              productDescription.innerText = product.description;
              let buyButton = document.createElement('button');
              buyButton.innerText = 'Buy';
              buyButton.addEventListener('click', function () {
                alert('The product is bought!');
                // Повернення до вихідного стану
                productInfoDiv.innerHTML = '';
              });
              productInfoDiv.appendChild(productTitle);
              productInfoDiv.appendChild(productDescription);
              productInfoDiv.appendChild(buyButton);
            });
            productsDiv.appendChild(productButton);
          });
        });
      });
      categoriesDiv.appendChild(categoryButton);
    });
  });