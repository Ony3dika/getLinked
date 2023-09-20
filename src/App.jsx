import Navbar from "./components/navbar";
import Hero from "./pages/hero";
import Intro from "./pages/intro";
import Rules from "./pages/rules";
import Judge from "./pages/judge";

function App() {
  return (
    <div className='bg-main min-h-screen text-white'>
      <Navbar />
      <Hero />
      <Intro />
      <Rules/>
      <Judge/>
    </div>
  );
}

export default App;
