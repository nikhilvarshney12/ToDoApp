 import React,{useState} from 'react'
import './App.css';

function App() {


  const [inputList,setInputList] = useState("");
  const [items,setItems] = useState([]);

  const itemEvent = (event) =>{
    setInputList(event.target.value);
  }

  const listOfItem = () => {
    setItems((oldItems) => {
      return[...oldItems,inputList]
    });
    setInputList("");
  }
  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>TODO List</h1>
        <br/>
        <input type="text" placeholder="Add a Item" value={inputList} onChange={itemEvent} />
        <button onClick={listOfItem}> + </button>

        <ol>
          {items.map((itemvalue) => {
            return <li>{itemvalue}</li>;
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
