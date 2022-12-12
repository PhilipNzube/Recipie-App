import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export default function BeccaRecepies() {
    useEffect(() => {
        setTimeout(() => {
            document.body.style.overflowY = "hidden";
            document.getElementById("Container").style.display = "block";
            document.getElementById("Loader").style.display = "none";
            setTimeout(() => {
                document.body.style.overflowY = "visible";
                document.getElementById("Home").style.textDecoration = "underline";
                document.getElementById("Home").style.textDecorationColor = "blue";
                document.getElementById("Home").style.textDecorationThickness = "3px";
            }, 1500);
        }, 1000);
    }, []);
    const Navigate = useNavigate();
    const GoToTomatoes = () => {
        Navigate("/Tomatoes");
    }

    const GoToChin = () => {
        Navigate("/ChinChin");
    }

    const GoToEwedu = () => {
        Navigate("/Ewedu");
    }

    const GoToJellof = () => {
        Navigate("/Jellofrice");
    }

    const GoToPancakes = () => {
        Navigate("/Pancakes");
    }

    const GoToPuff = () => {
        Navigate("/PuffPuff");
    }

    const GoToSpring = () => {
        Navigate("/Springrolls");
    }

    const GoToFried = () => {
        Navigate("/Friedrice");
    }

    let url = null;
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


                    <center>
                        <h1 className="h" onMouseOver={Show}>BECCA RECIPIES<span className="com">.COM</span></h1>
                    </center>


                    <nav id="NAVIGATION">
                        <div id="div">
                            <ul>
                                <a id="Home" href={url}> HOME</a>
                                <a id="About" href={url}> ABOUT </a>
                                <a id="Contact" href={url}> CONTACT</a>

                            </ul>
                        </div>
                    </nav>
                </header>
                <div className="wh">
                    <center>
                        <h1> RECIPIES FOR </h1>
                    </center>
                    <center>
                        <h2><p> PASTRIES </p></h2>
                    </center>
                    <div id="meat"> <p id="MeatText">Meatpies</p></div>
                    <div id="pancakes" onClick={GoToPancakes}><p id="PancakeText">Pancakes</p></div>
                    <div id="cake"><p id="CakeText"> cake </p></div>
                    <div id="puff" onClick={GoToPuff}><p id="PuffPuffText">Puff-Puff</p></div>
                    <div id="spring" onClick={GoToSpring}><p id="SpringRollText">Spring rolls</p></div>
                    <div id="chin" onClick={GoToChin}><p id="ChinChinText">Chin Chin</p></div>
                    <center>
                        <h2><p> RICE </p></h2>
                    </center>
                    <div id="jellof" onClick={GoToJellof}> <p id="JellofText">Jollof rice</p></div>
                    <div id="fried" onClick={GoToFried}> <p id="FriedText">Fried rice</p></div>
                    <div id="coconut"> <p id="CoconutText">Cocconut-rice</p></div>

                    <center>
                        <h2><p> STEW </p></h2>
                    </center>

                    <div id="beans"> <p id="BeansText">Beans soup</p></div>
                    <div id="okra"> <p id="OkraText">Okra soup</p></div>
                    <div id="ewedu" onClick={GoToEwedu}> <p id="EweduText">Ewedu soup</p></div>
                    <div id="tomato" onClick={GoToTomatoes}><p id="BeansText">  Tomato sauce </p></div>
                    <div id="vegetable"><p id="VegetableText">Vegetable soup</p></div>
                    <center>
                        <h2><p> PEPPER SOUP</p></h2>
                    </center>

                </div>
            </div>
        </>
    )
}