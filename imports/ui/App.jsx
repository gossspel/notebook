import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import NoteBook from './NoteBook.jsx';
// import { Notes } from '../api/notes.js';

// App component - represents the whole app
class App extends Component {
    render() {
        return (
            <NoteBook notes={this.props.notes} />
        );
    }
}

App.propTypes = {
    notes: PropTypes.array.isRequired
};

export default createContainer(() => {
    return {
        notes: [
            { _id: 1, title: 'Note 1 title', content: 'Note 1 content' },
            { _id: 2, title: 'Note 2 title', content: 'Note 2 content' },
            { _id: 3, title: 'Note 3 title', content: 'Note 3 content' }
        ]
    };
}, App);