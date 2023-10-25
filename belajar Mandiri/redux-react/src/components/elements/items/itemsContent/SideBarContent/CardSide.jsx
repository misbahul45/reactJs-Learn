import React from 'react'
import Squads from './CardItem/Squads'
import Discover from './CardItem/Discover';
import Contribute from './CardItem/Contribute';
import Manage from './CardItem/Manage';
const CardSide = ({title, open, setClickSideBar,clickSideBar}) => {
  let content;
  if(title==="Squads"){
    content=<Squads title={title} open={open} setClickSideBar={setClickSideBar} clickSideBar={clickSideBar} />
  }else if(title=="Discover"){
    content=<Discover title={title} open={open} setClickSideBar={setClickSideBar} clickSideBar={clickSideBar} />
  }else if(title==="Contribute"){
    content=<Contribute title={title} open={open} setClickSideBar={setClickSideBar} clickSideBar={clickSideBar} />
  }else{
    content=<Manage title={title} open={open} setClickSideBar={setClickSideBar} clickSideBar={clickSideBar} />
  }
  return(
   <>
     {content}
   </>
  )
}

export default CardSide