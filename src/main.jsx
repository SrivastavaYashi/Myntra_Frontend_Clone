// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./component/App"



// const element = <h1>hello coder army</h1>
// createRoot(document.getElementById('root')).render(
//   element
// )


// we write function as first letter capital in order to differentiate between html tags which always 
// start with small letter like <h1> <div>....
// how to access these values that has been passed in greet
// function Greet(props){
//   return <h1>welcome everyone from {props.name} {props.age}</h1>;}

  //function call in react in jsx format
  //how to pass arguments in function using react
  // const element1 = <Greet name="yashi" age ="24"/>
  // createRoot(document.getElementById('root')).render(
  //     element1
  //   )


  createRoot(document.getElementById('root1')).render(
    <>
    <App/>
    </>
    )