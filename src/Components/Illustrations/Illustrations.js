import React, {Component} from 'react';
import mountains from './../../images/mountain_PNG30.png';
import arches1 from './../../images/arches1_long.png';
import arches2 from './../../images/arches2_long.png';
import bryce1 from './../../images/bryce1_long.png';
import bryce2 from './../../images/bryce2_long.png';
import skiing1 from './../../images/skiing1_long.png';
import skiing2 from './../../images/skiing2_long.png';
import yosemite1 from './../../images/yosemite1_long.png';
import yosemite2 from './../../images/yosemite2_long.png';
import guardsman from './../../images/guardsman_long.png';
import sunset from './../../images/sunset.jpg';
import TweenMax from 'gsap';
import $ from 'jquery';

export default class Illustrations extends Component {
    
    constructor() {
        super();
        
        this.state = {
            currentPage: 1,
            numPages: 0
        }
    }

    componentWillMount(){
        switch(this.props.id) {
            case('4'):
                this.setState({
                    numPages: 6
                });
                break;
            default:
                this.setState({
                    numPages: 6
                })
                break;
        }
        
    }

    forward() {
        let i = this.state.currentPage
        TweenMax.to($(`.page${i}`), 4, {scale: '10', bottom: '-2000px', delay: '0.5', ease: TweenMax.Power1.easeIn});
        TweenMax.to($(`.page${i}second`), 3, {scaleX: '10', scaleY:'-10', bottom: '-2000px', delay: '0.5',ease: TweenMax.Power1.easeIn});
        TweenMax.to($(`.page${i}`), 3, {opacity: '0', delay: '1', ease: TweenMax.Power1.easeIn});
        TweenMax.to($(`.page${i}second`), 3, {opacity: '0', delay: '1',ease: TweenMax.Power1.easeIn});              
        
        TweenMax.to($(`.page${i + 1}`), 3, {scale: '1', bottom: '0px', delay: '0.1', ease: TweenMax.Power1.easeOut});
        TweenMax.to($(`.page${i + 1}second`), 2, {scaleX: '1', scaleY:'-1', bottom: '20px', delay: '0.1',ease: TweenMax.Power1.easeOut});

        TweenMax.to($(`.page${i + 2}`), 3, {scale: '0.55', bottom: '-125px', delay: '0.1', ease: TweenMax.Power1.easeOut});
        TweenMax.to($(`.page${i + 2}second`), 2, {scaleX: '0.55', scaleY:'-0.55', bottom: '-105px', delay: '0.1',ease: TweenMax.Power1.easeOut});
        
        if(i === this.state.numPages - 1){
            TweenMax.to($('.background'), 3, {opacity: '1', delay: '0',ease: TweenMax.Power1.easeIn})
        }

        if(i < this.state.numPages) i += 1;
        this.setState({
            currentPage: i
        });
    }

    backward(){
        let x = this.state.currentPage;       
        if(x > 1) x -= 1;    
        this.setState({
            currentPage: x
        });

        if(x === this.state.numPages - 1){
            TweenMax.to($('.background'), 2, {opacity: 0, delay: '0',ease: TweenMax.Power1.easeIn})
        }

        TweenMax.to($(`.page${x}`), 3, {scale: '1', bottom: '0px', opacity: '1', delay: '-1',ease: TweenMax.Power1.easeInOut});
        TweenMax.to($(`.page${x}second`), 4, {scaleX: '1', scaleY:'-1', bottom: '20px', opacity: '1', delay: '-1',ease: TweenMax.Power1.easeInOut});                
        
        TweenMax.to($(`.page${x + 1}`), 4, {scale: '0.55', bottom: '-125px', delay: '-0.5', ease: TweenMax.Power1.easeInOut});
        TweenMax.to($(`.page${x + 1}second`), 3, {scaleX: '0.55', scaleY:'-0.55', bottom: '-105px', delay: '-0.5', ease: TweenMax.Power1.easeInOut});

        TweenMax.to($(`.page${x + 2}`), 4, {scale: '0.5', bottom: '-142px', delay: '-0.5', ease: TweenMax.Power1.easeInOut});
        TweenMax.to($(`.page${x + 2}second`), 3, {scaleX: '0.5', scaleY:'-0.5', bottom: '-142px', delay: '-0.5', ease: TweenMax.Power1.easeInOut});
    }
    renderIllus(id) {
        switch (+id) {
            case 4:
                return(
                    <div id="Book4">
                        <img className="layer background" src={sunset} alt="sunset"/>
                        <img className="layer page6" src={guardsman} alt="girl on mountain"/>
                        <div className="layer page6"><p>She also loved to read, and created Tessellax Storybook Library as a Web Developer.<br/><br/>Shop the store to add Tessellax Storybooks to your shelf.</p></div>                                                                                                                                                                                                               
                        <img className="layer page5second" src={yosemite2} alt="yosemite valley"/>
                        <img className="layer page5" src={yosemite1} alt="yosemite girl"/>
                        <div className="layer page5"><p>...and to travel.</p></div>                                                                                                                                                                                                                                      
                        <img className="layer page4second" src={skiing2} alt="skiing mountains"/>
                        <img className="layer page4" src={skiing1} alt="skiing girl"/> 
                        <div className="layer page4"><p>...and to ski...</p></div>                                                                                                                                                                                       
                        <img className="layer page3second" src={bryce2} alt="hiking bryce canyon"/>                                               
                        <img className="layer page3" src={bryce1} alt="hiking girl"/>
                        <div className="layer page3"><p>She loved to hike...</p></div>                                                                                                                                                               
                        <img className="layer page2" src={arches2} alt="arches with a woman"/>
                        <div className="layer page2"><p>There was a girl from Utah named Emily.</p></div>                                                                                                                                      
                        <img className="layer page1" src={arches1} alt="arches"/> 
                        <div className="layer page1"><p>Once upon a time...</p></div>  
                    </div>
                );
                break;
            
            case 1:
                return(
                    <div id="Book1">
                        <img className="layer" src={mountains} alt="mountains"/>
                        <img className="layer" src={mountains} alt="mountains"/>
                        <img className="layer" src={mountains} alt="mountains"/>                    
                    </div>
                );
                break;

            case 2:
                return(
                    <div id="Book2">
                        <img className="layer" src={mountains} alt="mountains"/>
                        <img className="layer" src={mountains} alt="mountains"/>
                        <img className="layer" src={mountains} alt="mountains"/>                    
                    </div>
                );
                break;
            
            case 3:
                return(
                    <div id="Book3">
                        <img className="layer" src={mountains} alt="mountains"/>
                        <img className="layer" src={mountains} alt="mountains"/>
                        <img className="layer" src={mountains} alt="mountains"/>                    
                    </div>
                );
                break;
        
            default:
                break;
        }
    }

    render() {
        
        return(
            <div className="Illustrations">
                {this.renderIllus(this.props.id)}
                <div id="BookViewer">
                    <div className="top"></div>
                    <div className="left"></div>
                    <div className="right"></div>
                    <div className="bottom"></div> 
                </div> 
                <button id="forward" onClick={() => this.forward()} disabled={this.state.currentPage === this.state.numPages} style={{backgroundColor: this.state.currentPage === this.state.numPages ? '#565656' : '#76323F'}}>^</button>
                <button id="backward" onClick={() => this.backward()} disabled={this.state.currentPage === 1} style={{backgroundColor: this.state.currentPage === 1 ? '#565656' : '#76323F'}}>^</button>
            </div>
        );
    }
}