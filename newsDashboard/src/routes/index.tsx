import {
    BrowserRouter as Router,
    Routes,
    Route,
    
  } from "react-router-dom";

import MainPage from "../pages/mainpage";
import StockPage from "../pages/stockpage";

export default function AllRoutes(){
    return(
    <>
    <Router>
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/:stockTicker" element={<StockPage/>}/>
        </Routes>
    </Router>
    </>)
}