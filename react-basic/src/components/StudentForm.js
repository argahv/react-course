import { useState } from "react";

const StudentForm = ({ handleAdd }) => {
  const [student, setStudent] = useState({
    name: "",
    age: "",
  });

  const handleInput = (e) => {
    const { value, name } = e.target;

    setStudent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(student);
    setStudent({ name: "", age: "" });
  };

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Name'
          onChange={handleInput}
          name='name'
          value={student.name}
          className='input'
        />
        <input
          type='number'
          placeholder='Age'
          onChange={handleInput}
          name='age'
          value={student.age}
          className='input'
        />
        <button type='submit' className='button'>
          Add
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
