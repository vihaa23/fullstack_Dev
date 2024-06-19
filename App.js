import logo from './logo.svg';
import './App.css';

function App() {
  
  return (   
    <>
    <Component1/>
    <Component1 />
    </>
  );
}

export default App;

const Component1 = () =>{
  
  let myTag = <h1>shilpa</h1>
  let obj ={ fname: "krisha", lname:"shah",isAuthorized: false}
  const fullName = () => {
    return obj.fname + " " + obj.lname
  }
  return (   
    <>
    <div style={{backgroundColor: 'red'}}>
    {myTag}
    <h1>name: {obj.fname}</h1>
    <h1>fullname: {fullName()}</h1>
    <h1>authorization type:
      {obj.isAuthorized ? " yes,it is":" not auhorized"}</h1>
      </div>
    </>
  );
}