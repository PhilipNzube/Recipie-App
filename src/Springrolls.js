import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import spring from "./Images/spring.jpeg";

export default function Springrolls() {
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
                        <h2> Recipes for SpringRolls </h2>
                        <img alt="" id="SpringRollImage" src={spring} />
                        <div id="main">
                            <p id="in">INGREDIENTS REQUIRED</p>
                            <div id="source">
                                <p> 2 cups of Flour </p>
                                <p> Blended Meat</p>
                                <p> Two Seasoning Cubes</p>
                                <p>Diced Cabbage</p>
                                <p>Diced Onion</p>
                                <p> Diced Pepper</p>
                                <p> 1 teaspoon Curry powder</p>
                                <p> Carrot </p>
                                <p> 1/2 teaspoon of Salt </p>
                                <p> Oil  </p>


                            </div>
                        </div>
                        <div id="recipe">
                            <h2> Directon for filling</h2>
                            <ul>
                                <li> Cook it on low heat</li>
                                <li>Preheat two tablespoons of oil in a pan</li>
                                <li>Add Pepper, salt, cube & curry powder to the filling </li>
                                <li>Add the blended beef to the filling</li>
                                <li>Add shredded cabbage and carrots </li>
                                <li> Stir the filling  and cook for  5 minutes</li>
                            </ul>
                            <h2> Direction for the SpringRolls Sheet</h2>
                            <ul>
                                <li>Add flour in a Bowl</li>
                                <li> Add water in the bowl</li>
                                <li> mix the above together to make the paste</li>
                                <li> Roll the dough into thin sheets and cut into desired shape</li>
                                <li> Re-roll the leftover dough and repeat the above procedure</li>
                            </ul>
                            <h2> Direction for frying the the springrolls</h2>
                            <ul>
                                <li> Add two teaspoons of the filling to the springrolls sheet</li>
                                <li>Preheat the oil in the pan</li>
                                <li> Fry the springrolls till it turns golden</li>
                                <li> Serve after it cools down</li>
                            </ul>
                        </div>
                    </center>
                </div>
            </div>
        </>
    )
}