import React from "react";
import "./Form.css";

const Form = () => {
  const contact = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.className === "btns b1") {
      console.log("Via Support Chat");
    } else if (e.target.className === "btns b2") {
      console.log("Via Call");
    } else {
      console.log("Via Email Form");
    }
  };

  const submit = (e) => {
    // e.preventDefault();
    e.stopPropagation();
    alert(
      "SUCCESS! Your Concern has been submitted, we will reach out to you as soon as possible!"
    );
  };
  return (
    <div className="container">
      <button className="btns b1" onClick={contact}>
        Via Support Chat
      </button>
      <button className="btns b2" onClick={contact}>
        Via Call
      </button>
      <button className="btns b3" onClick={contact}>
        Via Email From
      </button>
      <form onSubmit={submit}>
        <div className="entries">
          <fieldset>
            <legend>Name</legend>
            <input type="text" required></input>
          </fieldset>
          <fieldset>
            <legend>E-mail </legend>
            <input type="email" required></input>
          </fieldset>
          <fieldset>
            <legend>Text</legend>
            <textarea type="text" required></textarea>
          </fieldset>
        </div>
        <button type="submit" className="btns b4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
