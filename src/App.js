import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Posts from './components/Posts/Posts';
import Software from './components/Software/Software';
import Stories from './components/Stories/Stories';
import Story from './components/Story/Story';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/software" element={<Software />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/stories/:id" element={<Story />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;