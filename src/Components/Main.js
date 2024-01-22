import React from "react"
import {Card} from './Card'
import { Squad } from "./Squad";
import axios from "axios"
import { useState, useEffect, useContext} from "react";
import { useNavigate } from "react-router-dom";

import { SquadContext, SquadImageContext } from "../App";

export function Main(){
    const [url, setUrl] = useState("https://gateway.marvel.com/v1/public/characters?offset=1&ts=1&apikey=ee17bb5eb193560352b47115265aee4f&hash=617bdee7116a797260ea70909aeeb088");
    const [item, setItem] = useState([]);
    const [showContextMenu, setShowContextMenu] = useState(false);
    const [notEnoughPlayer, setNotEnoughPlayer] = useState(false);
    const [createdSquad, setCreatedSquad]  = useState(false);
    const [heroPositions, setHeroPositions] = useContext(SquadContext); 
    const [heroImage, setHeroImage] = useContext(SquadImageContext);
    const navigate = useNavigate();

    useEffect(() => {
        const fetch = async () => {
            const res = await axios.get(url);
            setItem(res.data.data.results);
            console.log(res.data.data.results);
        }
        fetch();
    }, [url])

    const handleClick = () => {
        setShowContextMenu(false);
    }
    const createSquad = () => {
        if(Object.keys(heroPositions).length < 6){
            setNotEnoughPlayer(true);
        }
        else if(["GK", "MD", "DF", "ST"].every(val => Object.values(heroPositions).includes(val)) === false){
            setNotEnoughPlayer(true);    
        }
        else{
            setNotEnoughPlayer(false);
            navigate("/squad");
        }
        console.log(heroPositions);
        console.log(heroImage);
    }

    return (
        <div className="header"  onClick={handleClick}>
            <div className="background">
                <img src="img/bg.png" alt=""/>
            </div>

            <div className="search-bar">
                <img src="img/logo.jpg" alt="logo" />
                <input type="search" placeholder='Search Here'
                 className='search'
                />
            </div>

            <div className="create-button">
                <button onClick={createSquad}>    
                    Create a soccer squad
                </button>
                {
                    notEnoughPlayer ? 
                    <small>
                        <p style={{color: "red"}}> Error: Not enough players nor position to create a squad.</p>
                    </small>
                    :
                    null
                }
               
            </div>
           
            <div className="content">
                {
                    (item.length === 0)? <p> Not Found </p> : <Card data={item} showContextMenu={showContextMenu}
                     setShowContextMenu={setShowContextMenu}/>
                }
            </div>
        

        </div>
    )
}