const StudentItem = ({ student }) => {
  const cardStyle = {
    border: "1px solid #000",
    borderRadius: "5px",
    padding: "10px",
    margin: "10px",
    boxShadow: "5px 5px 10px rgba(0,0,0,0.3)",
  };

  return (
    <div style={cardStyle}>
      <p>
        Name:<span>{student.name}</span>, Age:<span>{student.age}</span>
      </p>
    </div>
  );
};

export default StudentItem;
