// Imports needed from react and BookMover component for this component to function
import React from 'react'
import BookMover from './BookMover'

//Used functional component here since the Book component doesn't need to hold state
const Book = (props) => {
        // allow imageURL to render as nothing to keep code from throwing error, even if there is no thumbnail image
        let imageURL = props.book.imageLinks ? props.book.imageLinks.smallThumbnail : ''
        return(
            <div className="book">
                <div className="book-top">
                {/* Static render of book cover */}
                <div 
                    className="book-cover" 
                    style= {{ 
                        width: 128, 
                        height: 193, 
                        backgroundImage: `url(${imageURL})` 
                        }}>
                    </div>
                {/* Render BookMover component and pass all properties for book, moveBook, and shelf to BookMover */}
                < BookMover
                    book={props.book}
                    moveBook={props.moveBook}
                    shelf={props.currentShelf}
                />
                </div>
                { /* Pass in book title and book authors with properties to render on page, no separate components needed*/ }
                <div className="book-title">{props.book.title}</div>
                <div className="book-authors">{props.book.authors}</div>
            </div>
        )
    }

// Export the Book component so that Main can import it
export default Book