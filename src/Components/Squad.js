import { useNavigate } from "react-router-dom";

export function Squad({ heroPositions, heroImage, heroDetail }) {
    const positionMap = {"GK": "Goalkeeper", "DF": "Defender", "ST": "Striker", "MD": "Midfielder"}
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
    }
    return (
        <div className="header">
        <div className="background">
            <img src="img/bg.png" alt=""/>
        </div>

        <div className="create-button">
            <button onClick={handleClick}>    
                Back to home page
            </button>
               
        </div>

    {
         Object.keys(heroImage).map((key) => {
            return (
                <div className="box-content">
                    <div className="right-box">
                        <img src={heroImage[key]} alt="" />
                    </div>
                    <div className="left-box">
                        <h1>{heroDetail[key]}</h1>
                        <h3>Position: {positionMap[heroPositions[key]]}</h3>
                    </div>
                </div>
            );
        })
    }

    </div>
    );
}

      

