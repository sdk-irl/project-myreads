import React, { Component } from 'react'
import BookMover from './BookMover'
import PropTypes from 'prop-types'

class Book extends Component {
    render() {
        console.log('book.js', this.props)
        return(
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.smallThumbnail})` }}></div>
                < BookMover
                    book={this.props.book}
                    moveBook={this.props.moveBook}
                    shelf={this.props.shelf}
                />
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors}</div>
            </div>
        )
    }
}

export default Book