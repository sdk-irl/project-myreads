// Imports needed from React and react-router-dom in this component
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// Imports from another component, book, and the BooksAPI
import * as BooksAPI from '../BooksAPI'
import Book from './Book'

// Sets initial state of Search query and queried books
class Search extends Component {
  state = {
    query: '',
    queriedBooks: []
  }
// Updates search query when a new letter is typed in or removed from search box, using setState
// Passes in query, which is the event target value (the typed or removed letter) from input's onChange
  updateQuery = (query) => {
    this.setState({query: query})
    this.getQueriedBooks(query)
  }

// Called in updateQuery to actually obtain the queried books
  getQueriedBooks = (query) => {
    if (query) {
      //nested if/else to handle the query returning nothing and to handle query errors
      BooksAPI.search(query).then((queriedBooks) => {
        // if queriedBooks returns an error or no books, setstate of (which renders) queriedBooks to be an empty array, 
        // so nothing will show up if the search doesn't match any books; the search contains a limited number of options, 
        // and not all books listed are included
        if (queriedBooks.error) {
          this.setState({queriedBooks:[]})
        } else {
        // otherwise, set the state of the queried books to be queriedBooks
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
// troubleshooting assistance from @carlos[FEND], 
// but mostly from @drunkenkismet on Slack DM when I couldn't get bookshelf to render properly in Search page
    render() {
      //renders everything on Search page with JSX
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
                  // sets value to input value state, which is initialized to an empty string at beginning of Search component
                  value = {this.state.query}
                  // sets input onChange in motion by calling updateQuery function and passing in the event target, which contains the value the user types
                  onChange = {(event) => this.updateQuery(event.target.value)}
                />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
              {/* Get state of queried books from this component, initialized above, then pass in to function */}
                {this.state.queriedBooks.map((queriedBook) => {
                    let shelf;
                {/* Credit: @drunkenkismet helped me here with forEach rather than a map, and to understand why to use null instead of none.
                For each book, when the book ID, which is a string of letters and characters, is equal to the list of book ids that we 
                queried, we set the shelf to equal book.shelf. If it is false, we give it a value of null */}
                    this.props.books.forEach(book => (
                      book.id === queriedBook.id ? shelf = book.shelf : null
                    ));

                    // TODO: work more on layout of this page
                    return (
                    <li key={queriedBook.id}>
                      <Book
                        book={queriedBook}
                        moveBook={this.props.moveBook}
                        // This ternary operator handles what happens if a shelf is updefined when we send this property back to the book component
                        currentShelf={shelf === undefined ? 'none' : shelf}
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

// Export the Search component so that App can import it
export default Search