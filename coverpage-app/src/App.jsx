import { useState } from "react";
import "./App.css";
import SideBar from "./SideBar.jsx";
import Content from "./Content.jsx";

function App() {
  return (
    <div>
      <CoverPage />
    </div>
  );
}

function CoverPage() {
  return (
    <div className="coverpage">
      <SideBar />
      <Content />
    </div>
  );
}

export default App;
