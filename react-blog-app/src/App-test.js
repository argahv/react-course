import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import PostDetail from "./components/PostDetail";
import { AppProvider } from "./context/AppContext";

const App = () => {
  return (
    <AppProvider>
      <h1>Navbar</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:postId" element={<PostDetail />} />
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;
