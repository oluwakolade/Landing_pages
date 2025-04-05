import React from "react";

const Testimonials = (props) => {
  return (
    <div className="test-cards">
      <img src={props.avatar} alt={props.name} />
      <p className="test-comment">{props.comment}</p>
      < p className="test-name">{props.name}</p>
      <p className="test-role">{props.role}</p>
    </div>
  );
};

export default Testimonials;
