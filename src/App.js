import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './components/Search'
import Main from './components/Main'

class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: true //false for main pg, true for search
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }
  
  //Credit: Assistance from https://stackoverflow.com/questions/28868071/onchange-event-using-react-js-for-drop-down
  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(() => BooksAPI.getAll())
    .then((books) => this.setState({books: books}))
  }

  //Credit: Assistance from https://reactjs.org/docs/state-and-lifecycle.html and Udacity State Mgt Lesson helped clarify state
  render() {
    console.log(this.state.books);
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          < Search 
            books={this.state.books}
            moveBook={this.moveBook}
          />
        ) : (
          < Main
            books={this.state.books}
            moveBook={this.moveBook}
          />
        )}
      </div>
    )
  }
}

export default BooksApp
