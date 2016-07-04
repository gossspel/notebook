import React, { Component, PropTypes } from 'react';
import NoteBookSideBar from './NoteBookSideBar';
import NoteBookContent from './NoteBookContent';

export default class NoteBook extends Component {
    render() {
        return (
            <div className="note-book">
                <NoteBookSideBar notes={this.props.notes} />
                <NoteBookContent />
            </div>
        );
    }
}

NoteBook.propTypes = {
    notes: PropTypes.array.isRequired
};