import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Info from "./components/Info";
import Image from "./components/Image";
import Form from "./components/Form";

const App = () => {
  return (
    <>
      <Navbar />
      <Info />
      <main>
        <Form />
        <Image />
      </main>
    </>
  );
};

export default App;
