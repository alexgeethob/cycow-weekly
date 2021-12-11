//For actual challenges
import React from "react";
import styles from "/styles/Chal.module.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";




export class FlagForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { value:"" };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({ value: event.target.value });
    }
  
    handleSubmit(event) {
      alert("Flag Submission still WIP. " + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit} className={styles.form} >
          <label>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              className={styles.input}
              placeholder="Flag"
            />
          </label>
          <input type="submit" value="Submit" className={styles.submit}/>
        </form>
      );
    }
  }
  
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
