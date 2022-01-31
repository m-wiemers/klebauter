import React from "react";
import Card from "../components/Card";
import Spacer from "../helpers/Spacer";

export default function App() {
  return (
    <>
      <div className="App">
        <h1>Klebauter.de</h1>
        <p>NO MORE T-SHIRTS</p>
        <Spacer />
        <p>irgendwann kommt hier was neues... </p>
        <Spacer />
        <Card
          headline="Was macht er jetzt?"
          text="Kurz: Web-Entwicklung. Web-Apps -> React, React-Native, Nextjs, TypeScript, HTML, CSS usw."
        />
      </div>
    </>
  );
}
