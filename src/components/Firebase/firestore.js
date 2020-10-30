import firebase from 'firebase';
import config from '../../firebase.config';

export default class Firestore {
    constructor() {
        firebase.initializeApp(config)
        this.db = firebase.firestore()
    }

    getTournaments = () => this.db.collection('TournamentList').get()

    getTournamentMatches = name => this.db.collection(name).get()
}