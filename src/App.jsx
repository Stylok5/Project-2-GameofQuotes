import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./styles/styling.scss";
import Homepage from "./pages/Homepage";
import QuotePage from "./pages/QuotePage";
const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/character/:id" element={<QuotePage />} />
      </Routes>
    </div>
  );
};

export default App;
