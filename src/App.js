import './App.css';
import image from "./list.jpg";
import imageTwo from "./dream.jpg";
import { BucketList } from './BucketList';
function App() {
  return (
    <div className="app">
      <div className='container'>
         <img src={image} width="250px" alt='book'/>
      </div>
      <div className='container'>
        <h1>
          Bucket List
        </h1>
      </div>
      <BucketList/>
      <div className='container'>
         <img src={imageTwo} width="250px" alt='ballons'/>
      </div>
       </div>
  );
}

export default App;
