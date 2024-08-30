import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { Button } from './components/ui/button';
import Home from './pages/home';
import Layout from './layout/layout'
import BirthdayCelebrator from './pages/hbd'
import Login from './pages/login'
import BirthdayCelebration from './pages/hbdcel'
import About from './pages/about'
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await axios.get('http://localhost:5000/getData');
    setData(res.data);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Router>
        <div>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hbd" element={<BirthdayCelebrator />} />
              <Route path="/login" element={<Login />} />
              <Route path="/hbdcel" element={<BirthdayCelebration />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Layout>
        </div>
      </Router>
      <div>
        {data}
        <h1>meow</h1>
      </div>
    </div>
  );
}

export default App;