import React from 'react';
import Styles from '../styles/Styles.module.css';


export default class Command extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            command: this.props.command,
            typeSpeed: this.props.typeSpeed || 2000/this.props.command.length
        }
        this.i = 0;
        this.displayText = ""
        this.type = this.type.bind(this);
        // console.log(this.props.command)
    }

    componentDidMount(){
        this.type();
    }

    type(){
        if( this.displayText !== this.state.command ){
            this.displayText += this.state.command.charAt(this.i);
            this.i += 1;
            this.forceUpdate();
            setTimeout(this.type, this.state.typeSpeed)
        }
        else{
            if( this.props.onComplete){
                this.props.onComplete();
            }else{
                console.log("Inside command.js | onComplete not passed by parent")
            }
        }

    }
   
    render(){
        // console.log(this.props.parent +": "+displayText)
        let parentClassNames = this.props.styleClassNames;
        return(
            <span className = {parentClassNames+" "+Styles.command}>{this.displayText}</span>
        );
    }
}