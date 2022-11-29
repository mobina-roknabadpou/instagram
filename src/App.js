import './index.css';
import ListPages from "./components/accounts/listpages/ListPages";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Pages from "./components/accounts/listpages/pages/Pages";
import DetailPages from "./components/accounts/detailpages/DetailPages";

function App() {
  return (
    <div className="App">
        <EngagedPages/>
    </div>
  );
}

export default App;
