//For actual challenges
import React from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import styles from "/styles/Chal.module.css";

export class FlagForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", isSubmitted: false };
    this.correct = props.correct;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ isSubmitted: true });
    event.preventDefault();
    alert("Flag Submission still WIP, please excuse any bugs");
    if (this.state.value.toLowerCase().trim() === this.correct) {
      alert("Correct!");
      //console.log("correct", this.state.value);
    } else {
      alert("Try Again.");
      //console.log("wrong", this.state.value, this.correct);
    }
    this.setState({ isSubmitted: false });
  }
//{this.state.isSubmitted && <ReactCanvasConfetti className={styles.confetti}></ReactCanvasConfetti>}
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <label>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              className={styles.input}
              placeholder="Flag"
            />
          </label>
          <button type="submit" className={styles.submit}>
            Submit
          </button>
        </form>
        
      </div>
    );
  }
}
