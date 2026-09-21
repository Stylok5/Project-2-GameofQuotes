import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./global.scss";

import Homepage from "./pages/Home";
import Characters from "./pages/Characters";
import CharacterDetails from "./pages/CharacterDetails";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/character/:id" element={<CharacterDetails />} />
      </Routes>
    </div>
  );
};

export default App;
