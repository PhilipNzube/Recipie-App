import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import vegetable from './Images/vegetable.jpg';

export default function Vegetables() {
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
                        <h2> Recipes for Vegetable-Soup </h2>
                        <img id="VegetablesImage" src={vegetable} alt="" />
                        <div id="main">
                            <p id="in">INGREDIENTS REQUIRED</p>
                            <div id="source">
                                <p> 1 and 1/2 cups palm oil</p>
                                <p> 1 and 1/2 cups vegetable oil</p>
                                <p>     One medium sized onion</p>
                                <p> 5 large sized tomatoes</p>
                                <p> 1 teaspoon pepper, you can add more</p>
                                <p> 1 medium sized bunch ugu vegetables (Fluted pumpkin)</p>
                                <p> 3 large sized bunch water leaf</p>
                                <p> 1 cup ground crayfish</p>
                                <p> 2 seasoning cubes</p>
                                <p> salt to taste</p>
                                <p> No water. The soup is cooked with juices from vegetables.</p>
                                <p>  2 kg goat meat (Roasted)</p>


                            </div>
                            <h2> Direction for making Vegetable Soup</h2>
                            <ul>
                                <li>Stir fry the onion and chopped tomatoes in hot oil with pepper and one seasoning cube. Stir till onion is translucent.
                                    My tomatoes are frozen, so, the skin came off easily. You can pour boiling water on tomatoes or freeze to remove skin before chopping.</li>
                                <li> Add washed vegetables, stir very well, cover and leave for about a minute before adding crayfish and the remaining seasoning cube.
                                    Note that you may also fry the crayfish with the onion and tomatoes o. cover to cook for at least half a minute.</li>
                                <li> Stir, check for taste and salt before turning off the heat.
                                    Soup can be served with fufu, tuwo, eba, semo, amala, rice, plantain,</li>
                            </ul>

                        </div>
                    </center>
                </div>
            </div>
        </>
    )
}