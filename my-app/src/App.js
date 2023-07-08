import React from 'react';
import './App.css';
import Mybutton from './mybutton';
import { useRef } from 'react';
import { useState } from 'react';



function App() {

const inputvalue =  useRef()
const [addarray, setAddarray] = useState([])
const [ischecked, setIschecked] = useState([])

function deleteone(index){

  const newarray = [...addarray]

  newarray.splice(index,1)

  setAddarray(newarray)

  const newischecked = [...ischecked]

  newischecked.splice(index,1)
  
  setIschecked(newischecked)
  
}

function addclick(){
  const newvalue = inputvalue.current.value
  if(newvalue ==""){
    inputvalue.current.placeholder="Please Write Something.."
  }
  else{
    setAddarray([...addarray,newvalue])
    setIschecked([...ischecked, false])
    inputvalue.current.value =""
    inputvalue.current.placeholder = 'Write Here..'
  }
}

function checkedbox(index){
 const newcheckedbox = [...ischecked]
 newcheckedbox[index] = !newcheckedbox[index]
 setIschecked(newcheckedbox)
}

function count(){
  const newcheckedbox = [...ischecked]
  const truecount = newcheckedbox.reduce((count, checked) =>
  checked ? count + 1 : count,0)
  return truecount;
}

function changetheclassname(index){
  const newcheckedbox = [...ischecked]
  if(newcheckedbox[index] === true){
    return 'completed'
  }
}

function deleteall(){
  setAddarray([]);
  setIschecked([]);
}

return (
  <div className="App">TODO APP
  <p className='comp'>Completed: {count()}/{[...addarray].length}</p>
    <div className='field'>
      <input type='text' className='inputfield' placeholder='Write Here..' ref={inputvalue} />
      <Mybutton name="Add" clicked={addclick}/>
      <Mybutton name="DeleteAll" clicked={deleteall}/>
      <ul>
      {addarray.map((addarray, index) => {

        return(
          <div>
            <li>
              <span className={changetheclassname(index)}>
                <input type='checkbox' checked={ischecked[index]} onChange={()=> checkedbox(index)} />
                {addarray}
              </span>
              <Mybutton name="X" clicked={deleteone} key={index}/>
            </li>
          </div>
        );
      })}
      </ul>
    </div>
  </div>
);
}

export default App;
