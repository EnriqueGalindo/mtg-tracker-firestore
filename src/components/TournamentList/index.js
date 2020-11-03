import React from 'react'
import { Card, CardBody, ListGroup, ListGroupItem } from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"


export default function TournamentList({tournaments, onClick}) {
    return (
        <div className="body">
            <CardBody>
                <ListGroup>
                    {
                        tournaments ? tournaments.map((name, index) => {
                            return (
                                <ListGroupItem key={index} onClick={() => onClick(name)}>
                                    <h4 style={{margin: 'auto'}}>{name}</h4>
                                </ListGroupItem>
                            )
                        }) : null
                    }
                </ListGroup>
            </CardBody>
        </div>
    )
}
