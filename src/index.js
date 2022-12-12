import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Becca.css';
import BeccaRecipies from './BeccaCook.js';
import Tomatoes from './Tomatoes.js';
import Pancakes from './Pancakes.js';
import PuffPuff from './PuffPuff.js';
import Springrolls from './Springrolls.js';
import ChinChin from './ChinChin.js';
import Jellofrice from './Jellofrice.js';
import Friedrice from './Friedrice.js';
import Ewedu from './Ewedu.js';

function START(){
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<BeccaRecipies/>}/>
                    <Route path="/Tomatoes" element={<Tomatoes />} />
                    <Route path="/Pancakes" element={<Pancakes />} />
                    <Route path="/PuffPuff" element={<PuffPuff />} />
                    <Route path="/Springrolls" element={<Springrolls />} />
                    <Route path="/ChinChin" element={<ChinChin />} />
                    <Route path="/Jellofrice" element={<Jellofrice />} />
                    <Route path="/Friedrice" element={<Friedrice />} />
                    <Route path="/Ewedu" element={<Ewedu/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<START/>);

