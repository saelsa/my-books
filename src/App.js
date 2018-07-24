import React, { Component } from 'react';
import MainPage  from './MainPage';
import SearchPage from './SearchPage';
import * as BooksAPI from './BooksAPI'
import './App.css';


class App extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }
 
    

  render() {

       //debugging
       console.log(this.state.books);

    return (
      <div>
          <h1>My Books</h1>
          <h2>An interactive Bookshelf</h2>
          <MainPage books={this.state.books}/>
          <SearchPage  />
      </div>
    );
  }
}

export default App;
