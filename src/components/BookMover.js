import React, { Component } from 'react'

class BookMover extends Component {
    render() {
        console.log(this.props)
        console.log(this.props.book.state)
        return(
            <div className="book-shelf-changer">
                {/*Credit: https://reactjs.org/docs/handling-events.html and https://github.com/muicss/mui/issues/73*/}
                <select 
                    onChange = {(event) => this.props.moveBook(this.props.book, event.target.value)}
                    value = {this.props.book.shelf}
                >
                <option value="move">Move to... </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default BookMover