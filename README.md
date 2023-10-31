<!-- NAME OF THE PROJECT -->
   # Bucket List
   
   <!-- ABOUT THE PROJECT -->
   ## About The Project

This project helps people to add or remove their dreams in list with very easy way doing that. No ink or paper needed.

### Built With

* [React](https://react.dev/)

### Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



#### Available Scripts

In the project directory, you can run:

##### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

##### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

##### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

##### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

#### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

##### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

##### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

##### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

##### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

###### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

##### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### How to use the App.

1. After you opened an App via [http://localhost:3000](http://localhost:3000), type in your wishes in open input window where it says : "What dreams do you have?".
   
      **```
      <input type="text"
      placeholder="What dreams do you have?"
      onChange={(e)=>{this.onChangeEvent(e.target.value)}}
      value = {this.state.userInput}/>
      ```**
      **Note: file - BucketList.js.**

2. Then Add your wish in a list by pressing **ADD** button,
       **```
       <button onClick={()=>this.addItem(this.state.userInput)} className="add">Add </button>
       ```**
        ,*OR* use button **Enter** on a keyboard.
        **Note: file - BucketList.js.**

 3. If you have done a wish from your list you can cross it out by clicking on that wish and crossed light blue line will pop up on your wish :
           **```
           <ul>
                {this.state.bucketList.map((item,index)=>(
                    <li onClick={this.crossedWord}
                     key = {index}> 💎{item}
                     </li>
                ))}
            </ul>
            ```**
    **Note: file - BucketList.js.**

            **```
            .crossed{
             text-decoration: line-through 2px rgb(78, 141, 224);
             background-color: #f0f0f0;
              }
             ```**
      **Note: file - App.css.**
    
    4. If you would like to remove a wish from your list, then click on button **DELETE** :
       
  
  
             
              


  
