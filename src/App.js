import React, { Component } from 'react';
import MainPage  from './MainPage';
import SearchPage from './SearchPage';
import * as BooksAPI from './BooksAPI'
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
          <h1>My Books</h1>
          <h2>An interactive Bookshelf</h2>
          <MainPage />
          <SearchPage  />
      </div>
    );
  }
}

export default App;
