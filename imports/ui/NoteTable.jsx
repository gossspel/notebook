import React, { Component, PropTypes } from 'react';
import NoteRow from './NoteRow';

export default class NoteTable extends Component {
    render() {
        var rows = [];

        this.props.notes.forEach(
            function(note) {
                rows.push(<NoteRow note={note} key={note._id} />);
            }
        );

        return (
            <div className="note-table">
                {rows}
            </div>
        );
    }
}

NoteTable.propTypes = {
    notes: PropTypes.array.isRequired
};