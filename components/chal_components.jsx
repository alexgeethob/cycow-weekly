import React from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import styles from "/styles/FlagForm.module.css";
import { getFlag } from "/firebase/retrieve";


function Incorrect(props) {
  return <div className={styles.incorrect}>Try Again.</div>;
}
function Correct(props) {
  return <div className={styles.correct}>Correct!</div>;
}

export class FlagForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", isSubmitted: false, result: 0, };
    this.id = props.id;
    this.flag = "";
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  async handleSubmit(event) {
    this.setState({ isSubmitted: true });
    event.preventDefault();
    if (this.flag === "") {
      const data = await getFlag(this.id);
      if (data.error) {
        alert("Something went wrong, please try again");
        return;
      }
      this.flag = data.flag;
    }

    if (this.state.value.toLowerCase().trim() === this.flag) {
      this.setState({result : 1});
      this.fireConfetti();
      setTimeout(() => {
        this.setState({result : 0});
      }, 4000);
    } else {
      this.setState({result : -1});
      setTimeout(() => {
        this.setState({result : 0});
      }, 4000);
    }
    this.setState({ isSubmitted: false });
  }

  fireConfetti(){
    return
  }

  //{this.state.isSubmitted && <ReactCanvasConfetti className={styles.confetti}></ReactCanvasConfetti>}
  render() {
    
    var resultBox;
    if(this.state.result == 1){
      resultBox = (<Correct/>);
    }
    else if(this.state.result == -1){
      resultBox = (<Incorrect/>);
    }
    else{
      resultBox = null;
    }

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
        {resultBox}
      </div>
    );
  }
}
