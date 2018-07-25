import React, { Component } from "react";
import { Route } from "react-router-dom";
import MainPage from "./MainPage";
import SearchPage from "./SearchPage";
import * as BooksAPI from "./BooksAPI";
import "./App.css";

class App extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books: books });
    });
  }

  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(
      BooksAPI.getAll().then(books => {
        this.setState({ books: books });
      })
    );
  };

  render() {

    console.log(this.state.books);

    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <MainPage books={this.state.books} moveBook={this.moveBook} />
          )}
        />
        <Route
          exact
          path="/search"
          render={() => <SearchPage books={this.state.books} moveBook={this.moveBook} />}
        />
      </div>
    );
  }
}

export default App;
