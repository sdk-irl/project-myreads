import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './components/Search'
import Main from './components/Main'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
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
            //pass in state properties to main page
            books={this.state.books} 
          />
        )}
      </div>
    )
  }
}

export default BooksApp
