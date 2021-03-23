import React from "react"


class Table extends React.Component{
    constructor(props){
        super(props)
        this.state={ 
            templateSomething:{
                name:"",
                surname:"",
                age:"",
                city:"",
            },
    objectElements:[
    {name:"Stanislaw",
    surname:"Bykov",
    age:20,
    city: "Minsk"},
    {name:"Kostya",
    surname:"Grachev",
    age:74,
    city: "Gomel",},
    {name:"Igor",
    surname:"Leshko",
    age:2,
    city: "Mozyr",}
],
    value: ''
}
    
    }

    
    render(){
        return (<div>
               {  Object.keys(this.state.templateSomething).map((el)=>{
                  return <input type="text" name={el} placeholder={el} value={this.state.value}></input>
               
                })
            }
                <button>Добавить</button>
                <div></div>
            <table>
           
           {  Object.keys(this.state.objectElements[0]).map((el)=>{
                  return <th>{el}</th>
               
                })
            }
            {
                this.state.objectElements.map((el,i)=>{
                 return <tr> {Object.values(el).map((el)=>{ 
                     return <td>{el}</td>
                })}
               </tr> })
                

            }
            </table>
        </div>)
    }
}






export default Table