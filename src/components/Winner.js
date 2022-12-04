import React from "react";

function Winner({ setMultiplier, setCount }) {
  function winningMsg() {
    setCount(0);
    setMultiplier(1);
  }

  return (
    <div>
      <h2>You Win!</h2>
      <button onClick={winningMsg}>Play again?</button>
    </div>
  );
}

export default Winner;
