import React from 'react';

const Scroll = (props) => {
  return (
    <div className='' style={{overflowY: 'scroll', border: '5px solid black', height: '500px', margin:'1rem'}}>
      {props.children}
    </div>
  )
}

export default Scroll;