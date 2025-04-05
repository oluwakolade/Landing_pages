import React from "react";

const Card = (props) => {
  return (
      <div className={`card ${props.order}`}>
        <h2 >{props.title}</h2>
        <p >{props.text}</p>
        <button className={props.btn}> Learn more </button>
      </div>

      // {/* <div>
      //   <img src={props.img} alt={props.title} />
      // </div> */}
  );
};

export default Card;
