import React from "react";
import { ThemeProvider } from "./ThemeContext.tsx";
import Header from "./components/Header";

function Home() {
  return (
    <main className="container">
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    </main>
  );
}

export default Home;
