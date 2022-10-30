import React from "react";
import { useState } from "react";

const TextBox = (props) => {
  const [Text, setText] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText(Text);
    props.Alert("Copied text to clipboard", "success");
  };

  const toUppercase = () => {
    let newtext = Text.toUpperCase();
    setText(newtext);
    if (Text === "") {
      props.Alert("please enter something first", "warning");
    } else {
      props.Alert("converted to UPPERCASE", "success");
    }
  };
  const toLowercase = () => {
    let newtext = Text.toLowerCase();
    setText(newtext);
    if (Text === "") {
      props.Alert("please enter something first", "warning");
    } else {
      props.Alert("converted to lowercase", "success");
    }
  };
  const toClear = () => {
    if (Text === "") {
      props.Alert("Theres's nothing to clear");
    } else {
      setText("");
    }
  };

  const toHandleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <h1 className="my-4">{props.header}</h1>
      <div className="mb-3">
        <textarea
          value={Text}
          onChange={toHandleChange}
          placeholder="Type here"
          class="form-control"
          id="mybox"
          rows="8"
        ></textarea>
      </div>
      <button
        onClick={toUppercase}
        type="button"
        className="btn btn-primary mx-1 my-1"
      >
        Convert to Uppercase
      </button>
      <button
        onClick={toLowercase}
        type="button"
        className="btn btn-primary mx-1 my-1"
      >
        Convert to LowerCase
      </button>
      <button
        onClick={toClear}
        type="button"
        className="btn btn-secondary mx-1 my-1"
      >
        Clear text
      </button>
      <button
        onClick={handleCopy}
        type="button"
        className="btn btn-primary mx-1 my-1"
      >
        Copy Text
      </button>
      <div className="container">
        <h2>Your text Summary</h2>
        <p>
          {
            Text.split(/\s+/).filter((elm) => {
              return elm.length !== 0;
            }).length
          }{" "}
          words & {Text.length} characters
        </p>
        <p>
          {0.008 *
            Text.split(" ").filter((elm) => {
              return elm.length !== 0;
            }).length}{" "}
          minutes read.
        </p>
      </div>
      <div className="container">
        <h2>Preview</h2>
        <p>
          {Text.length > 0 ? Text : "Write something above to preview it here"}
        </p>
      </div>
    </>
  );
};

export default TextBox;
