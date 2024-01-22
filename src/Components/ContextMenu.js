import {useContext } from "react";
import { SquadContext, SquadImageContext, HeroDetailContext } from "../App";

export function ContextMenu({ x, y, setShowContextMenu, item}){
    const [heroPositions, setHeroPositions] = useContext(SquadContext); 
    const [heroImage, setHeroImage] = useContext(SquadImageContext);
    const [heroDetail, setHeroDetail] = useContext(HeroDetailContext);
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
            setHeroImage({...heroImage, [item.id]: `${item.thumbnail.path}.${item.thumbnail.extension}`})
            setHeroDetail({...heroDetail, [item.id]: item.name})
        }
        else if(position === "Cancel"){
            setHeroPositions((prevPositions) => {
                const { [item.id]: _ , ...newPositions } = prevPositions;
                return newPositions;
            });
            setHeroImage((prevImages) => {
                const { [item.id]: _ , ...newImages } = prevImages;
                return newImages;
            })
            setHeroDetail((prevDetail) => {
                const { [item.id]: _ , ...newDetail } = prevDetail;
                return newDetail;
            })
        }
        setShowContextMenu(false);
    }

    return (
        <div style={menuStyle}>
            <div className="menu-item" onClick={() => onMenuClick('GK')}>Goalkeeper (GK) </div>
            <div className="menu-item" onClick={() => onMenuClick('ST')}>Striker (ST)</div>
            <div className="menu-item" onClick={() => onMenuClick('DF')}>Defender (DF)</div>
            <div className="menu-item" onClick={() => onMenuClick('MD')}>Midfielder (MD)</div>
            {heroPositions[item.id] === undefined ? null : <div className="menu-item" onClick={() => onMenuClick('Cancel')} >Discard current position</div>}
        </div>
    );
};