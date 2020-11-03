import React from 'react'
import { Card, CardBody, CardTitle, ListGroup, ListGroupItem } from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"


export default function TournamentMatches({title, matches}) {
    return (
        <>
            <div className="body">
                <CardBody>
                    <CardTitle>
                        {title}
                    </CardTitle>
                    <ListGroup>
                        {
                            matches ? matches.map(match => {
                                return (
                                    <div style={{border: '1px solid black'}}>
                                        <ListGroup small='yes'>
                                            <ListGroupItem>
                                                Player 1: {match['player 1']}
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                Player 2: {match['player 2']}
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                score: {match['score']}
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <strong>Victor:</strong> {match['victor']}
                                            </ListGroupItem>
                                        </ListGroup>
                                    </div>
                                )
                            }) : null
                        }
                    </ListGroup>
                </CardBody>
            </div>

            
            
        </>
    )
}
