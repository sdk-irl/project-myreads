// Lowest level component, so only react import needed to make this component function
import React from 'react'

//Used functional component here since the BookMover component doesn't need to hold state
const BookMover = (props) => {
        return (
            <div className="book-shelf-changer">
                {/*Credit: https://reactjs.org/docs/handling-events.html and https://github.com/muicss/mui/issues/73 
                This is a menu that, when changed, passes in our change event as an argument to the arrow function.
                Our change, event.target.value, is whatever shelf the user changes the book to. 
                moveBook is a function I wrote originally in the App component that sets the book and shelf of the books, 
                so in this case we're setting the shelf property of the book. If there is no property changed, then 
                the default value will be its current shelf. App still holds the state of the book. */}
                <select 
                    onChange = {(event) => props.moveBook(props.book, event.target.value)}
                    defaultValue = {props.shelf}
                >
                { /* Static menu before user selection */ }
                <option value="move">Move to... </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
                </select>
            </div>
        )
    }

// Export the BookMover component so that Book can import it
// This is how properties like shelf value get exported
export default BookMover