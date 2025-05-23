import "./App.css";

function App() {
  function getSomething(countProp) {
    const count = countProp;
    return count;
  }

  return <>{getSomething}</>;
}

export default App;
