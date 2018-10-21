import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './components/Search'
import Main from './components/Main'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: []
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
    return (
      <div className="app">
        <Route path='/' render={() => (
          < Main
            books={this.state.books}
            moveBook={this.moveBook}
          />
        )}
        />
         <Route path='/search' render={() => (
          < Search 
            books={this.state.books}
            moveBook={this.moveBook}
          />
        )} 
        /> 
      </div>
    )
  }
}

export default BooksApp
