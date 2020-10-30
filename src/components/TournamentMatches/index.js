import React from 'react'

export default function TournamentMatches({title, matches}) {
    return (
        <>
            <h1>{title}</h1>

            <ul>
                {
                    matches ? matches.map(match => {
                        return (
                            <div style={{border: '1px solid black'}}>
                                <ul>
                                    <li>
                                        Date: {match.date}
                                    </li>
                                    <li>
                                        Player 1: {match['player 1']}
                                    </li>
                                    <li>
                                        Player 2: {match['player 2']}
                                    </li>
                                    <li>
                                        score: {match['score']}
                                    </li>
                                    <li>
                                        victor: {match['victor']}
                                    </li>
                                </ul>
                            </div>
                        )
                    }) : null
                }
            </ul>
        </>
    )
}
