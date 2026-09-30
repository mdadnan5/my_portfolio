import { useEffect, useRef, useState, useMemo } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import UiHome from "./components/UiHome";
import bgImage from "./components/images/bgImage.jpg"

function InnerApp({ appRef, theme, setTheme }) {
  const location = useLocation();
  useEffect(() => {
    const removeLocation = () => {
      localStorage.removeItem("location");
    };
    if (location.pathname !== "/ui") {
      removeLocation();
    }
  }, [location]);

  useEffect(() => {
    const appHomeId = document.getElementById("home");
    appHomeId.style.backgroundImage = `url(${bgImage})`;
    appHomeId.setAttribute('data-theme', theme);
  }, [location.pathname, theme]);

  // Scroll Height...
  const [scrollPositionValue, setScrollPositionValue] = useState({ current: 0, prev: 0 });
  useEffect(() => {
    const appHomeId = document.getElementById("home");
    if (appRef.current) {
      const handleScroll = () => {
        const scrollTop = appHomeId.scrollTop;
        setScrollPositionValue({ current: scrollTop, prev: scrollPositionValue.current });
      };
      appHomeId.addEventListener("scroll", handleScroll);
      return () => {
        appHomeId.removeEventListener("scroll", handleScroll);
      };
    }
  }, [appRef, scrollPositionValue]);

  return (
    <Routes>
      <Route path="/" element={<UiHome appRef={appRef} theme={theme} setTheme={setTheme} />} />
    </Routes>
  );
}


function App() {
  const appRef = useRef(null);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const appHomeId = document.getElementById("home");
    if (appHomeId) appHomeId.setAttribute('data-theme', theme);
  }, [theme]);

  // Generate floating particles once
  const particles = useMemo(() => {
    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 4 + 2}px`,
      animationDuration: `${Math.random() * 12 + 8}s`,
      animationDelay: `${Math.random() * 8}s`,
      background: i % 3 === 0
        ? 'rgba(255,180,0,0.5)'
        : i % 3 === 1
        ? 'rgba(120,80,255,0.4)'
        : 'rgba(0,200,255,0.35)',
    }));
  }, []);

  return (
    <div id="home" ref={appRef} data-theme={theme} className={`text-white border-4 border-green-600 overflow-scroll overflow-x-hidden`}>
      {particles.map(p => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            width: p.width,
            height: p.width,
            background: p.background,
            animationDuration: p.animationDuration,
            animationDelay: p.animationDelay,
          }}
        />
      ))}
      <BrowserRouter>
        <InnerApp appRef={appRef} theme={theme} setTheme={setTheme} />
      </BrowserRouter>
    </div>
  );
}

export default App;
