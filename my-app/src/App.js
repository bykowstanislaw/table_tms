
import './App.css';

const toDoList=[1,2,3,]

function App() {
  return <div>
    <List />
    <Button />
    <Input1 />
    <Input2 />
  </div>
}


function List(){
  return <ul>
    {
      toDoList.map((i,index)=>
      <ListItem el={i} al={index} />
      )
    }
    </ul>

}

function ListItem(props){
  return  <li key={props.al}>{props.el}</li>
}

function Button(){
  return <button>SADAS</button>
}

function Input1(){
  return <input type="text"></input>
}
function Input2(){
  return <input type="text"></input>
}


export default App;
