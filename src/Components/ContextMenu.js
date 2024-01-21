import {useContext } from "react";
import { SquadContext } from "./Main";

export function ContextMenu({ x, y, setShowContextMenu, item}){
    const [heroPositions, setHeroPositions] = useContext(SquadContext); 
    const menuStyle = {
        position: 'absolute',
        top: `${y}px`,
        left: `${x}px`,
        backgroundColor: 'white',
        border: '1px solid black',
        zIndex: 1000
    };

    const onMenuClick = (position) => {
        console.log(position);
        if(position !== 'Cancel'){
            setHeroPositions({...heroPositions, [item.id]: position})
        }
        else if(position === "Cancel"){
            setHeroPositions((prevPositions) => {
                const { [item.id]: _ , ...newPositions } = prevPositions;
                return newPositions;
            });
        }
        setShowContextMenu(false);
    }

    return (
        <div style={menuStyle}>
            <div className="menu-item" onClick={() => onMenuClick('GK')}>Goalkeeper (GK) </div>
            <div className="menu-item" onClick={() => onMenuClick('ST')}>Striker (ST)</div>
            <div className="menu-item" onClick={() => onMenuClick('DF')}>Defender (DF)</div>
            <div className="menu-item" onClick={() => onMenuClick('MF')}>Midfielder (MF)</div>
            {heroPositions[item.id] === undefined ? null : <div className="menu-item" onClick={() => onMenuClick('Cancel')} >Discard current position</div>}
        </div>
    );
};