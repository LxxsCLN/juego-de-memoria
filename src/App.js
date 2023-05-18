import './App.css';
import { albums } from './data';

const image = albums[0]

function App() {
  console.log(image)
  return (
    <div className="App">
      <p>hi</p>
      {albums.map((item, index) => {
        return <img alt='' src={`${process.env.PUBLIC_URL}`+item.img} key={item.id}></img>
      })}      
    </div>
  );
}

export default App;
