import { useEffect, useState } from "react";
import "./App.css";
import { StudentForm, Students } from "./components";
// import Students from "./components/Students";
// import StudentForm from "./components/StudentForm";

const App = () => {
  const [students, setStudents] = useState([
    { name: "John", age: 20 },
    { name: "Doe", age: 25 },
  ]);

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const fetchApiData = async () => {
    // console.log("Getting Items");

    const res = await fetch("https://dummyjson.com/products");
    // fetch("https://dummyjson.com/products")
    //   .then((res) => {
    //     console.log("Items Loaded");
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log({ data });
    //   });
    // console.log("Items Loaded");
    const data = await res.json();
    setProducts(data.products);
    setLoading((prev) => !prev);
    // console.log({ data });
  };

  // console.log("products", products);

  useEffect(() => {
    fetchApiData();
  }, []);

  // TODO: Research on how useEffect is used, when to use and when not to
  // useEffect(() => {
  //   console.log("first Inside");
  //   return () => {
  //     console.log("second Inside");
  //   };
  // }, [students]);

  // console.log("first Outside");

  const handleAdd = (student) => {
    if (student.name === "" || student.age === "") {
      alert("Please fill all the fields");
      return;
    }
    setStudents((prev) => [...prev, student]);
  };

  return (
    <Container>
      <Students students={students} />
      <StudentForm handleAdd={handleAdd} />

      <Products products={products} loading={loading} />
    </Container>
  );
};

const Container = ({ children }) => {
  return <div style={{ width: "50%", margin: "auto" }}>{children}</div>;
};

const Products = ({ products, loading }) => {
  // if (loading) return <h1>Loading...</h1>;
  if (!products.length) return <h1>Loading...</h1>;

  return products.map((product) => <h1 key={product.id}>{product.title}</h1>);
};

export default App;
