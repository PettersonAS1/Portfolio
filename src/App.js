import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Main from './components/Home/Main';
import Header from './components/Header/Header';
import About from './components/About/About';
import Project from './components/Project/Project';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
