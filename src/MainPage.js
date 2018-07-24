import React, {Component} from 'react';
import Bookshelf from './Bookshelf';

class MainPage extends Component {
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>Bookshelves</h1>
                </div>
                <div className="list-books-content">
                     <div>
                        <Bookshelf title="Currently reading" filteredBooks={this.props.books.filter(book => book.shelf === 'currentlyReading')}/>
                        <Bookshelf title="Want to read" filteredBooks={this.props.books.filter(book => book.shelf === 'wantToRead')}/>
                        <Bookshelf title="Done reading" filteredBooks={this.props.books.filter(book => book.shelf === 'read')}/>
                    </div>
                </div>
                <div className="open-search">
                    <a>Add a book</a>
                </div>

            </div>
        )
    }
}

export default MainPage