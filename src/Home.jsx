import React from "react";
import { ThemeProvider } from "./ThemeContext.tsx";
import Header from "./components/Header";
import Experiences from "./components/Experiences";

function Home() {
  return (
    <main className="container">
      <ThemeProvider>
        <Header />
        <Experiences />
      </ThemeProvider>
    </main>
  );
}

export default Home;
