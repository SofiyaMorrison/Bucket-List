import { Component } from "react";


export class BucketList extends Component{
    state = {
      userInput:"",
      bucketList:[]
    }
    onChangeEvent(e){
        this.setState({userInput:e})
    }

   addItem(input){
    if(input===""){
        alert("Please, enter an item!😉")
    }else{
    let listArray = this.state.bucketList;
    listArray.push(input);
    this.setState({bucketList:listArray,userInput:""})
    }
   }
   deleteItem(event){
    let listArray = this.state.bucketList;
    listArray = [];
    this.setState({bucketList:listArray})
   }
   crossedWord(event){
    const li = event.target;
    li.classList.toggle('crossed');
   }
   onFormSubmit(e){
    e.preventDefault();
   }
    render(){
        return(
            
            <div>
                <form onSubmit={this.onFormSubmit}>
                <div className="container">
             <input type="text"
             placeholder="What dreams do you have?"
             onChange={(e)=>{this.onChangeEvent(e.target.value)}}
             value = {this.state.userInput}
             />
            </div>
            <div className="container">
              <button onClick={()=>this.addItem(this.state.userInput)} className="add">
              Add
              </button>
            </div>
            <ul>
                {this.state.bucketList.map((item,index)=>(
                    <li onClick={this.crossedWord}
                     key = {index}> 💎{item}
                     </li>
                ))}
            </ul>
            <div className="container">
                <button onClick={()=>this.deleteItem()} className="delete">
                    Delete
                </button>
            </div>
            </form>
           </div>
           
        )

    }
}