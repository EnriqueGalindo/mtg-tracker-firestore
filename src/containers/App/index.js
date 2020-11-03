import React from "react";
import { useEffect, useState } from 'react'
import { withFirestore } from '../../components/Firebase';
import TournamentList from '../../components/TournamentList';
import TournamentMatches from '../../components/TournamentMatches';
import './App.css';
import { Card, CardBody, CardTitle, Button, CardSubtitle } from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"


function App({firestore}) {
  const [matches, setMatches] = useState({});
  const [tournaments, setTournamentList] = useState([]);

  const getTournamentMatches = name => {
    firestore.getTournamentMatches(name).then(snap => {
      let tournaments = {}
      snap.forEach(doc => {
        let matches = []
        let matchData = doc.data()
        for (let match in matchData) {
          matches.push(matchData[match])
        }
        tournaments[doc.id] = matches
      })

      setMatches(tournaments)
    })
  }

  const getTournamentList = () => {
    firestore.getTournaments().then(snap => {
      let tempTournamentList = []

      snap.forEach(doc => {
        tempTournamentList.push(doc.id)
      })

      setTournamentList(tempTournamentList)
    })
  }

  const determineDisplay = () => {
    if (Object.keys(matches).length) {
      let tournamentMatches = []

      for (let m in matches) {
        tournamentMatches.push(
          <TournamentMatches
            title={m}
            matches={matches[m]}
          />
        )
      }

      return tournamentMatches.reverse();
    }

    return (
      <TournamentList
        tournaments={tournaments}
        onClick={onNameClick}
      />
    )
  }

  const onNameClick = name => {
    getTournamentMatches(name)
  }

  useEffect(() => {
    getTournamentList()
  })

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="App">
        <Card className="superHeader">
          <CardBody>
          <Card className="Header">
          <CardBody>
            <CardTitle>
              <Button size='lg' theme='light' onClick={refreshPage}>
                <h2 style={{margin: 'auto'}}>Nomad Stadium</h2>
              </Button>
            </CardTitle>
            <CardSubtitle className="superHeaderSubtitle">
            Live MTG Tournament Updates
            </CardSubtitle>
            </CardBody>
        </Card>
          </CardBody>
        </Card>
            {determineDisplay()}
    </div>
  );
}

export default withFirestore(App);
