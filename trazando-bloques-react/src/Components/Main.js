import styles from './Main.module.css';
import React, { Component } from "react";
class Main extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const {children} = this.props;
    return (
      <div className={styles.main}>
        {children}
      </div>
    )
  }
  
}

export default Main;