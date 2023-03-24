
import MainRouter from "./components/router/MainRouter";
import { BrowserRouter} from "react-router-dom";
import ScrollToTop from "./components/scrolltotop/ScrollToTop";
function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <MainRouter />   
        <ScrollToTop />     
      </BrowserRouter>
    </div>
  );
}

export default App;
