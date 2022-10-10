
  function AlertButton({ message, children }) {
    return (
      <button onClick={() => alert(message)}>
        {children}
      </button>
    );
  }
  
  export default function ButtonTwo() {
    return (
      <div>
        <AlertButton message="Playing!">
          Play Movie
        </AlertButton>
        <AlertButton message="Uploading!">
          Upload Image
        </AlertButton>
      </div>
    );
  }








// Notes
//   Alternative - add directly to button element in JSX in component return statement wrapped in a anonymous function: <button onClick={() => alert('You clicked me!')}>