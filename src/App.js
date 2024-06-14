

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Collection from "./pages/Collection";
import DiDmap from "./pages/DiDmap";
import Faq from "./pages/Faq";




function App() {
  return (
    <div className="App">
      
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
      
          
          {/* <Route index element={<Home />} /> */}
          <Route path="./Collection" element={<Collection />} />
          <Route path="DiDmap" element={<DiDmap />} />
          <Route path="../Faq" element={<Faq />} />
          
        </Route>
      </Routes>
    </BrowserRouter>

    
    </div>
  );
}

export default App;



   