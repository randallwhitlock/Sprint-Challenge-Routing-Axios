import React from 'react';

import Smurf from './Smurf';

const Smurfs = (props) => {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          { props.smurfs.map((smurf) => {
            return <Smurf 
            name={smurf.name} 
            age={smurf.age} 
            height={smurf.height} 
            key={smurf.id} />;
          })}
        </ul>
      </div>
    );
  };

export default Smurfs;