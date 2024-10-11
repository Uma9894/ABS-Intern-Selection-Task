
// Header.js
import React from 'react';
import { FaSearch, FaUserCircle } from 'react-icons/fa'; // Importing search and user icons

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Dashboard</h1>
      <div style={styles.rightSection}>
        <div style={styles.searchContainer}>
          <input type="text" placeholder="Search..." style={styles.searchInput} />
          <FaSearch style={styles.searchIcon} />
        </div>
        <FaUserCircle style={styles.profileIcon} />
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#ADD8E6', // Light blue color
    color: '#333', // Darker text color
  },
  title: {
    fontSize: '24px',
    margin: 0,
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    marginRight: '20px',
  },
  searchInput: {
    padding: '8px 30px 8px 10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    outline: 'none',
  },
  searchIcon: {
    position: 'absolute',
    right: '10px',
    color: '#333', // Color for the search icon
  },
  profileIcon: {
    fontSize: '24px',
    color: '#333', // Color for the profile icon
  },
};

export default Header;



