import React from "react";

function Checkboxes(props) {
  return (
    <div id="checkbox-container">
      <label id="uneasy-checkbox-label">
        <input
          type="checkbox"
          name="showDifficulty"
          onChange={props.handleChange}
          checked={props.data.showDifficulty}
        />{" "}
        Rating Assignment Uneasy
      </label>

      <label id="easy-checkbox-label">
        <input
          type="checkbox"
          name="showEnjoyment"
          onChange={props.handleChange}
          checked={props.data.showEnjoyment}
        />{" "}
        Rating Assignment Easy
      </label>
    </div>
  );
}

export default Checkboxes;
