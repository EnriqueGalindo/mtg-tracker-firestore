import { useEffect, useState } from 'react'
import { withFirestore } from '../../components/Firebase';
import TournamentList from '../../components/TournamentList';
import TournamentMatches from '../../components/TournamentMatches';
import './App.css';

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

      return tournamentMatches;
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
  }, [])

  return (
    <div className="App">
        {determineDisplay()}
    </div>
  );
}

export default withFirestore(App);
