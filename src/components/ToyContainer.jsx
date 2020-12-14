import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => { 
  // console.log(props.toylist)
  return(
    <div id="toy-collection">
    {props.toylist.map(toy=> <ToyCard toy={toy} removeToy={props.removeToy} likeToy={props.likeToy}/>)}
    </div>
  );
}

export default ToyContainer;
