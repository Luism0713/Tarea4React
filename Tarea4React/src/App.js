import "./App.css";
import React from "react";
import Agenda from "./components/bodyContacts/Agenda";
import Title from "./components/Text/Tittles/Title";
import Roller from "./components/utilities/bottons/Roller";

function App() {
  return (
    <div>
      <Title value="MY CONTACTS" classType="TitleMain" />
      <div className="App">
        <Agenda />
      </div>
      <Roller />
    </div>
  );
}

export default App;
