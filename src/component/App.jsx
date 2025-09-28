import { useState } from "react";
import "./App.css";
import Card from "./Card";
import Footer from "./Footer";
import Header from "./Header";
import details from "../utils/dummy";






function App() {

  const [arr,Setarr] =useState(details)

  function SortArray()
{
   
   arr.sort((a,b)=>a.price-b.price);
   Setarr([...arr])

}

function Above499()
{
  const B = details.filter((value)=>value.price>499);
  Setarr(B);
}

function removeFilter()
{
  // it is only removing one filter that is above499
  console.log(details)
  Setarr([...details])

}

  return (
    <>
     {/* header */}
    <Header/>
    <button onClick={SortArray}>Sort by price</button>
    <button onClick={Above499}>price above 499</button>
    <button onClick={removeFilter}>Remove Filter</button>
    {/* body */}
    <div  className="middle" style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>

      {/* <Card cloth="T-Shirt" discount="20-82%off" />
      <Card cloth="Pant" discount="40-50%off" />
      <Card cloth="Jeans" discount="20-82%off" />
      <Card cloth="Kurta" discount="30-60%off" />
      <Card cloth="Pajayama" discount="60-70%off" />
      <Card cloth="T-Shirt" discount="20-82%off" />
      <Card cloth="T-Shirt" discount="20-82%off" />
      <Card cloth="T-Shirt" discount="20-82%off" />
      <Card cloth="T-Shirt" discount="20-82%off" /> */}


      {/* fetching the data from details array */}
      {arr.map((value,index)=><Card key={index} image={value.image} cloth={value.cloth} discount={value.discount} price={value.price}/>)}
      {/* how is it looking
      [<Card cloth="T-Shirt" discount="20-82%off" />
        <Card cloth="Pant" discount="40-50%off" />,...] */}
       {/* important
      .map() returns an array of <Card /> components.
      JSX automatically renders arrays of elements without needing a loop.
      React knows how to directly process arrays inside {} in JSX. */}

    </div>
    
    {/* footer */}
    <Footer/>
    </>
    
  );
}
export default App;
