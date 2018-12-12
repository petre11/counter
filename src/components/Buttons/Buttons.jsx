import React from "react";

import Button from "../Button/Button";

const Buttons = props => {
  const { handleIncrement, handleDecrement, handleReset } = props;

  return (
    <div className="Buttons">
      <Button label="Decrement" onClick={handleDecrement} />
      <Button label="Reset" onClick={handleReset} />
      <Button label="Increment" onClick={handleIncrement} />
      <Button label="Save" />
    </div>
  );
};

export default Buttons;