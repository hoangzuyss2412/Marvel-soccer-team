import {Main} from './Components/Main'
import { Character } from './Components/Character';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Components/style.css';
import { Squad } from './Components/Squad';
import {createContext, useState} from "react";

export const SquadContext = createContext();
export const SquadImageContext = createContext();
export const HeroDetailContext = createContext();

function App() {
  const [heroPositions, setHeroPositions] = useState({}); 
  const [heroImage, setHeroImage] = useState({});
  const [heroDetail, setHeroDetail] = useState({});
  return (
    <BrowserRouter>
    <SquadImageContext.Provider value = {[heroImage, setHeroImage]}>
    <SquadContext.Provider value = {[heroPositions, setHeroPositions]}>
    <HeroDetailContext.Provider value = {[heroDetail, setHeroDetail]}>
       <div className="App">
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/:id" element={<Character/>}/>
            <Route path="/squad" element = {<Squad heroImage={heroImage} heroPositions={heroPositions}
            heroDetail={heroDetail}/>} />
          </Routes>
      </div>
      </HeroDetailContext.Provider>
      </SquadContext.Provider>
      </SquadImageContext.Provider>
    </BrowserRouter>
   
  );
}

export default App;
