import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="container">
      <form>
        <button className="btns b1">Via Support Chat</button>
        <button className="btns b2">Via Call</button>
        <button className="btns b3">Via Email From</button>
        <div className="entries">
          <fieldset>
            <legend>Name</legend>
            <input></input>
          </fieldset>
          <fieldset>
            <legend>E-mail </legend>
            <input></input>
          </fieldset>
          <fieldset>
            <legend>Text</legend>
            <textarea></textarea>
          </fieldset>
        </div>
        <button className="btns b4">Submit</button>
      </form>
    </div>
  );
};

export default Form;
