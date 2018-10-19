import React, { Component } from 'react'

class BookMover extends Component {
    render() {
        return(
            <div className="book-shelf-changer">
                {/*Credit: https://reactjs.org/docs/forms.html and Dan Abramov on CodePen:https://codepen.io/gaearon/pen/JbbEzX?editors=0010 */}
                <select onChange = {this.props.moveBook()}>
                <option value="move" disabled>Move to... </option>
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