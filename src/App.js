import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './pages/Home/About/About';
import Contact from './pages/Home/Contact/Contact';
import Home from './pages/Home/Home/Home';
import Navbar from './pages/Home/Navbar/Navbar';
import Projects from './pages/Home/Projects/Projects';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/projects'>
            <Projects></Projects>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
