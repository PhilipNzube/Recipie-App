import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Pie from './Images/meatpie.jpeg';

export default function Meatpie() {
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
                        <h2> Recipes for Meatpies </h2>
                        <img id="MeatpieImage" src={Pie} alt="" />
                        <div id="main">
                            <p id="in">INGREDIENTS REQUIRED</p>
                            <div id="source">
                                <p> 4 cups of all-purpose Flour </p>
                                <p> Baking Powder</p>
                                <p> 200g of Butter </p>
                                <p> Blended Meat</p>
                                <p> Diced Carrot</p>
                                <p>Onions</p>
                                <p>salt</p>
                                <p> Seasoning(Thyme & Pepper)</p>
                                <p> Vegetable oil</p>
                                <p> Thyme </p>



                            </div>
                        </div>

                        <div id="recipe">
                            <h2> Directon for preparation of the filling </h2>
                            <ul>
                                <li> Add oil in a frying  pan</li>
                                <li> Add  onion to the oil cook, and  stir for 3 minutes</li>
                                <li> Add carrots, cook and stir for 3 minutes </li>
                                <li> Add Seasoning and salt to the mixs</li>
                                <li> Add cubed potatoes and stir it. Pour water and allow it to cook until it thickens</li>

                            </ul>
                            <h2> Direction for preparation  of the Dough </h2>
                            <ul>
                                <li> Add Flour, Sugar, Salt, Butter and Baking Powder into a large bowl</li>
                                <li> Mix the above content until you get a crumbly texture</li>
                                <li> Beat two eggs with cold water and add it to the flour mixture and mix it until a dough is formed</li>
                                <li> Wrap the dough in the bowl with a cling film and allow it rest for 30mintues</li>
                            </ul>
                            <h2> Direction for the Pastry using Oven</h2>
                            <ul>
                                <li> Preheat oven to 175C </li>
                                <li> Roll out the dough and cut out the desired shape. Combine all leftover dough and roll it again  to repeat the same previous process  </li>
                                <li> Place two tablespoons of the eariler prepared filling in the center, and fold over the dough. Seal the edges  with a fork</li>
                                <li> Place the Pastry on a tray and put in the oven and allow it to bake for 25-30 minutes until golden</li>
                                <li> Then serve after it cool down</li>
                            </ul>
                        </div>
                    </center>
                </div>
            </div>
        </>
    )
}