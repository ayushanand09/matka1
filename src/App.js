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
  );
}

export default App;
