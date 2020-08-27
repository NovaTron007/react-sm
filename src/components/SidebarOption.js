import React from "react";

// custom css file
import "../SidebarOption.css";

// receive Icon component and text from Sidebar component
function SidebarOption({ active, text, Icon }) {
  return (
    <div className={`sidebar-option ${active ? "sidebar-option--active" : ""} `}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;
