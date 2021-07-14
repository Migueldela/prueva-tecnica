import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Home () { 
    return (
    <div className="App">
      <h1>Project Home</h1>
      {/* Link to List.js */}
      <Link to={'./list'}>
        <button variant="raised">
            My List
        </button>
      </Link>
    </div>
    );
}
export default Home;