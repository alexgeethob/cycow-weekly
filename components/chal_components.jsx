//For actual challenges
import React from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import styles from "/styles/Chal.module.css";
import { getData } from "/firebase/retrieve";

export class FlagForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", isSubmitted: false };
    this.id = props.id;
    this.correct = "";
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  async handleSubmit(event) {
    this.setState({ isSubmitted: true });
    event.preventDefault();

    if (this.correct === "") {
      const data = await getData(this.id);
      if (data.error) {
        alert("Something went wrong, please try again");
        return;
      }
      this.correct = data.flag;
    }

    if (this.state.value.toLowerCase().trim() === this.correct) {
      alert("Correct!");
    } else {
      alert("Try Again.");
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
