import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Beams from "./react-bits/beams/Beams.tsx";
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';
import Redirect from "./components/Redirect.tsx";

const beamColors = ["#74a7fe", "#ffaa00", "#e63b7a"];

function pickRandomColor(colors: string[]): string {
  return colors[Math.floor(Math.random() * colors.length)];
}

function App() {
  return (
    <BrowserRouter>
      <div className="beams-container">
        <Beams
            beamWidth={8}
            beamHeight={25}
            beamNumber={3}
            lightColor={pickRandomColor(beamColors)}
            speed={3}
            noiseIntensity={2}
            scale={0.1}
            rotation={0}
        />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:slug" element={<BlogPost />} />
            <Route path="/*" element={<Redirect to={"/"} />} />
          </Routes>
        </div>

        <p className="text-white/30 text-xs pb-8 px-6 sm:px-4 max-w-lg mx-auto w-full text-left">
          &copy; {new Date().getFullYear()} Alexander Erwin
        </p>
      </div>
    </BrowserRouter>
  );
}

export default App;
