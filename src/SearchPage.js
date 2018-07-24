import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class SearchPage extends Component {
    state = {
      query: '',
      searchResults: ''
    }

    updateQuery = (query) => {
      this.setState({
        query: query
      })
      this.searchBooks(query)
    }

    searchBooks = (query) => {
      if (query) {
        BooksAPI.search(query).then((searchResults) => {
          if (searchResults.error) {
            this.setState( { searchResults: [] })
          } else {
            this.setState( { searchResults : searchResults })
          }
        })
      } else {
        this.setState({ searchResults: [] })
      }

    }


    render() {
        return (
          <div className="search-books">
            <div className="search-books-bar">
              
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              
              <div className="search-books-input-wrapper">
   
                <input 
                  type="text" 
                  placeholder="Search by title or author"
                  value={this.state.query}
                  onChange={(event) => this.updateQuery(event.target.value)}
                  />
              </div>

            </div>
            <div className="search-books-results">
              <ol className="books-grid">

                {
                  (this.state.query.length > 0 && this.state.searchResults.length) > 0 &&

                  this.state.searchResults.map(searchResults => (
                    <li key={searchResults.id}>
                      {searchResults.title}
                      <Book book={searchResults} />

                    </li>

                  ))
                }

              </ol>
            </div>
          </div>
        )
    }
}

export default SearchPage