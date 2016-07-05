import React, { Component, PropTypes } from 'react';
import NoteDetailTitle from './NoteDetailTitle';
import NoteDetailContent from './NoteDetailContent';

export default class NoteBookContent extends Component {
    render() {
        return (
            <div className="note-book-content">
                <NoteDetailTitle />
                <NoteDetailContent />
            </div>
        );
    }
}