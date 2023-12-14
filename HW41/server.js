const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

const rawData = fs.readFileSync('data.json');
const products = JSON.parse(rawData);

app.get('/search', (req, res) => {
  const query = req.query.query;
  const minPrice = parseFloat(req.query.minPrice);
  const maxPrice = parseFloat(req.query.maxPrice);
  const productName = req.query.productName;
  const productId = parseInt(req.query.productId);

  let results = products;

  if (query) {
    if (query === 'yes') {
      results = results.filter(product => product.productStock === true);
    } else if (query === 'no') {
      results = results.filter(product => product.productStock === false);
    }
  }

  if (!isNaN(minPrice) && !isNaN(maxPrice)) {
    results = results.filter(product => product.productPrice >= minPrice && product.productPrice <= maxPrice);
  }

  if (query && !isNaN(minPrice) && !isNaN(maxPrice)) {
    results = results.filter(product => 
      (query === 'yes' && product.productStock === true) || 
      (query === 'no' && product.productStock === false)
    );
  }

  if (productName) {
    results = results.filter(product => product.productName.toLowerCase().includes(productName.toLowerCase()));
  }

  if (!isNaN(productId)) {
    const productById = results.find(product => product.productId === productId);
    results = productById ? [productById] : [];
  }

  res.json(results);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
