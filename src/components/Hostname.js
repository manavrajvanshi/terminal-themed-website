import React from 'react';
import Styles from '../styles/Styles.module.css';
export default class Hostname extends React.Component{
    render(){
        let parentClassNames = this.props.styleClassNames;

        return(
            <span className = {parentClassNames}>
                <span className = {Styles.boldFont}>user@manavrajvanshi:~</span>
                <span className = {Styles.lightFont}>Manav</span><span className={Styles.prompt}>$</span>
            </span>
        )
    }
}