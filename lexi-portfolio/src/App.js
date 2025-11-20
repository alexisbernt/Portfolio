// App.js
import React from 'react';
import './css/App.css';
import './css/Navbar.css';
import './css/PortfolioGrid.css';
import './css/RunningLog.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import PortfolioGrid from './PortfolioGrid';

import About from './pages/About';
import AI from './pages/AI';
import TheraText from './pages/TheraText';
// import CyberClub from './pages/CyberClub';
import More from './pages/More';
import RunningLog from './pages/RunningLog';
import LearningLog from './pages/LearningLog';
import Funding from './pages/Funding';
import Post1 from './pages/Posts/LearningPost1-RAG';
import Post2 from './pages/Posts/LearningPost2';
import Post3 from './pages/Posts/LearningPost3';
import Post4 from './pages/Posts/LearningPost4';
import Post6 from './pages/Posts/LearningPost6';
import SignUp from './pages/SignUp';
import Gifts from './pages/Gifts';
import CreateGift from './pages/CreateGift';
import Coins from './pages/eBay';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="main-container">
          <Navbar />
          <Routes>
            <Route path="/" element={<PortfolioGrid />} />
            <Route path="/about" element={<About />} />
            <Route path="/coins" element={<Coins/>} />
            <Route path="/ai" element={<AI />} />
            <Route path="/theratext" element={<TheraText />} />
            {/* <Route path="/cyberclub" element={<CyberClub />} /> */}
            <Route path="/more" element={<More />} />
            <Route path="/running-log" element={<RunningLog />} />
            <Route path="/learninglog" element={<LearningLog />} />
            <Route path="/post1" element={<Post1 />} />
            <Route path="/post2" element={<Post2 />} />
            <Route path="/post3" element={<Post3 />} />
            <Route path="/post4" element={<Post4 />} />
            <Route path="/post6" element={<Post6 />} />
            {/* Funding needs to be linked  */}
            <Route path="/funding" element={<Funding />} /> 
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/giftcycle" element={<Gifts />} />
            <Route path="/create-gift" element={<CreateGift />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
