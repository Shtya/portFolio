import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";

import Main from './component/main';
import Navbar from "./component/Navbar";

function App(){
  return (
    <div className="App backGround ">
      <BrowserRouter>
      <Navbar />

        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
