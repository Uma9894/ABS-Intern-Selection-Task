import React, { useState } from 'react';

const Sidebar = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleAddToCart = () => {
    console.log(`Added to cart: ${productName}, Price: ${productPrice}`);
    setProductName('');
    setProductPrice('');
  };

  return (
    <div style={styles.sidebar}>
      
      <h2 style={styles.title}>DASHBOARD</h2>
      <ul style={styles.menu}>
        <li style={styles.menuItem}>Home</li>
       <li style={styles.menuItem}>Products</li>
        
        <li style={styles.menuItem}>Categories</li>
        <li style={styles.menuItem}>Reports</li>
        <li style={styles.menuItem}>Customers</li>
        <li style={styles.menuItem}>Settings</li>
      </ul>

      <div style={styles.productFormContainer}>
        <h3 style={styles.heading}>Add Product</h3>
        <form style={styles.form} onSubmit={(e) => { e.preventDefault(); handleAddToCart(); }}>
          <input
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="text"
            placeholder="Price"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button}>Add to Cart</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  sidebar: {
    width: '250px',
    backgroundColor: '#454545',
    color: 'white',
    padding: '20px',
    borderRadius: '20px',
    height: '150vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  menu: {
    listStyleType: 'none',
    padding: 0,
  },
  menuItem: {
    padding: '10px 0',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '28px', // Increased font size for menu items
    marginBottom: '20px', // Adds spacing between menu items
    textAlign: 'center',
  },
  productFormContainer: {
    padding: '10px',
    backgroundColor: '#f0f8ff',
    borderRadius: '8px',
    marginTop: '20px',
  },
  heading: {
    fontSize: '18px',
    marginBottom: '10px',
    color: 'black',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    marginBottom: '10px',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Sidebar;

