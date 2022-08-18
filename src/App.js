import './App.css';
import AboutMe from './Components/AboutMe/AboutMe';
import Experience from './Components/Experience/Experience';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AboutMe/>
      <Experience/>
      <Projects/>
    </div>
  );
}

export default App;
