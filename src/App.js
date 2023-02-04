import React from "react"
import Date from "./Components/Date/Date";
import EnterTask from "./Components/EnterTask/EnterTask";

function App() {
  return (
    <div className="App">
      <main className="main_content">
        <Date />
        <EnterTask />
      </main>
    </div>
  );
}

export default App;
