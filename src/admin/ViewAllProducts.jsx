import { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';
import './admin.css';
import CustomerFooter from '../customer/CutomerFooter';

const ViewAllProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${config.url}/product/viewallproducts`);
      setProducts(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch products. ' + err.message);
    }
  };

  return (
    <div className="product-grid-container">
      <h3 className="product-heading">All Events</h3>

      {error && <p className="text-danger">{error}</p>}

      <div className="card-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img
              src={`${config.url}/product/displayproductimage?id=${product.id}`}
              alt="Product"
              className="product-image"
            />
            <div className="product-details">
              <h4>{product.name}</h4>
              <p><strong>Category:</strong> {product.category}</p>
              <p><strong>Description:</strong> {product.description}</p>
              <p><strong>Cost:</strong> ₹{product.cost}</p>
              <a href={product.url} target="_blank" rel="noopener noreferrer" className="product-link">
                Visit Event
              </a>
            </div>
          </div>
        ))}
      </div>
      <CustomerFooter/>
    </div>
  );
};

export default ViewAllProducts;