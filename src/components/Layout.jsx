import React from "react";
import NavBar from "./Nav";

export default function Layout({ children }) {
  return (
    <div id="flex-container">
      <NavBar />
      <main>
        {children}
      </main>
    </div>
  );
}
