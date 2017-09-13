import React, {Component} from 'react';
import mountains from './../../images/mountain_PNG30.png';

export default class Illustrations extends Component {
    
    renderIllus(id) {
        switch (+id) {
            case 4:
                return(
                    <div id="Book4">
                        <img className="layer page1" src={mountains} alt="mountains"/>
                        <img className="layer page1-2" src={mountains} alt="mountains"/>
                        <img className="layer page2" src={mountains} alt="mountains"/>                    
                        <img className="layer page2" src={mountains} alt="mountains"/>                        
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
        console.log(this.props);
        return(
            <div className="Illustrations">
                {this.renderIllus(this.props.id)}
            </div>
        );
    }
}