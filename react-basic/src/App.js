import { useState } from "react";

const App = () => {
  const [num, setNumber] = useState(5);
  const [students, setStudents] = useState([
    { name: "John", age: 20 },
    { name: "Doe", age: 25 },
  ]);

  const increaseNumber = () => {
    setNumber(num + 1);
  };

  const renderStudents = () =>
    students.map((student, i) => {
      return (
        <div key={student.name}>
          <p>
            Name:<span>{student.name}</span>, Age:<span>{student.age}</span>
          </p>
        </div>
      );
    });

  return (
    <>
      <h1>{num}</h1>
      <div>
        <button onClick={increaseNumber}>
          {/* onClick={() => {
            setNumber(num + 1);
          }}> */}
          Increase
        </button>
      </div>

      <div>{[<li>Item1</li>, <li>Item2</li>]}</div>
      <div>{renderStudents()}</div>
      {/* <div>
        {students.map((student, i) => {
          return <li key={i}>{student.name}</li>;
        })}
      </div> */}
    </>
  );
};

export default App;
