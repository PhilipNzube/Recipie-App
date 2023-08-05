import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Tomato from "./Images/tomato.jpeg";

export default function Tomatoes() {
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
                    <center><h2> Recipes for Tomato Stew </h2>
                        <img alt="" id="TomatoImage" src={Tomato} />
                        <div id="main">
                            <p id="in">INGREDIENTS REQUIRED</p>
                            <div id="source">
                                <p> Tomato Paste/ Blended Tomato</p>
                                <p> 2 large onions</p>
                                <p> 1 large red bell pepper/tatashe</p>
                                <p>  2 scotch bonnet peppers/atarodo</p>
                                <p>   1/2 tablespoon dry thyme</p>
                                <p>  2 seasoning cubes, knorr or maggi</p>
                                <p>  Salt, to taste</p>
                                <p>  1/2 to 1 cup vegetable oil</p>
                                <p>  Meat stock (I used the stock from the chicken)</p>

                            </div>
                            <h2> Direction of making Tomato Soup</h2>
                            <ul>
                                <li>Wash,chop and blend with a little water the tomatoes, bell pepper or tatashe,  hot peppers, garlic, ginger and 2 onions.
                                    Try blending small quantities at a time so that the mixture blends properly and that you don’t overwork your blender</li>
                                <li>Pour your blended tomato mix into a medium pot and cook </li>
                                <li>Add meat pieces, seasoning cubes, curry, thyme, and some salt</li>
                                <li> Add meat pieces, seasoning cubes, curry, thyme, and some salt</li>
                                <li> Cook at low-medium heat and stir at short intervals till the oil has completely separated from the tomato blend.
                                    Taste the stew to make sure that the raw tomato taste is gone then turn off the heat</li>
                            </ul>
                        </div>
                    </center>
                </div>
            </div>
        </>

    )
}