import React from "react";

function Photocard(props) {
  return (
    <div key={props.id}>
      <div className="name">
        <h4>{props.name}</h4>
      </div>
      <div className="photo">
        <img src={props.img} alt={props.name} />
      </div>
    </div>
  );
}

export default Photocard;
