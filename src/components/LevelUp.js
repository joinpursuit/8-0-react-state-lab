const LevelUp = (props) => {
  return (
    <>
      <button onClick={props.handleIncrement}> +{props.clicks} </button>
      <button onClick={props.handlePayment}>
        {/* {" "} */}
        Pay 10 points to change from + {props.clicks} to + {props.clicks + 1}
      </button>
    </>
  );
};

export default LevelUp;
