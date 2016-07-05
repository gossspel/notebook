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
            { _id: 3, title: 'Note 3 title', content: 'Note 3 content' },
            { _id: 4, title: 'Note 4 title', content: 'Note 4 content' },
            { _id: 5, title: 'Note 5 title', content: 'Note 5 content' },
            { _id: 6, title: 'Note 6 title', content: 'Note 6 content' },
            { _id: 7, title: 'Note 7 title', content: 'Note 7 content' },
            { _id: 8, title: 'Note 8 title', content: 'Note 8 content' },
            { _id: 9, title: 'Note 9 title', content: 'Note 9 content' },
            { _id: 10, title: 'Note 10 title', content: 'Note 10 content' },
            { _id: 11, title: 'Note 11 title', content: 'Note 11 content' },
            { _id: 12, title: 'Note 12 title', content: 'Note 12 content' },
            { _id: 13, title: 'Note 13 title', content: 'Note 13 content' },
            { _id: 14, title: 'Note 14 title', content: 'Note 14 content' }
        ]
    };
}, App);