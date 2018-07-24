import React, {Component} from 'react';
import Bookshelf from './Bookshelf';
import Book from './Book';

class MainPage extends Component {
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>Bookshelves</h1>
                </div>
                <div className="list-books-content">
                     <div>
                        <Bookshelf title="Currently reading"/>
                        <Bookshelf title="Want to read"/>
                        <Bookshelf title="Done reading"/>
                    </div>
                </div>
                <div className="open-search">
                    <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
                </div>

            </div>
        )
    }
}

export default MainPage