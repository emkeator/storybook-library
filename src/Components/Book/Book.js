import React, {Component} from 'react';
import Illustrations from './../Illustrations/Illustrations';
import bookViewer from './../../images/bookBG.png';
import bookmark from './../../images/bookmark.svg';
import {Link} from 'react-router-dom';
import $ from 'jquery';

export default class Book extends Component {

    constructor() {
        super();
        this.state = {
            bookID: null
        }
    }

    componentWillMount() {
        //check for user
        let id = this.props.match.params.id;
        this.setState({
            bookID: id
        });
        //api call to get words for each page?
        
    }

    enterBook() {
        $('#BookPage').scrollTop(200);
    }

    linkScrollToScale() {
        // $('#BookPage').scroll(() => {
            let x = $('#BookViewer').css('transform');
            // $('#BookPage').css('')
            console.log(x);
        // });
    }
    
    render() {
        
        return(
            <main id="BookPage" onScroll={() => this.linkScrollToScale()}>
                <Illustrations id={this.props.match.params.id}/>
                <div id="BookViewer">
                    <div className="top"></div>
                    <div className="left"></div>                    
                    <img src={bookViewer} alt="open book"/>
                    <div className="right"><img src={bookmark} alt="bookmark"/><Link to='/shelf'>Return to Shelf</Link></div>
                    <div className="bottom"><img src={bookmark} alt="bookmark"/><Link to='/shelf'>Return to Shelf</Link></div>                    
                </div>
            </main>
            
        );
    }
}