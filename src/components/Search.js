import React, { Component } from 'react'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import * as BooksAPI from '../BooksAPI'
import Book from './Book';


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
          this.setState({queriedBooks:[]});
        } else {
          this.setState({queriedBooks: queriedBooks});
        }
      })
    } else {
      this.setState({queriedBooks:[]})
    }
  }
// Credit: Several parts of this are almost line-for-line rewritten from learning 
// Udacity controlled components course code: https://github.com/udacity/reactnd-contacts-complete/commit/ce3a9a8a0f1d8d0224eba663e512cd309fb1f804

    render() {
        return(
            <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */
                }
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
                {this.state.queriedBooks.map(
                  (queriedBooks) =>
                    <li key={queriedBooks.id}>
                      <Book
                        book={queriedBooks}
                      />
                    </li>)}
            </div>
          </div>
        )    
    }
}
export default Search