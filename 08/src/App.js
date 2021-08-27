import './App.css';
import Sizes from './components/sizes';
import Products from './components/products';
import Cart from './components/cart';

function App() {
  
  return (
    <div className="app">
      <Sizes></Sizes>
      <Products></Products>
      <Cart></Cart>
    </div>
  );
}

export default App;