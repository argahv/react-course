// const Button = ({ children, onClick, style, name }) => {
//   console.log("first", onClick);
//   return (
//     <button onClick={onClick} style={style} name={name}>
//       {children}
//     </button>
//   );
// };

const Button = ({ children, ...restProps }) => {
  return (
    <button
      {...restProps}
      style={{
        backgroundColor: "red",
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
