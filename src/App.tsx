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
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="min-h-screen  transition-colors duration-300">
      <HeroBg />
      <Navigation toggleTheme={toggleTheme} theme={theme} />
      <main className="container mx-auto px-0 pt-24 pb-12 space-y-20">
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
