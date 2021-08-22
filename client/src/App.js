import React from "react";

// HOC
import HomeHocLayout from "./HOC/Home.Hoc";

// Component
import Temp from "./components/Temp";


function App() {
  return (
    <>
      <HomeHocLayout path="/" exact component={Temp}/>
    </>
  );
}

export default App;
