import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FPS from './Images/fishpepper-soup.jpg';

export default function FishPepperSoup() {
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
                        <h2>  Recipes for Fish peppersoup </h2>
                        <img alt="" id="FishPepperSoupImage" src={FPS} />
                        <div id="main">
                            <p id="in">INGREDIENTS REQUIRED</p>
                            <div id="source">
                                <p> 2kg fresh Fish</p>
                                <p> 110g onions, chopped (1 medium)</p>
                                <p> Seasioning cubes </p>
                                <p>1 tablespoons of ground crayfish </p>
                                <p> 2 scotch bonnet</p>
                                <p> Salt</p>
                                <p> 2 Big churu (3 small) ground(nutmeg)</p>
                                <p> 1/2 teaspoon ground usiza</p>
                                <p> 2 sticks uda</p>
                                <p> utasi leaves</p>

                            </div>
                            <h2> Direction on making Fish pepper soup</h2>
                            <ul>
                                <li> Blend scotch pepper, onion and ginger</li>
                                <li> Toast and grind ehuru, htt uda to just break it open</li>
                                <li> Wash catfish slices well</li>
                                <li> Pour hot water over the fish slices and leave to stand for 1-2 minutes, drain and rinse in cold water </li>
                                <li> Place in pot and add just enough water to just cover the fish place over medium heat</li>
                                <li> Add onions, seasoning cube, crayfish, peppers and sprinkle some salt</li>
                                <li> ciover and bring to a boil add ground ehuru uziza and uda, gently shake and swirl your pit, cook 5-8 minutes</li>
                                <li> Add about 5 leaves of shredded utazi and some water taste and correct seasoning</li>
                                <li> Cook for another 5-8 minutes unitl fish is well cooked take off the heat</li>
                                <li> Serve your fish pepper soup</li>
                            </ul>

                        </div>

                    </center>
                </div>
            </div>
        </>
    )
}