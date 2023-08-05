import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Beans from './Images/beanss.jpeg';

export default function Beanssoup() {
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
                        <h2> Recipes for Beans-Soup </h2>
                        <img id="BeansImage" src={Beans} alt="" />
                        <div id="main">
                            <p id="in">INGREDIENTS REQUIRED</p>
                            <div id="source">
                                <p> Beans </p>
                                <p> Palm Oil</p>
                                <p> Seasoning</p>
                                <p> Potash</p>


                            </div>
                            <h2> Direction for making Beans-Soup</h2>
                            <ul>
                                <li> Put the desire qunatity of beans in a bowl and add little water</li>
                                <li> Pour the above in food processor to peel the back of the beans</li>
                                <li> After peeling theback of the beans,  boli the the beans till get soft</li>
                                <li> After check if it is soft put it in a blender and blend till it is in a liquid form</li>
                                <li> Now put it in a pot and add seasonings</li>
                                <li> After adding seasoning allow it to cook for a minute</li>

                            </ul>
                        </div>
                    </center>
                </div>
            </div>
        </>
    )
}