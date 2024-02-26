const Layout = ({ children }) => {
  return (
    <div>
      <h1>Header</h1>
      {children}
      <h2>Footer</h2>
    </div>
  );
};

export default Layout;
