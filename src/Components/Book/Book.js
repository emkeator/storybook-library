import React, {Component} from 'react';
import Illustrations from './../Illustrations/Illustrations';
import bookViewer from './../../images/bookBG.png';
import bookmark from './../../images/bookmark.svg';
import {Link} from 'react-router-dom';
import $ from 'jquery';
import TweenMax from 'gsap';

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
        TweenMax.to($('#BookViewer'), 2, {scale: '5', ease: TweenMax.Power1.easeIn});
        TweenMax.to($('#BookViewer'), 0, {display: 'none', delay: 2, ease: TweenMax.Power1.easeIn});        
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
                <div id="Bookmark"><img src={bookmark} alt="bookmark"/><Link to='/shelf'>To Shelf</Link></div>
            </main>
            
        );
    }
}