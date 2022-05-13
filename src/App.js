import "./App.css";
import { EditPagecomponent } from "./components/EditComponent/EditPage";
import DisplayMarkets from "./components/DisplayMarket/DisplayMarketView";
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import { Button } from "@mui/material";

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<DisplayMarkets/>}>abc</Route>        
        <Route path="/market" element={<DisplayMarkets/>}>abc</Route>
        <Route path="/edit" element={<EditPagecomponent/>}>abc</Route>
      </Routes>
    </Router>




     
  );
}

export default App;
