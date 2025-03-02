import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ResourceCard from "./components/ResourceCard";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/category/:category" element={<ResourceCard />} />
      </Routes>
    </Layout>
  );
}

export default App;
