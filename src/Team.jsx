import { useState } from "react"

export default function Team(){
    const [team, setTeam] = useState(11);

    const handlePlayerAdd = () =>{
        const newTeam = team +1;
        setTeam(newTeam)
    }
    const handlePlayerAdd2 = () =>{
        const newTeam = team -1;
        setTeam(newTeam)
    }
    const buttonStyle ={border: '2px solid yellow'}
    const teamStyle = {
        border : '3px solid skyblue',
        borderRadius : '10px' ,
        margin : '10px' ,
        padding: '10px'
    }
    return(
        <div style={teamStyle}>
            <h3>Player:{team}</h3>
            <button style={buttonStyle} onClick={handlePlayerAdd}>Add Player</button>
            <button style={buttonStyle} onClick={handlePlayerAdd2}>Remove Player</button>
        </div>
    )
}