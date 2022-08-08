import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./routes/Main.component";
import Account from "./routes/Account.component";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/Account" element={<Account />} />
    </Routes>
  );
}

export default App;
