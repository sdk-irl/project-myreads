import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'
import { Link } from 'react-router-dom'

class Search extends Component {
  state = {
    query: '',
    queriedBooks: []
  }

  updateQuery = (query) => {
    this.setState({query: query})
    this.getQueriedBooks(query)
  }

  getQueriedBooks = (query) => {
    if (query) {
      BooksAPI.search(query).then((queriedBooks) => {
        if (queriedBooks.error) {
          this.setState({queriedBooks:[]})
        } else {
          this.setState({queriedBooks: queriedBooks});
        }
     })
    } else {
      this.setState({queriedBooks:[]})
    }
  }

// Credit: Learned this from, but also rewrote some parts of code almost line-for-line from  
// Udacity controlled components course code: https://github.com/udacity/reactnd-contacts-complete/commit/ce3a9a8a0f1d8d0224eba663e512cd309fb1f804
// Significant help in this section from Maeva's walkthrough https://www.youtube.com/watch?v=i6L2jLHV9j8, 
// troubleshooting assistance from @drunkenkismet and @carlos[FEND] on Slack DM
    render() {
        return(
            <div className="search-books">
            <div className="search-books-bar"> 
              <Link
                to='/'
                className="close-search" 
              >Close</Link>
              <div className="search-books-input-wrapper">
                <input 
                  type="text" 
                  placeholder="Search by title or author"
                  value = {this.state.query}
                  onChange = {(event) => this.updateQuery(event.target.value)}
                />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
                {this.state.queriedBooks.map((queriedBook) => {
                    let shelf;
                    this.props.books.map(book => (
                      book.id === queriedBook.id ?
                      shelf = book.shelf : shelf = 'none'
                    ))

                    return (
                    <li key={queriedBook.id}>
                      <Book
                        book={queriedBook}
                        moveBook={this.props.moveBook}
                        currentShelf={shelf}
                      />
                    </li>
                    )
                  })
                }
            </div>
        </div>
        )    
    }
}
export default Search