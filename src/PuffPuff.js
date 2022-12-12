import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
    var navdisplay = document.getElementById("NAVIGATION");
    const Show = () => {
        navdisplay.style.display = "block";
    }
    const Hide = () => {
        navdisplay.style.display = "none";
    }

    return (
        <>
            <div id="Loader"><center>LOADING...</center></div>
            <div id="Container">
                <header onMouseLeave={Hide}>
                    <center> <h1 className="h" onMouseOver={Show}>BECCA RECIPIES<span className="com">.COM</span></h1></center>
                    <nav id="NAVIGATION">
                        <div id="div">
                            <ul>
                                <a id="Home" href={url} onClick={GoHome}>HOME</a>
                                <a id="About" href={url}>ABOUT </a>
                                <a id="Contact" href={url}>CONTACT</a>

                            </ul>
                        </div>
                    </nav>
                </header>

                <div class="wh">
                    <center>
                        <h2> Recipes for Puff-Puff </h2>
                        <img alt="" id="PuffImage" />
                        <div id="main">
                            <p id="in"><input type="checkbox" id="radio" /> Ingredient Required</p>
                            <div id="source">
                                <p> Flour</p>
                                <p> Yeast</p>
                                <p> Sugar </p>
                                <p> Vegetable Oil</p>



                            </div>
                        </div>
                    </center>
                </div>
            </div>
        </>
    )
}