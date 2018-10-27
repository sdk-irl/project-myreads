// Importing from React and react-router-dom
import React from 'react'
import { Link } from 'react-router-dom'
// Importing next component used in this Component
import Book from './Book'

// Used functional component here since the Book component doesn't need to hold state
// This functional component holds most of the page rendering for the main page of the app, but also renders Book component. 
// (Could have factored out more components here; would do this if I had more time)
// declare Main as a variable and pass in props (properties) from App, which were book state and moveBook
const Main = (props) => {
        return (
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
                                {/* Use properties passed in from App, which included book state, to filter for books on this shelf, 
                                 we filter first so we get only books those for currently reading, then map */}
                                {props.books
                                    .filter(book => book.shelf === 'currentlyReading')
                                    .map(book => (
                                        <li key={book.id}>
                                            {/* calling Book component, which will render book, and passing props to that component for book, moveBook and currentShelf */}
                                            < Book 
                                                book={book}
                                                moveBook={props.moveBook}
                                                // note: I had to hard code current shelf because I was not quite able to get the state to remain on the search page without this; 
                                                // realize this is not best practice but will keep working on it after P7
                                                currentShelf='currentlyReading'
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
                                {/* Use properties passed in from App, which included book state, to filter for books on this shelf, 
                                 we filter first so we get only books those for currently reading, then map */}
                                {props.books
                                    .filter(book => book.shelf === 'wantToRead')
                                    .map(book => (
                                        <li key={book.id}>
                                            {/* calling Book component, which will render book, and passing props to that component for book, moveBook and currentShelf */}
                                            < Book 
                                                book={book}
                                                moveBook={props.moveBook}
                                                // note: same note as above about hard coding currentShelf
                                                currentShelf='wantToRead'
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
                            {/* Use properties passed in from App, which included book state, to filter for books on this shelf */}
                                {props.books
                                    // we filter first so we get only books those for wantToRead, then map
                                    .filter(book => (book.shelf === 'read'))
                                    .map(book => (
                                        <li key={book.id}>
                                            {/* calling Book component, which will render book, and passing props to that component for book, moveBook and currentShelf */}
                                            < Book 
                                                book={book}
                                                moveBook={props.moveBook}
                                                // note: same note as above about hard coding currentShelf
                                                currentShelf='read'
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
            {/* Used link from React-router-DOM to route the page properly when someone clicks on the button */}
              <Link 
                to='/search' 
              >Add a book</Link>
            </div>
            </div>
        )
    }

// Export the component so that App can import it
export default Main