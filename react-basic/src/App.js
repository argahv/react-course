import { useState } from "react";

const App = () => {
  const [students, setStudents] = useState([
    { name: "John", age: 20 },
    { name: "Doe", age: 25 },
  ]);
  const [student, setStudent] = useState({
    name: "",
    age: "",
  });
  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");

  // const onNameChange = (event) => {
  //   console.log("name", event.target.name);
  //   const { value } = event.target;
  //   // setStudent({
  //   //   name: value,
  //   // });
  //   setStudent((prev) => ({
  //     ...prev,
  //     name: value,
  //   }));

  //   // setName(value);
  // };

  const handleInput = (e) => {
    const { value, name } = e.target;

    setStudent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log("students", students);

  const handleAdd = (e) => {
    e.preventDefault();

    setStudents((prev) => [...prev, student]);
  };

  return (
    <>
      {/* {students.map((student, i) => {
        return (
          <div key={student.name}>
            <p>
              Name:<span>{student.name}</span>, Age:<span>{student.age}</span>
            </p>
          </div>
        );
      })} */}

      <Students students={students} testProps={"Test"} />
      {/* <AddStudent student={student} handleAdd={handleAdd} /> */}

      <div>
        <form onSubmit={handleAdd}>
          <input
            type='text'
            placeholder='Name'
            onChange={handleInput}
            // onChange={onNameChange}
            name='name'
          />
          <input
            type='number'
            placeholder='Age'
            onChange={handleInput}
            // onChange={onAgeChange}
            name='age'
          />
          <button type='submit'>Add</button>
        </form>
      </div>
    </>
  );
};

const Students = ({ students }) => {
  return students.map((student, i) => {
    return (
      <div key={student.name}>
        <p>
          Name:<span>{student.name}</span>, Age:<span>{student.age}</span>
        </p>
      </div>
    );
  });
};
export default App;
