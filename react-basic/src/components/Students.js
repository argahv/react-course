import StudentItem from "./StudentItem";

const Students = ({ students }) => {
  return students.map((student, i) => (
    <StudentItem key={i} student={student} />
  ));
};

export default Students;
