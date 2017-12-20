import React from 'react';

const CocktailList = (props) => {

 function handleClick (event) {
    // props.makeSelected(event.target)
    props.makeSelected(event.target.attributes[0]);
  }

  const cocktails = props.cocktails.map( c => <li key={c.id} data-id={c.id} onClick={(event) => handleClick(event)}>{c.name}</li>)

  return(
    <ul>{cocktails}</ul>
  )
}

export default CocktailList;
