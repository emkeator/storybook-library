import React, {Component} from 'react';
import book from './../../images/book_cover.jpg';
import {Link} from 'react-router-dom';

export default class UserShelf extends Component {

    constructor() {
        super();
        
        this.state = {
            books: [
                {
                    title: 'The Wind Blows a Gale', 
                    id: 1
                }, 
                {
                    title: 'Rapunzel', 
                    id: 2
                },
                {
                    title: 'Cinderella', 
                    id: 3
                },
                {
                    title: 'East of the Sun, West of the Moon', 
                    id: 4
                },
                {
                    title: 'Eros & Psyche', 
                    id: 5
                },
                {
                    title: 'The Sleeping Beauty in the Wood', 
                    id: 6
                },
                {
                    title: 'Tam Lin', 
                    id: 7
                },
                {
                    title: 'The Glass Hill', 
                    id: 8
                },
                {
                    title: 'The Mountain Princess', 
                    id: 9
                },
                {
                    title: 'Ondine', 
                    id: 10
                }
            ]
        }
    }

    componentWillMount() {
        //check if a user is on session
    }

    renderBook(book) {
        return(
            <li>
                <Link to={`/book/${book.id}`}><div className="book">
                    <h1 className="bookOverlay">{book.title}</h1>
                </div></Link>
            </li>
        );
    }

    render() {
        return(
            <main id="Shelf">
                <ul>
                    {this.state.books.map((book) => this.renderBook(book))}
                </ul>
            </main>
        );
    }
}