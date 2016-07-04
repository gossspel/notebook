import React, { Component, PropTypes } from 'react';
import NoteTable from './NoteTable';

export default class NoteBookSideBar extends Component {
    render() {
        return (
            <div className="note-book-side-bar">
                <NoteTable notes={this.props.notes} />
            </div>
        );
    }
}

NoteBookSideBar.propTypes = {
    notes: PropTypes.array.isRequired
};