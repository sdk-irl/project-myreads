import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './components/Search'
import Main from './components/Main'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: true
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }
  
  //Credit: https://stackoverflow.com/questions/28868071/onchange-event-using-react-js-for-drop-down
  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(() => BooksAPI.getAll())
    .then((books) => this.setState({books: books}))
  }

  //Credit: https://reactjs.org/docs/state-and-lifecycle.html and Udacity State Mgt Lesson helped clarify state
  render() {
    console.log(this.state.books);
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          < Search />
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
