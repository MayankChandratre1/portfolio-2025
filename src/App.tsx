import { useEffect, useState } from "react";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Contacts from "./sections/Contacts";
import Projects from "./sections/Projects";
import HeroBg from "./components/backgrounds/HeroBg";
import Navigation from "./sections/Navigation";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    // Set dark theme as default on initial load
    document.documentElement.classList.add("dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="min-h-screen transition-colors duration-300">
      <HeroBg />
      <Navigation toggleTheme={toggleTheme} theme={theme} />
      <main className="container mx-auto px-0 pt-24 pb-12 space-y-0">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contacts />
      </main>
      <footer className="border-t">
        <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
          © {new Date().getFullYear()} Mayank Chandratre. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
