import "./App.css";
import logo from "./logo.svg";

function Header() {
  return (
    <header className="App-header">
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}

// Componente Logo
function Logo() {
  return <img src={logo} className="App-logo\" alt="logo" />;
}

// Componente App que utiliza os outros componentes
function App() {
  return (
    <div className="App">
      <Logo />
      <Header />
    </div>
  );
}

export default App;
