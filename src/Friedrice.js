import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Fried from './Images/fried.jpeg';

export default function Friedrice() {
    useEffect(() => {
        setTimeout(() => {
            document.body.style.overflowY = "hidden";
            document.getElementById("Container").style.display = "block";
            document.getElementById("Loader").style.display = "none";
            setTimeout(() => {
                document.body.style.overflowY = "visible";
            }, 1500);
        }, 1000);
    }, []);
    let url = null;
    const Navigate = useNavigate();
    const GoHome = () => {
        Navigate("/");
    }
    const GoToContact = () => {
        Navigate("/Contact");
    }
    const Show = () => {
        document.getElementById("NAVIGATION").style.display = "block";
    }
    const Hide = () => {
        document.getElementById("NAVIGATION").style.display = "none";
    }

    return (
        <>
            <div id="Loader"><center>LOADING...</center></div>
            <div id="Container">
                <header onMouseLeave={Hide}>
                    <center> <h1 className="h" onMouseOver={Show}>BECCA RECIPES<span className="com">.COM</span></h1></center>
                    <nav id="NAVIGATION">
                        <div id="div">
                            <ul id="HAC">
                                <a id="Home" href={url} onClick={GoHome}>HOME</a>
                                <a id="About" href={url}>ABOUT </a>
                                <a id="Contact" href={url} onClick={GoToContact}>CONTACT</a>

                            </ul>
                        </div>
                    </nav>
                </header>

                <div className="wh">
                    <center>
                        <h2> Recipes for Fried Rice </h2>
                        <img id="FriedImage" alt="" src={Fried} />
                        <div id="main">
                            <p id="in">INGREDIENTS REQUIRED</p>
                            <div id="source">
                                <p> 3 cups cold leftover cooked rice</p>
                                <p> 1⁄2 - 1 cup butter</p>
                                <p> 1 medium onion (chopped)</p>
                                <p> 2 carrots (diced)</p>
                                <p> 1 cup frozen peas (or a small-medium part of ginger)</p>
                                <p> 3 eggs (beaten)</p>
                                <p> 1⁄2 cup soy sauce (to taste)</p>
                            </div>
                            <h2> Direction for Fried-Rice</h2>
                            <ul>
                                <li> Melt butter in large non-stick pan.</li>
                                <li>Add onion and carrots.</li>
                                <li>Saute until onions are transparent and carrots are crisp tender, about 5 minutes.</li>
                                <li>Add peas and cook one minute more until peas are thawed.</li>
                                <li>Push veggies to one side of pan.</li>
                                <li>Scramble eggs in empty side of pan after the oleo spreads from vegetable.</li>
                                <li>Mix eggs into veggies and season with pepper.</li>
                                <li>then put in small amount of rice and then.</li>
                                <li>Add soy sauce.</li>
                                <li>Then slowly mix in rice by the spoonful until all rice is added and all ingredients are well blended.</li>
                                <li>Fry until steamy hot stirring often.</li>
                            </ul>
                        </div>
                    </center>
                </div>
            </div>
        </>
    )
}