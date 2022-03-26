import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Header/Shops/Shop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
    </div>
  );
}

export default App;