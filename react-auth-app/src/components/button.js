const Button = ({ children, ...restProps }) => {
  return (
    <button
      {...restProps}
      style={{
        backgroundColor: "#4CAF50",
        color: "white",
        padding: "10px",
        border: "none",
        ...restProps.style,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
