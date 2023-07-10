import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Join from './pages/Join';
import PostList from './pages/PostList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/postList" element={<PostList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
