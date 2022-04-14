import React from "react";
import Cards from "./components/Cards/Cards";
const cardImages = [
  { src: "images/mark.jpg", matched: false },
  { src: "/images/khyn.jpg", matched: false },
  { src: "/images/benjie.jpg", matched: false },
  { src: "/images/chan.jpg", matched: false },
  { src: "/images/nacua.jpg", matched: false },
  { src: "/images/jude.jpg", matched: false },
  { src: "/images/tima.jpg", matched: false },
  { src: "/images/prince.jpg", matched: false },
];

const App = () => {
  return (
    <React.Fragment>
      <Cards cardImages={cardImages} />
    </React.Fragment>
  );
};

export default App;
