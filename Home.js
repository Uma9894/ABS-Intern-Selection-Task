

"use client"; // Add this line at the top of your file

import React, { useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';

// Sample product data
const initialProducts = [
  { name: 'Product1', price: 100, stock: 20 },
  { name: 'Product2', price: 150, stock: 15 },
  { name: 'Product3', price: 200, stock: 5 },
  { name: 'Product4', price: 75, stock: 25 },
  { name: 'Product5', price: 50, stock: 10 },
];

const Home = () => {
  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc'

  // Filter products by name based on search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort products by price or stock
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortField === 'price' || sortField === 'stock') {
      const valueA = a[sortField];
      const valueB = b[sortField];
      return sortOrder === 'asc' ? valueA - valueB : valueB - valueA;
    }
    return 0;
  });

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  return (
    <div className="dashboard">
      <div className="cards">
        <div className="card products">
          <h2>PRODUCTS</h2>
          <p>249</p>
        </div>
        <div className="card categories">
          <h2>CATEGORIES</h2>
          <p>25</p>
        </div>
        <div className="card customers">
          <h2>CUSTOMERS</h2>
          <p>1500</p>
        </div>
        <div className="card alerts">
          <h2>ALERTS</h2>
          <p>56</p>
        </div>
      </div>

      <div className="charts">
        <h3>Product Analysis Chart</h3>
        <Bar data={barChartData} options={barChartOptions} />
        <h3>Product Analysis Pie Chart</h3>
        <Pie data={pieChartData} options={pieChartOptions} />
      </div>

      <div className="product-list">
        <h3>Product List</h3>
        <input
          type="text"
          placeholder="Search by product name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ marginBottom: '10px', padding: '5px', width: '200px' }}
        />
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Product Name</th>
              <th onClick={() => handleSort('price')} style={{ cursor: 'pointer' }}>
                Price {sortField === 'price' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
              </th>
              <th onClick={() => handleSort('stock')} style={{ cursor: 'pointer' }}>
                Stock {sortField === 'stock' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedProducts.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>{product.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Styling for the table
const styles = {
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    background: '#f8f9fa',
    padding: '10px',
    border: '1px solid #ddd',
  },
  td: {
    padding: '10px',
    border: '1px solid #ddd',
  },
};

// Data for the charts
const barChartData = {
  labels: ['Product1', 'Product2', 'Product3', 'Product4', 'Product5'],
  datasets: [
    {
      label: 'Product Analysis',
      data: [12, 19, 3, 5, 2],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
      ],
    },
  ],
};

const barChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Product Analysis Bar Chart',
    },
  },
};

const pieChartData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
  datasets: [
    {
      label: 'Pie Chart Example',
      data: [12, 19, 3, 5, 2],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
      ],
    },
  ],
};

const pieChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Product Analysis Pie Chart',
    },
  },
};

export default Home;

