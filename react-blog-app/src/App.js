import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PostDetail from './components/PostDetail';
import { AppProvider } from './context/AppContext';

const App = () => {
  return (
    <AppProvider>
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