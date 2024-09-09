import React, { useState } from 'react'
import "./styles/AddContainer.css"
import AddSlider from "./AddSlider.jsx"
let img1 = "https://th.bing.com/th/id/OIP.PBA5vkcc1cYGAkmviSG4TgHaEE?rs=1&pid=ImgDetMain"
let img2 = "https://th.bing.com/th/id/R.13820971a962ffbeb63a8fef36185b16?rik=vZ3lu%2blbhy6jxw&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f03%2f10%2f319576-photography-landscape-nature-water-grass-trees-plants-sunrise-lake.jpg&ehk=6WS2p9KknQa9F%2bgAH16n44NReuUyS2rzXah2zy7kiAw%3d&risl=&pid=ImgRaw&r=0"

export default function AddConatiner() {
  const [show , setShow] = useState(true);
  const image = [{url:img1}, {url:img2}]; 
  if(show)
  return (
    <div id='addContainer' >
      <AddSlider setShow={setShow} images={image}></AddSlider>
    </div>
  )
  else{
    return(
      <>
      </>
    )
  }
}
