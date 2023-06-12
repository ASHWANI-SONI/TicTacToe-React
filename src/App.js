import React from 'react';

function Square(){
  return <button className="square">1</button>;
}

export default function Board() {
  return(
    <div>
      <div classname ="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div classname ="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div classname ="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
    );
}
