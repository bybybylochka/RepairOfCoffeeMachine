import './App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import AboutUs from "./components/about-us/AboutUs";
import Price from "./components/price/Price";
import Defects from "./components/defects/Defects";
import Defect from "./components/defects/Defect";
import React from "react";
import CostCalculation from "./components/cost-calculation/CostCalculation";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Routes>
                    <Route path={'/about-us'} element={<AboutUs/>}/>
                    <Route path={'/price'} element={<Price/>}/>
                    <Route path={'/defects'} element={<Defects/>}/>
                    <Route path={'/cost-calculation'} element={<CostCalculation/>}/>
                    <Route path={'/defects/error'} element={<Defect/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
