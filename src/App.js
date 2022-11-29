import './index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Pages from "./components/accounts/listpages/pages/Pages";
import DetailPages from "./components/accounts/detailpages/DetailPages";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Pages/>}/>
                    <Route path='/pages' element={<Pages/>}/>
                    <Route path='/detail/:userId' element={<DetailPages/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
