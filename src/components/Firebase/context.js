import React from 'react';

const FirestoreContext = React.createContext(null);

export const withFirestore = Component => props => (
    <FirestoreContext.Consumer>
        {firestore => <Component {...props} firestore={firestore} />}
    </FirestoreContext.Consumer>
)

export default FirestoreContext;