import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Work from './components/Works';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <Nav/>
      <main>
        <Hero/>
      </main>
      <Skills/>
      <Work/>
      <Contact/>
      <footer>
          <Footer/>
      </footer>
      </div>

    </div>
  );
}

export default App;
