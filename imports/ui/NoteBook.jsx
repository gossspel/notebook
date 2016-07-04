import React, { Component, PropTypes } from 'react';
import NoteTable from './NoteTable';

export default class NoteBook extends Component {
    render() {
        return (
            <div className="note-book">
                <NoteTable notes={this.props.notes} />
            </div>
        );
    }
}

NoteBook.propTypes = {
    notes: PropTypes.array.isRequired
};