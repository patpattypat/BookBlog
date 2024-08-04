import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home, AboutPage, BlogPage, Cards, News, Library, StoryPage} from './containers';
import './App.css';

function App() {
  return (
    <div className="App">
      	<BrowserRouter>
		  	<Routes>
				<Route path="/" Component={Home} />
				<Route path="/autorin" Component={AboutPage} />
				<Route path="/blog" Component={BlogPage} />
				<Route path="/karten" Component={Cards} />
				<Route path="/news" Component={News} />
				<Route path="/bibliothek" Component={Library} />
				<Route path="/bibliothek/:storyId" Component={StoryPage} />
			</Routes>
		</BrowserRouter>
    </div>
  );
}

export default App;
