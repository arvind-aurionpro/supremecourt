
import MainRouter from "./components/router/MainRouter";
import { BrowserRouter} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter  basename={'/supremecourt'}>
        <MainRouter />        
      </BrowserRouter>
    </div>
  );
}

export default App;
