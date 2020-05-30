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
        this.clickHandler = this.clickHandler.bind(this);
        this.linksArr = ["./Home.sh", "./AboutMe.sh", "./Projects.sh", "./Others.sh"]
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

    clickHandler(link){
        this.props.setPage(link);
    }
    render(){
        // console.log(Styles.navFlexContainer)
        let links = this.linksArr.map( (link, index) => <span key ={index} onClick ={()=>this.clickHandler(link)} className = {Styles.command}>{link}</span>)
        let linksComponent = (
            <span className = {Styles.navFlexContainer+" "+Styles.navFlexItemLink}>
                {links}
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

                {this.state.commandCompleted ? linksComponent : null}
            </div>
            

        );
        return(
            navbar
        );
    }
}