import React from 'react'
import { Card, CardBody, ListGroup, ListGroupItem } from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"


export default function TournamentList({tournaments, onClick}) {
    return (
        <Card>
            <CardBody>
                <ListGroup small='yes'>
                    {
                        tournaments ? tournaments.map((name, index) => {
                            return (
                                <ListGroupItem key={index} onClick={() => onClick(name)}>
                                    {name}
                                </ListGroupItem>
                            )
                        }) : null
                    }
                </ListGroup>
            </CardBody>
        </Card>
    )
}
