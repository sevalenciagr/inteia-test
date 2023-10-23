import React, { useState } from 'react';
import './App.css';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';

function App() {
  const [showProductDetail, setShowProductDetail] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleShowProductDetail = (selected) => {
    setSelectedProducts(selected);
    setShowProductDetail(true);
  };

  return (
    <>
      {showProductDetail ? (
        <ProductDetail selectedProducts={selectedProducts} />
      ) : (
        <Products onShowProductDetail={handleShowProductDetail} />
      )}
    </>
  );
}

export default App;
