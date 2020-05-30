import React from 'react';
import Loader from './components/Loader.js';

import Navbar from './components/Navbar.js';
import Prompt from './components/Prompt.js';
import Content from './components/Content.js';

// import Styles from './styles/Styles.module.css';

export default class Controller extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showLoader: true,
            navbarLoaded: false,
            content: "home"
        };
        this.promptInputRef = React.createRef();
        this.navbarStatusChanger = this.navbarStatusChanger.bind(this);
        this.setCurrentPage = this.setCurrentPage.bind(this);
        this.focusInput = this.focusInput.bind(this);
    }

    navbarStatusChanger(){
        setTimeout(() => {
            this.setState({
                navbarLoaded: true
            })
        },100);
    }

    componentDidMount(){
        setTimeout( () => {
            this.setState({
                showLoader: false
            })
        }, 2000)
    }

    focusInput(){
        this.promptInputRef.current.focus();
    }
    setCurrentPage(pageName){
        this.setState({
            content: pageName
        })
    }

    render(){

        let main = (
            <div onClick = {this.focusInput}>
                <span>
                    <br/>
                    <Prompt 
                        setPage = {this.setCurrentPage}
                        inputRef = {this.promptInputRef}
                    />
                </span>
                <span>
                    <br/><br/>
                    <Content 
                        pageName = {this.state.content}
                    />
                </span>
            </div>
        );
        let content = (
            <div>
                <Navbar 
                    onComplete = {this.navbarStatusChanger}
                    setPage = {this.setCurrentPage}
                />
                {this.state.navbarLoaded ? main : null}
            </div>
        );
        return(
            this.state.showLoader ? <Loader/>: content
        );
       
    }
}