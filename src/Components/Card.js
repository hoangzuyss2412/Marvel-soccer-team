import React from "react"
import { useState, useContext } from "react";
import { SquadContext } from "../App";
import { ContextMenu } from "./ContextMenu";


export function Card({ data, showContextMenu, setShowContextMenu}) {
    const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 });    
    const [heroPositions, setHeroPositions] = useContext(SquadContext); 
    const [contextMenuID, setContextMenuID] = useState();
    const handleRightClick = (e, item) => {
        e.preventDefault();
        setShowContextMenu(true);
        setContextMenuPosition({ x: e.pageX, y: e.pageY })
        setContextMenuID(item.id);
    }
        return (      
            data.map((item) => {
                return (
                    <div key={item.id} onContextMenu={(e) => handleRightClick(e, item)}>                    
                        <div className="card">
                            <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
                            <div className="title">
                                <h3> {item.name} </h3>
                                {heroPositions[item.id] === undefined ? null : <h3>Position: {heroPositions[item.id]} </h3>}
                            </div>
                        </div>
                        {
                            (showContextMenu) && (contextMenuID === item.id) && (
                                <ContextMenu x={contextMenuPosition.x} y={contextMenuPosition.y} 
                                setShowContextMenu={setShowContextMenu} 
                                item={item}/>
                            )
                        }
                    </div>
                    
                );
            })
    );
}