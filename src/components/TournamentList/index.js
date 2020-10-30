import React from 'react'

export default function TournamentList({tournaments, onClick}) {
    return (
        <ul>
            {
                tournaments ? tournaments.map((name, index) => {
                    return (
                        <li key={index} onClick={() => onClick(name)}>
                            {name}
                        </li>
                    )
                }) : null
            }
        </ul>
    )
}
