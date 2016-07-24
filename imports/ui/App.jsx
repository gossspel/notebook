import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import NoteBook from './NoteBook.jsx';
import { Notes } from '../mongo/collections';

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
        notes: Notes.find({}, { sort: { title: 1 } }).fetch()
    };
}, App);