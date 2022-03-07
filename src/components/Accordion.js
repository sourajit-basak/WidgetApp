import React, { useState } from "react";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
//import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Accordion = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const onTitleClick = (index) => {
    console.log(index);
    setActiveIndex(index);
  };
  const renderedItems = props.itemProp.map((item, index) => {
    console.log(props.itemProp);
    const active = index === activeIndex ? "active" : "";
    return (
      <React.Fragment key={item.title}>
        <div className={`${active} title`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`${active} content`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return (
    <div className="ui styled accordion">
      {renderedItems}
      <h1>{activeIndex}</h1>
    </div>
  );
};

export default Accordion;
