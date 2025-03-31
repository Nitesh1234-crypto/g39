
import './App.css'

function App() {
  let randomnumber = Math.random();
  return (
    // jsx
      <div>

        <h1>Hello world</h1> 
        <Header></Header>
        <h4>Random num is : {randomnumber}</h4>
      </div>
  )
}
//Header Component
function Header(){
  function sum(a,b){
    return a+b;
  }
  return(
    <div>
      <h1 className='header'>Header component</h1>
      {/* <h2>sum of 5 and 2 is : {5+2}</h2> */}
      <h2>sum is : {sum(6,7)}</h2>
      <img src="" alt="" />
      <br />
    </div>
  )
}

export default App
