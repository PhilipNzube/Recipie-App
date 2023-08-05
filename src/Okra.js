import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import okra from './Images/okra.jpeg';

export default function Okra() {
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
                        <h2> Recipes for Okra </h2>
                        <img id="OkraImage" src={okra} alt="" />
                        <div id="main">
                            <p id="in">INGREDIENTS REQUIRED</p>
                            <div id="source">
                                <p>Sliced Okra (a medium-size bowl full)</p>
                                <p> Stockfish head (medium size)</p>
                                <p>1 kg of meat (chicken)</p>
                                <p>5 shombo peppers</p>
                                <p> 2 scotch bonnet peppers</p>
                                <p>500g mackerel</p>
                                <p>2 seasoning cubes</p>
                                <p>Salt to taste.</p>
                                <p> 200ml Red (palm) oil</p>
                                <p>half cup of ground crayfish</p>




                            </div>
                            <h2> Direction of making Okra Soup</h2>
                            <ul>
                                <li>Slice the okra and set it aside in a bowl, Remove center seeds from the shombo, combine with scotch bonnet and blend or pound using a mortar and pestle. Also, blend or grind the crayfish.

                                    I used just 1kg of chicken and 500g of fish for this okra soup.

                                    I like to parboil meat with lots of spices and then use very little while making the real soup.</li>
                                <li>
                                    Wash the fish/chicken and season with a half teaspoon of salt, two seasoning cubes, a cup of water, and half a cup of sliced onions.
                                    Allow it to boil together for 10-15 minutes. Remove them while leaving the stock in the pot.
                                </li>
                                <li> Add the stockfish to the boiling pot, one more cup of water, and cook for about 10 minutes till they are soft for consumption.

                                    Add two cups of water.</li>
                                <li>Introduce 200ml of palm oil, add the crayfish, pepper/shombo, and salt to taste.

                                    Let it boil for 8 minutes. Add the cooked chicken/fish and allow simmering for three more minutes.</li>
                                <li> Add the sliced okra and stir. Drop the cooked mackerel fish on top.

                                    Allow simmering for 3-4 minutes, and you are done with this delicious soup.

                                    You can serve ofe okro with eba, fufu or pounded yam.</li>
                            </ul>
                        </div>
                    </center>
                </div>
            </div>
        </>
    )
}