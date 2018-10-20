import React, { Component } from 'react'
import Book from './Book'

class Main extends Component {
     render() {
        console.log('main component' + this.props.books)
        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                            {/*Credit to Maeva NAP's walkthrough for reinforcing Udacity's teaching on map and filter https://www.youtube.com/watch?v=i6L2jLHV9j8 */}
                                {this.props.books
                                    .filter(book => book.shelf === 'currentlyReading')
                                    .map(book => (
                                        <li key={book.id}>
                                            < Book 
                                                book={book}
                                                moveBook={this.props.moveBook}
                                            />
                                        </li>
                                    ))
                                }
                            </ol>
                        </div>
                    </div>
                    <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {this.props.books
                                    .filter(book => book.shelf === 'wantToRead')
                                    .map(book => (
                                        <li key={book.id}>
                                            < Book 
                                                book={book}
                                                moveBook={this.props.moveBook}
                                            />
                                        </li>
                                    ))
                                }
                            </ol>
                        </div>
                    </div>
                    <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {this.props.books
                                    .filter(book => (book.shelf === 'read'))
                                    .map(book => (
                                        <li key={book.id}>
                                            < Book 
                                                book={book}
                                                moveBook={this.props.moveBook}
                                            /> 
                                        </li>
                                    ))
                                    }
                            </ol>
                    </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )
    }
}

export default Main