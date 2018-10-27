// Importing from React
import React from 'react'
import { Route } from 'react-router-dom'
// Importing other components
import Search from './components/Search'
import Main from './components/Main'
// Importing CSS and api
import './App.css'
import * as BooksAPI from './BooksAPI'

//Sets initial state of BooksApp books
class App extends React.Component {
  state = {
    books: []
  }

// When called (invoked immediately after the component is inserted into the DOM) gets all books 
// from BooksAPI and sets the state of book variable to equal the books array from BooksAPI
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }
  
  // Credit: Assistance from https://stackoverflow.com/questions/28868071/onchange-event-using-react-js-for-drop-down
  // This is called in the BookMover component, when the user clicks the drop-down menu on the book (called book-shelf-changer).   
  // It calls the BookAPI, sets the book and shelf of the books, and then resets the state of the books (which rerenders on the appropriate shelf)
  // This state is kept in the App.js file so that it can be passed down to other components
  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(() => BooksAPI.getAll())
    .then((books) => this.setState({books: books}))
  }

  // Credit: Assistance from https://reactjs.org/docs/state-and-lifecycle.html and Udacity State Mgt Lesson helped clarify state, understanding when to use this.state
  // There are two pages in the app, so depending on the React route, this will either direct the user to the main page or the search page. 
  // This is the normal render section of the component that calls the Main and Search components and passes in properties (one of which is state) to the components
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <Main
            books={this.state.books}
            moveBook={this.moveBook}
          />
        )}
        />
         <Route path='/search' render={() => (
          <Search 
            books={this.state.books}
            moveBook={this.moveBook}
          />
        )}
        />
      </div>
    )
  }
}

// Exports the App component into the index file so it can be called at root
export default App
