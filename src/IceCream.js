import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import IC from './Images/ice cream.jfif';

export default function IceCream() {
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
                        <h2>  Recipes for Ice cream </h2>
                        <img alt="" id="IceCreamImage" src={IC} />
                        <div id="main">
                            <p id="in">INGREDIENTS REQUIRED</p>
                            <div id="source">
                                <p> Condensed milk (1 ton)</p>
                                <p> Heavy whip Cream (1 cup)</p>
                                <p> Vanilla extrsct (2 teaspoons vanila extract)</p>
                                <p> 3/4 cup white sugar</p>
                                <p> Egg yolks (6 large)</p>


                            </div>
                            <h2> Direction Ice cream preparation</h2>
                            <ul>
                                <li> Stir milk, sugar and cream altogether in a pan over low heat until sugar completely dissolves about 5 minutes; remove pan from pan </li>
                                <li>In a seperate bowl, whisk yolks. whisking constantly, slowly whisk about  third of the hot cream into the yolks, then whisk the yolk mixture back into the pot with the
                                    cream. Return pan to medium low heat and gently cook until mixture is thick enough to coat the back of a spoon ( about 170 degrees on an instant read thermonmeter)
                                </li>
                                <li> strain through a fine-mesh sieve into a bowl cool mixture to room temperature cover and chill at least 4 hours or  overnight,  store the ice cream in frezer until needed.</li>
                            </ul>


                        </div>
                    </center>
                </div>
            </div>
        </>
    )
}