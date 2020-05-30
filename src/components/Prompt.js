import React from 'react';

import Styles from '../styles/Styles.module.css';

import Hostname from './Hostname.js';
// import Cursor from './Cursor';
// import Cursor from './Cursor.js';
// import Command from './Command.js';

export default class Prompt extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text : "",
        }
        this.userInputRef = this.props.inputRef
        this.handleInput = this.handleInput.bind(this);
        this.checkEnter = this.checkEnter.bind(this);
    }
    componentDidMount(){
        this.userInputRef.current.focus();
        this.userInputRef.current.style.width = (this.state.text.length+1)+'ch';
        // this.userInputRef.current.style.backgroundColor = "white";
        // console.log(this.userInputRef)
        // console.log(this.props.inputRef)
    }


    componentDidUpdate(){
        this.userInputRef.current.focus();
        this.userInputRef.current.style.width = (this.state.text.length+1)+'ch';
    }

    handleInput(e){
        this.userInputRef.current.style.width = (this.state.text.length+1)+'ch';
        this.setState({
            text : e.target.value
        })
    }

    checkEnter(e){
        if(e.keyCode === 13){
            console.log(e.target.value)
            this.props.setPage(this.state.text);
            this.setState({
                text: ""
            })
        }
    }
    render(){
        return(
        <div className="terminal-container">
            <Hostname/>
            {/* <Command command={this.state.text} />
            <Cursor/> */}
            {/* {<span className={Styles.command}>{this.props.footest}</span>} */}
            <input 
                type = "text" 
                className = {Styles.userCommand +" "+Styles.command} 
                autoFocus 
                ref={this.userInputRef}
                onChange = {this.handleInput}
                value = {this.state.text}
                onKeyDown = {this.checkEnter}
            />
            {/* <Cursor/> */}
        </div>
        );
    }
}