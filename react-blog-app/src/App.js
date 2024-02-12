import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import PostDetail from "./pages/post-detail";

const Header = () => {
  return <p>Header</p>;
};

const Footer = () => {
  return <p>Footer</p>;
};

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        {/* <Route path="/posts" element={<PostDetail />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
