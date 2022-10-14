import { useState } from "react";
var x=1

function Post(){
let [count,setcounter] = useState(0)
if(count>=100){
    alert(`You Win!`)
}
function setval(){
    if(count<10){
        alert("You can't afford that!")
    }
     else {
count=count -10;
x+=1
    }

    
}


function PlayAgain(){
    window.location.reload()}
return(
    <div>
       <p><h1>Current Score: {count}</h1></p>
    <p><button onClick={()=>setcounter(count+x)}>+{x}</button></p>
        <p><br/><button onClick={()=>setval()}>Pay 10 points to change from +{x} to +{x+1} </button></p>
<button onClick={()=>PlayAgain()}>Play Again?</button>
    </div>
)
}


export default Post
 