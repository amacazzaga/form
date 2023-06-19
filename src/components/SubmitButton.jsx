import React from "react";

const SubmitButton = ({ value, onSubmit }) => {
  return (
    <button
      type="submit"
      className="btn btn-success  m-2 "
      onClick={onSubmit} /*return si el e mail existe*/
    >
      SubmitButton
    </button>
  );
};

export default SubmitButton;
