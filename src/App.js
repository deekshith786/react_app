import "./App.css";
import DisplayMarkets from "./components/DisplayMarket/DisplayMarketView";
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import { NewMarket } from "./components/NewMarket/NewMarket";
import { MarketTabs } from "./components/MarketsTabView/MarketTabView";
import { EditMarket } from "./components/EditMarket/EditPage";
import { NavBar } from "./components/Navbar/NavBar";
import { Dashboard } from "./components/Dashboard/Dashboard";


function App() {
  return (
    
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Dashboard/>}>abc</Route>        
        <Route path="/new" element={<NewMarket/>}>abc</Route>        
        <Route path="/market" element={<DisplayMarkets/>}>abc</Route>
        <Route path="/edit" element={<EditMarket/>}>abc</Route>
        <Route path="/tab" element={<MarketTabs/>}>abc</Route>
      </Routes>
    </Router>




     
  );
}

export default App;
