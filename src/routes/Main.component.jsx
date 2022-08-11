import React from "react";
import BottomPanel from "../components/bottom-section/BottomPanel.component";
import TopPanel from "../components/top-section/TopPanel.component";

function Main() {
  return (
    <main className="calendarApp">
      <TopPanel />
      <BottomPanel />
    </main>
  );
}

export default Main;
