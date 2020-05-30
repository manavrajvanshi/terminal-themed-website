import React from 'react';
import Styles from '../styles/Styles.module.css';

export default class Content extends React.Component{
    render(){
        return (
            <div className = {Styles.contentFlexContainer}>
                <span className={Styles.command}>{this.props.pageName}</span>
            </div>
        );
    }
}