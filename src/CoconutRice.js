import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Rice from './Images/ricec.jpeg';

export default function CoconutRice() {
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
                        <h2> Recipes for Coconut-Rice </h2>
                        <img id="CoconutRiceImage" src={Rice} alt="" />
                        <div id="main">
                            <p id="in">INGREDIENTS REQUIRED</p>
                            <div id="source">
                                <p>1/2 teaspoon coconut oil (or vegetable oil)</p>
                                <p>2 cups Thai jasmine white rice, rinsed well</p>
                                <p>1/2 cup of canned coconut milk</p>
                                <p> 1/2 teaspoon salt</p>
                                <p > 1 3 / 4 cups water</p >

                            </div >
                            <h2> Direction for making Coconut-Rice</h2>
                            <ul>
                                <li>Rub the oil over the bottom of a deep-sided pot.</li>
                                <li>Place the rice in the pot along with the coconut milk, salt, and water.
                                    Set over medium-high to high heat and bring to a boil. Stir occasionally to keep rice from sticking to the bottom of the pot.</li>
                                <li>Once the liquid has begun to gently bubble, stop stirring, and reduce the heat to low, achieving a constant simmer.</li>
                                <li>Cover tightly with a lid and let simmer 15 to 20 minutes, or until most of the liquid has been absorbed by the rice.</li>
                                <li>Check doneness by pulling the rice aside with a fork.
                                    If there is still a good amount of liquid left, steam for a few minutes longer. If the liquid is gone, turn off the heat.</li>
                                <li>With the heat off, leave the covered pot on the hot burner for another 5 to 10 minutes, or until you're ready to eat.</li>

                            </ul>
                        </div >
                    </center>
                </div >
            </div >
        </>
    )
}