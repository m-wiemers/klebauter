import React from "react";
import Footer from "../components/Footer";
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
          text="Nach der Aufgabe des Shirt-Imperiums hab ich mich entschieden meine berufliche Laufbahn weitgehend zu verändern. Zu verbesser. Und das hab ich geschafft. Zur zeit arbeite ich als Web-Entwickler in einem großen Unternehmen, mit spannenden Aufgaben und einem großen Ziel."
          button
        />
      </div>
      <Footer />
    </>
  );
}
