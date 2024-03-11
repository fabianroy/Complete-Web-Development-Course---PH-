import { useState } from "react"

export default function Team () {

    const [team, setTeam] = useState(11);
    const handleAddPlayer = () => {
        let newTeam = team + 1;
        setTeam(newTeam);
    }

    const handleRemovePlayer = () => {
        let newTeam = team - 1;
        setTeam(newTeam);
    }

    const teamStyle = {
        border: '2px solid red',
        margin: '10px',
        padding: '10px',
        borderRadius: '10px'
    }

    return (
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={handleAddPlayer}>Add Player</button>
            <button onClick={handleRemovePlayer}>Remove Player</button>
        </div>
    )
}
