import React,{useState} from "react";
import './counterComponent.css';

function CounterComponent () {
    const [count,setCount] = useState(0);

    const handleButtonClick = () =>{
        setCount(count+1);
    }
    return(
        <div>
            <span className = {count===0 ? "primaryBtn" : "secondaryBtn"}>{count}</span> 
            <button className="secondaryBtn" onClick={handleButtonClick}>Increament</button>
        </div>
    );
}
export default CounterComponent
