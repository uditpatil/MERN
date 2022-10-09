
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import ParamComp from './components/ParamsComp';

function App() {
  return (
  
  
  <div className="App">
    <BrowserRouter>  
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/:word" element={<ParamComp />}/>
        <Route path="/:word/:col/:backCol" element={<ParamComp />}/>
      </Routes>
    </BrowserRouter>
    </div>
  
  );
}

export default App;
