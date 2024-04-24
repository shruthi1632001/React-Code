import logo from './logo.svg';
import './App.css';
import ProductList from './ProductList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Product Management App</h1>
      </header>
      <main>
        <ProductList/>
      </main>
    </div>
  );
}

export default App;
