import React from 'react';
import Styles from '../styles/Styles.module.css';
import Hostname from './Hostname.js';
// import Cursor from './Cursor.js';
import Command from './Command.js';

export default class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text : "curl -X GET 127.0.0.1:3000/navbar",
            commandCompleted : false,
            hideCursor: false
        }
        this.listDirs = this.listDirs.bind(this);
    }
    
    listDirs(){
        console.log("Navbar Loading Complete | Hiding Cursor")
        setTimeout(()=>{
            this.props.onComplete();
            this.setState({
                commandCompleted: true,
                hideCursor: true
            })
        }, 1200) 
    }

    render(){
        // console.log(Styles.navFlexContainer)
        let links = (
            <span className = {Styles.navFlexContainer+" "+Styles.navFlexItemLink}>
                <span className = {Styles.command}>./Home.sh</span>
                <span className = {Styles.command}>./AboutMe.sh</span>
                <span className = {Styles.command}>./Projects.sh</span>
                <span className = {Styles.command}>./Others.sh</span>
            </span>
        );
        let navbar = (
            <div>
                <span className={Styles.navFlexContainer}>
                    <Hostname 
                        styleClassNames = {Styles.navFlexItemHost}
                    />

                    <Command 
                        styleClassNames =  {Styles.navFlexItemCommand} 
                        command={this.state.text} 
                        // typeSpeed ={100} 
                        onComplete = {this.listDirs}
                    />                
                    {this.state.hideCursor ? null : <span className = {Styles.navCursor}>|</span>}
                </span>
                <br></br>

                {this.state.commandCompleted ? links : null}
            </div>
            

        );
        return(
            navbar
        );
    }
}