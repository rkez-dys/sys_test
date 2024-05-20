// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Detail from './Detail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;


// Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const navigateToDetail = () => {
    const id = 123;
    const name = 'JohnDoe';
    const age = 30;
    navigate(`/detail/${id}?name=${name}&age=${age}`);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={navigateToDetail}>Go to Detail</button>
    </div>
  );
}

export default Home;

