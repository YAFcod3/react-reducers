import { BrowserRouter,  Route, Routes } from "react-router-dom";
import "./App.css";
import Calendario from "./Calendario";
import Compra from "./Compra";
import Navbar from "./components/Navbar";
import ContadorMejorado from "./Contador";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div style={{ marginTop: "100px" }}>
        <Routes>
          <Route path="/" element={<Calendario />} />
          <Route path="/compra" element={<Compra />} />
          <Route path="/contador" element={<ContadorMejorado />} />

          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
