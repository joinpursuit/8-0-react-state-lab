import "./Won.css";

const Won = () => {
  const refresh = () => {
    window.location.reload();
  };

  return (
    <main>
      <div>
        <h2>You Win!</h2>
        <button type="submit" onClick={refresh}>
          Play again?
        </button>
      </div>
    </main>
  );
};

export default Won;
