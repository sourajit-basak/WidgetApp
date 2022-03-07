import React from "react";
import Accordion from "./components/Accordion";
import SearchComponent from "./components/SearchComponent";
const items = [
  { title: "name", content: "1234" },
  { title: "class", content: "5678" },
];
const App = () => {
  //itemProp={items}
  return (
    <div>
      {/* <Accordion itemProp={items} /> */}
      <SearchComponent />
    </div>
  );
};

export default App;
