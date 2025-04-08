import React, { useState } from "react";

const Features = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    { id: "tab1", label: "Simple Bookmarking" },
    { id: "tab2", label: "Speedy Searching" },
    { id: "tab3", label: "Easy Sharing" },
  ];

  const tabContent = {
    tab1: (
      <TabContent
        img="/illustration-features-tab-1.svg"
        title="Bookmark in one click"
        desc="  Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
      />
    ),

    tab2: (
      <TabContent
        img="/illustration-features-tab-2.svg"
        title="Intelligent search"
        desc=" Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
      />
    ),
    tab3: (
      <TabContent
        img="/illustration-features-tab-3.svg "
        title=" Share your bookmarks"
        desc="Easily share your bookmarks and collections with others. Create a shareable  link that you can send at the click of a button. "
      />
    ),
  };

  return (
    <div className="features container-center">
      <h2>Features</h2>
      <p className="body-p">
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>

      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={activeTab === tab.id ? "active-tab" : "inactive-tab"}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content-container">
        {tabContent[activeTab]}
      </div>
    </div>
  );
};

export default Features;

const TabContent = ( props ) => {
  return (
    <div className="tab-content">
      <div className="tab-content-left">
        <img src={props.img} alt={props.title} />
        <div className="blue-bg-left"></div>
      </div>

      <div className="tab-content-right">
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
        <button className="btn info-button"> More Info</button>
      </div>
    </div>
  );
};
