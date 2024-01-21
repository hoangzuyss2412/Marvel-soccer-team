import {Main} from './Components/Main'
import { Character } from './Components/Character';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Components/style.css';

function App() {
  return (
    <BrowserRouter>
       <div className="App">
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/:id" element={<Character/>}/>
            <Route path="/squad"/>
          </Routes>
          
      </div>
    </BrowserRouter>
   
  );
}

export default App;
