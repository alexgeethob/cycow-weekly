import React, { useState, useEffect } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import styles from "/styles/FlagForm.module.css";
import { getFlag } from "/firebase/retrieve";

function Incorrect(props) {
  return <div className={styles.incorrect}>Try Again.</div>;
}
function Correct(props) {
  return <div className={styles.correct}>Correct!</div>;
}

export function FlagForm(props) {
  const [result, setResult] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [value, setValue] = useState("");
  const [flag, setFlag] = useState("");
  const id = props.id;

  async function fetchFlag(id) {
    const data = await getFlag(id);
    if (data.error) {
      alert("Something went wrong, please refresh");
    } else {
      setFlag(data.flag);
    }
  }

  useEffect(() => {
    fetchFlag(id);
  }, []);

  useEffect(() => {
    fetchFlag(id);
    setValue("");
  }, [id]);

  function handleChange(event) {
    event.preventDefault();
    setValue(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    
    if (value.toLowerCase().trim() === flag) {
      setResult(1);
      setTimeout(() => {
        setResult(0);
      }, 3000);
    } else {
      setResult(-1);
      setTimeout(() => {
        setResult(0);
      }, 3000);
    }
    setSubmitted(false);
  }

  var resultBox;
  if (result == 1) {
    resultBox = <Correct />;
  } else if (result == -1) {
    resultBox = <Incorrect />;
  } else {
    resultBox = null;
  }
  //{this.state.isSubmitted && <ReactCanvasConfetti className={styles.confetti}></ReactCanvasConfetti>}
  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          <input
            type="text"
            value={value}
            onChange={handleChange}
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
