<!-- NAME OF THE PROJECT -->
   # Bucket List
   
   <!-- ABOUT THE PROJECT -->
   ## About The Project

This project helps people to create wishlist and then remove their wishes from the list with very easy way doing that. 

No ink or paper needed.

### Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### How to use the App.

1. After you opened an Bucket List App via [http://localhost:3000](http://localhost:3000), type in your wishes in open input window where it says :

   "What dreams do you have?",
    ####
   **```
      <input type="text"
      placeholder="What dreams do you have?"
      onChange={(e)=>{this.onChangeEvent(e.target.value)}}
      value = {this.state.userInput}/>
       ```**
     #### **Note: file - BucketList.js.**

2. Then Add your wish in a list by pressing **ADD** button,
   ####
   **```
       <button onClick={()=>this.addItem(this.state.userInput)} className="add">Add </button>
       ```**,
   
      *OR* use button **Enter** on a keyboard.
   
   ####     **Note: file - BucketList.js.**

 3. If you have done a wish from your list you can cross it out by clicking on that wish and crossed light blue line will pop up on your wish :
    ####
    **```
           <ul>
                {this.state.bucketList.map((item,index)=>(
                    <li onClick={this.crossedWord}
                     key = {index}> 💎{item}
                     </li>
                ))}
            </ul>
            ```**
    #### **Note: file - BucketList.js.**
    And
    ####
    **```
            .crossed{
             text-decoration: line-through 2px rgb(78, 141, 224);
             background-color: #f0f0f0;
              }
             ```**
     #### **Note: file - App.css.**
    
 4. If you would like to remove all wishes from your list, then click on button **DELETE** :
       ####
     **```
        <button onClick={()=>this.deleteItem()} className="delete">
                    Delete
                </button>
                ```**
       #### **Note: file - BucketList.js.**
       
  

### Built With

* [React](https://react.dev/)

