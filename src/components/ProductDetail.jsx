

function ProductDetail({ selectedProducts }) {
  return (
    <div>
      <h2>Detalles del Producto</h2>
      <ul>
        {selectedProducts.length > 0 ? (
          selectedProducts.map((product, index) => (
            <li key={index}>{product}</li>
          ))
        ) : (
          <li>No hay productos seleccionados.</li>
        )}
      </ul>
    </div>
  );
}

export default ProductDetail;

