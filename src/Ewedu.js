import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Ewe from './Images/ewedu1.jpeg';

export default function Ewedu() {
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
                        <h2> Recipes for Ewedu Soup </h2>
                        <img id="EweduImage" alt="" src={Ewe} />
                        <div id="main">
                            <p id="in">INGREDIENTS REQUIRED</p>
                            <div id="source">
                                <p> 3 cups of Jute (Ewedu) leaves</p>
                                <p>2 tablespoons of locust beans (iru)</p>
                                <p>1 tablespoon of ground crayfish (optional)</p>
                                <p> 1 seasoning cube (optional).</p>
                                <p>Salt to taste</p>

                            </div>
                            <h2> Direction for  making Ewedu Soup(without Blender)</h2>
                            <ul>
                                <li>Pluck your ewedu leaves and wash to get rid of dirt.</li>
                                <li>Place in a pot on low-medium heat with water and potash and bring to a boil till the leaves are soft.
                                    In a bowl, add a little amount of water to your ground Egusi to mix it and then introduce into the pot.</li>
                                <li>While still boiling, use your Ijabe or hand blender to pound your ewedu leaves to achieve the viscosity you want.</li>
                                <li>After thats achieved, add your locust beans and salt. Allow to simmer for about 2 minutes then take off heat.</li>
                            </ul>
                            <h2> Direction for making ewedu soup (with Blender)</h2>
                            <ul>
                                <li>Pluck your ewedu leaves and wash to remove all dirt.</li>
                                <li>In a large pot, place your ewedu leaves on low-medium heat uncovered for 5minutes.</li>
                                <li>After which you put it into a blender and blend. Pour your blended ewedu into a pot and place on low-medium heat.</li>
                                <li>Add your locust beans (iru), Egusi paste and salt. Stir to combine. Add water in little increments till you achieve your desired viscosity and allow to boil till your Egusi starts to curdle.</li>
                                <li>Take off heat and serve with Solid food of choice.</li>
                            </ul>
                        </div>
                    </center>
                </div>
            </div>
        </>
    )
}