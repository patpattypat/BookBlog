import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home, AboutPage, BlogPage, Cards, CurrentEvents, Library, StoryPage} from './containers';
import './App.css';

function App() {
  return (
    <div className="App">
      	<BrowserRouter>
		  	<Routes>
				<Route path="/" Component={Home} />
				<Route path="/about" Component={AboutPage} />
				<Route path="/blog" Component={BlogPage} />
				<Route path="/cards" Component={Cards} />
				<Route path="/current" Component={CurrentEvents} />
				<Route path="/library" Component={Library} />
				<Route path="/stories" Component={StoryPage} />
			</Routes>
		</BrowserRouter>
    </div>
  );
}

export default App;
