import logo from "./logo.svg";
import "./App.css";
import MemoryGame from "./MemoryGame";
import { Provider } from "react-redux";
import { store } from "./Store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MemoryGame />
      </div>
    </Provider>
  );
}

export default App;
