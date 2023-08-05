import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import cake from "./Images/Cake.jpeg";

export default function Cake() {
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
                        <h2> Recipes for Cakes </h2>
                        <img id="CakeImage" src={cake} alt="" />
                        <div id="main">
                            <p id="in">INGREDIENTS REQUIRED</p>
                            <div id="source">
                                <p> 4 Cups of all-purpose Flour </p>
                                <p> 2 cups of sugar</p>
                                <p> 1 cup of  Milk </p>
                                <p> 3 Eggs</p>
                                <p> 227 grams of butter</p>
                                <p>2 teaspoons of baking powder</p>


                            </div>

                        </div>
                        <div id="recipe">
                            <h2> Direction on how to make Simple-Cake</h2>
                            <ul>
                                <li> Preheat oven to 163C</li>
                                <li> Add Milk, butter, sugar and beaten eggs to a bowl and mix until it turns white </li>
                                <li> Add the flour  with the baking powder into a seperate bowl and mix</li>
                                <li> Then mix two of the above mixture </li>
                                <li> After doing the above put the mixture in a pan put before putting in the pan make sure to apply flour/butters on the surface of the pan </li>
                                <li> Then put the pan in oven and bake at 180C for 35 minutes</li>
                                <li> After to check if the cake is ready you insert a knife in the cake so, if the knife comes out without the raw flour then it is ready</li>
                            </ul>
                        </div>
                    </center>
                </div>
            </div>
        </>
    )
}