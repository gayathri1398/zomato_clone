import React from "react";

// HOC
import HomeHocLayout from "./HOC/Home.Hoc";

// Component
import Temp from "./components/Temp";
import Master from "./components/Master";


function App() {
  return (
    <>
      <HomeHocLayout path="/" exact component={Temp}/>
      <HomeHocLayout path="/:type" exact component={Master}/>
    </>
  );
}

export default App;
