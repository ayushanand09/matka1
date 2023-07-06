import './App.css';
import BetButtons from './Pages/BetButtons';
import Buttons from './Pages/Buttons';
import Cards from './Pages/Cards';
import Home from './Pages/Home';
import Tokens from './Pages/Tokens';

const App  = () => {
  return (
    <>
    <Home />
    <Cards />
    <Tokens />
    <BetButtons />
    <Buttons />
    </>

    // <div className="App">
    //   <header className="App-header">
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
