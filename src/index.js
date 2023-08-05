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
import Cake from './Cake.js';
import Beanssoup from './Beanssoup';
import Contact from './Contact.js';
import Meatpie from './Meatpie';
import Friedrice from './Friedrice.js';
import Ewedu from './Ewedu.js';
import CoconutRice from './CoconutRice.js';
import Okra from './Okra.js';
import Vegetables from './Vegetables.js';
import FishPepperSoup from './FishPepperSoup.js';
import IceCream from './IceCream.js';
import swDev from './swDev.js';

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
                    <Route path="/Ewedu" element={<Ewedu />} />
                    <Route path="/Beanssoup" element={<Beanssoup />} />
                    <Route path="/Cake" element={<Cake />} />
                    <Route path="/Meatpie" element={<Meatpie />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/CoconutRice" element={<CoconutRice />} />
                    <Route path="/Okra" element={<Okra />} />
                    <Route path="/Vegetables" element={<Vegetables />} />
                    <Route path="/FPS" element={<FishPepperSoup />} />
                    <Route path="/IceCream" element={<IceCream/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}
swDev();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<START/>);

