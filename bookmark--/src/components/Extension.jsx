import React from "react";

const Extension = () => {
  return (
    <section className="extension container-center">
      <h2> Download the extension</h2>
      <p className="body-p"> We’ve got more browsers in the pipeline. Please do let us know if you’ve
      got a favourite you’d like us to prioritize.</p>

      <div className="extension-cards flex flex-col md:flex-row gap-8">
        <ExtensionCard
          img="/logo-chrome.svg"
          title="Add to Chrome"
          desc="Minimum version 62"
          class = "translate-y-0"
        />
        <ExtensionCard
          img="/logo-firefox.svg"
          title="Add to Firefox"
          desc="Minimum version 55"
          class = "translate-y-4"

        />
        <ExtensionCard
          img="/logo-opera.svg"
          title="Add to Opera"
          desc="Minimum version 46"
          class = "translate-y-8"

        />
      
       
      </div>


    </section>
  );
};

export default Extension;

const ExtensionCard = (props) => {
  return (
    <div className= {`extension-card ${props.class} `} >
      <img src={props.img} alt={props.title} />
      <h4>{props.title}</h4>
      <p className="body-s">{props.desc}</p>
      <button className="btn"> Add & Install Extension</button>
    </div>
  );
};
