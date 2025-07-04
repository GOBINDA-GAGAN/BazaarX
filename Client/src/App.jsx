import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="min-h-[90vh] p-3">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
