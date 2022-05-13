import "./App.css";
import { EditPagecomponent } from "./components/EditComponent/EditPage";
import DisplayMarkets from "./components/DisplayMarket/DisplayMarketView";
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import { Button } from "@mui/material";
import Navbar from './components/Navbar/Navbar'
import { NewMarket } from "./components/NewMarket/NewMarket";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<DisplayMarkets/>}>abc</Route>        
        <Route path="/market" element={<DisplayMarkets/>}>abc</Route>
        <Route path="/edit" element={<EditPagecomponent/>}>abc</Route>
        <Route path="/newmarket" element={<NewMarket/>}>abc</Route>


      </Routes>
    </Router>




     
  );
}

export default App;
