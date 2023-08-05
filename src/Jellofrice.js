import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import jellof from "./Images/jollof.jpeg";

export default function Jellofrice() {
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
                        <h2> Recipes for Jollof Rice </h2>
                        <img id="JellofImage" src={jellof} alt="" />
                        <div id="main">
                            <p id="in">INGREDIENTS REQUIRED</p>
                            <div id="source">
                                <p>   2 cups Precooked long grain rice</p>
                                <p>  5 Tablespoonful tomato paste</p>
                                <p> 4 whole tomatoes</p>
                                <p>  1 red bell pepper </p>
                                <p> 2 scotch bonnets peppers</p>
                                <p> 100ml vegetable oil</p>
                                <p> About 600ml Meat or Chicken stock</p>
                                <p> A small onion (sliced)</p>
                                <p> 1 tablespoonful ground crayfish(optional)</p>
                                <p> ½ teaspoon each of Thyme and curry</p>
                                <p>  2 small Bay leaves (optional)</p>
                                <p>  1 teaspoon salt to taste</p>
                                <p>  1 stock cube</p>

                            </div>
                            <h2> Direction on making Jollof-Rice</h2>

                            <ul>
                                <li> First, prepare a little stew or sauce <a href="tomato.html" id="tom"> (Tomato Stew)</a> .Do this by blending the fresh tomatoes and peppers together;
                                    then dry out excess liquid by boiling in a pot for few minutes</li>
                                <li> After boiling it, Place a pot on heat, add some oil, add chopped onions, fry a bit and then add the blended tomatoes & pepper mix,
                                    fry for about 10 minutes </li>
                                <li> Then add the parboiled rice and mix thoroughly; the liquid in the pot should  be at the same level as the rice in the pot
                                    Cover the pot and leave the rice to cook on low to medium heat.(  High heat will burn the rice before it is well cooked) </li>

                                <li>When the liquid in the rice is almost dried, add the ground crayfish then cover the pot  and simmer until there is no more liquid in the Rice
                                    Now mix thoroughly and your Nigerian Jollof Rice is Ready to be served.</li>
                            </ul>
                        </div>
                    </center>
                </div>
            </div>
        </>
    )
}