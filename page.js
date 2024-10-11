"use client"; // Add this line at the top of your file

import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement, // Import ArcElement
} from 'chart.js';

// Register the necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement, // Register ArcElement for Pie charts
  Title,
  Tooltip,
  Legend
);

const Page = () => {
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

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Header />
        <div style={styles.dashboardContainer}>
          <div style={{ ...styles.box, backgroundColor: '#007bff' }}>
            <h2>PRODUCTS</h2>
            <p style={styles.count}>249</p>
          </div>
          <div style={{ ...styles.box, backgroundColor: '#ff8c00' }}>
            <h2>CATEGORIES</h2>
            <p style={styles.count}>25</p>
          </div>
          <div style={{ ...styles.box, backgroundColor: '#28a745' }}>
            <h2>CUSTOMERS</h2>
            <p style={styles.count}>1500</p>
          </div>
          <div style={{ ...styles.box, backgroundColor: '#dc3545' }}>
            <h2>ALERTS</h2>
            <p style={styles.count}>56</p>
          </div>
        </div>
        <div style={styles.chartContainer}>
          <h3>Product Analysis Chart</h3>
          <Bar data={barChartData} options={barChartOptions} />
          <h3>Product Analysis Pie Chart</h3>
          <Pie data={pieChartData} options={pieChartOptions} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  dashboardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    padding: '20px',
  },
  box: {
    color: '#fff',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
  },
  count: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  chartContainer: {
    marginTop: '20px',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#f8f9fa',
    textAlign: 'center',
    width: '500px',  // Corrected to be a string
    height: '300px', // Corrected to be a string
    margin: '0 auto',
  },
};

export default Page;

/*"use client"; // Add this line at the top of your file

import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

// Register the necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Page = () => {
  // Sample product data
  const initialProducts = [
    { name: 'Product 1', price: 100, stock: 20 },
    { name: 'Product 2', price: 150, stock: 15 },
    { name: 'Product 3', price: 200, stock: 10 },
    { name: 'Product 4', price: 250, stock: 8 },
    { name: 'Product 5', price: 300, stock: 5 },
  ];

  // State for filtering and sorting
  const [products, setProducts] = useState(initialProducts);
  const [sortKey, setSortKey] = useState('');
  const [filterText, setFilterText] = useState('');

  // Handle filtering
  const handleFilterChange = (event) => {
    const value = event.target.value.toLowerCase();
    setFilterText(value);
    setProducts(
      initialProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(value)
      )
    );
  };

  // Handle sorting
  const handleSort = (key) => {
    const sortedProducts = [...products].sort((a, b) =>
      a[key] > b[key] ? 1 : -1
    );
    setProducts(sortedProducts);
    setSortKey(key);
  };

  // Data for Bar and Pie Charts (same as your previous implementation)
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

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Header />

       
        <div style={styles.dashboardContainer}>
          <div style={{ ...styles.box, backgroundColor: '#007bff' }}>
            <h2>PRODUCTS</h2>
            <p style={styles.count}>249</p>
          </div>
          <div style={{ ...styles.box, backgroundColor: '#ff8c00' }}>
            <h2>CATEGORIES</h2>
            <p style={styles.count}>25</p>
          </div>
          <div style={{ ...styles.box, backgroundColor: '#28a745' }}>
            <h2>CUSTOMERS</h2>
            <p style={styles.count}>1500</p>
          </div>
          <div style={{ ...styles.box, backgroundColor: '#dc3545' }}>
            <h2>ALERTS</h2>
            <p style={styles.count}>56</p>
          </div>
        </div>

        <div style={styles.chartContainer}>
          <h3>Product Analysis Chart</h3>
          <Bar data={barChartData} options={barChartOptions} />
          <h3>Product Analysis Pie Chart</h3>
          <Pie data={pieChartData} options={pieChartOptions} />
        </div>

        <div style={styles.tableContainer}>
          <h3>Product List</h3>
          <input
            type="text"
            placeholder="Filter products..."
            value={filterText}
            onChange={handleFilterChange}
            style={styles.filterInput}
          />
          <table style={styles.table}>
            <thead>
              <tr>
                <th onClick={() => handleSort('name')}>
                  Name {sortKey === 'name' && '▼'}
                </th>
                <th onClick={() => handleSort('price')}>
                  Price {sortKey === 'price' && '▼'}
                </th>
                <th onClick={() => handleSort('stock')}>
                  Stock {sortKey === 'stock' && '▼'}
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.stock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Styles
const styles = {
  dashboardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    padding: '20px',
  },
  box: {
    color: '#fff',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
  },
  count: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  chartContainer: {
    marginTop: '20px',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#f8f9fa',
    textAlign: 'center',
    width: '500px',
    height: '300px',
    margin: '0 auto',
  },
  tableContainer: {
    marginTop: '40px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    textAlign: 'center',
  },
  filterInput: {
    marginBottom: '10px',
    padding: '10px',
    width: '100%',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '10px',
  },
  th: {
    cursor: 'pointer',
  },
  td: {
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
};

export default Page;*/



