import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import puff from "./Images/puff.jpeg";

export default function PuffPuff() {
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
                        <h2> Recipes for Puff-Puff </h2>
                        <img alt="" id="PuffImage" src={puff} />
                        <div id="main">
                            <p id="in">INGREDIENTS REQUIRED</p>
                            <div id="source">
                                <p> 600g of all-purpose Flour</p>
                                <p> 10g of Yeast</p>
                                <p> 150g of Sugar </p>
                                <p> Vegetable Oil</p>
                                <p> Warm water</p>
                                <p> Pinches of salt </p>
                                <p> Half teaspoon of nutmeg</p>



                            </div>

                        </div>
                        <h2> Direction for make Puff-Puff Dough</h2>
                        <ul>
                            <li>Put the flour in bowl with nutmeg, Yeast, sugar and salt. mix all ofthem together </li>
                            <li> Add warm water to the above until the mixture is smooth and not too watery to the above mixture. We use warm water to make the dough rise fast</li>
                            <li> After mixing it cover the bowl with an aluminum foil and allow the dough to rise for 45 minutes</li>
                            <li> Put Enough of quantity of vegetable oil to deep fry the puff puff </li>
                            <li> preheat the oil before frying the puff puff</li>
                            <li> Add a small amount of the dough to the frying pan to check if it hot enough that is if the you and th dough and the dough float on the surface</li>
                            <li> To make the the puff puff spherical we useour hands to put the dough in the pan that is take a little amount of the dough in your hands now make a little hole in your hands from
                                your index finger to youur pinky finger and allow the dough to drop to the pan
                            </li>
                            <li> Fry the dough until it is golden brown and flip to the other side and also frying till it is golden brown</li>
                            <li> Repeat the above process still the dough is exhausted</li>

                        </ul>
                    </center>
                </div>
            </div>
        </>
    )
}