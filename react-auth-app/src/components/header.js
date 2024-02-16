import React from "react";

const Header = () => {
  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    backgroundColor: "#f5f5f5",
    borderBottom: "1px solid #ddd",
  };

  const menuStyle = {
    listStyleType: "none",
    display: "flex",
    gap: "10px",
  };

  const menuItemStyle = {
    cursor: "pointer",
    color: "#333",
  };

  return (
    <header style={headerStyle}>
      <h1>My App</h1>
      <ul style={menuStyle}>
        <li style={menuItemStyle}>Home</li>
        <li style={menuItemStyle}>About</li>
        <li style={menuItemStyle}>Services</li>
        <li style={menuItemStyle}>Contact</li>
      </ul>
    </header>
  );
};

export default Header;
