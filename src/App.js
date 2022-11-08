import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import Container from './connect/Container';
import RandomQuote from './components/RandomQuote';

function App() {

  return (
  <RandomQuote/>
  );
}

export default App;
