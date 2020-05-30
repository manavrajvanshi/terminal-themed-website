import React from 'react';
import Styles from '../styles/Styles.module.css';
export default class Cursor extends React.Component{
    render(){
        return(
            <span className={Styles.cursor}>|</span>
        );
    }
}