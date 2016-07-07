import React, { Component, PropTypes } from 'react';
import NoteDetailTitle from './NoteDetailTitle';
import NoteDetailContent from './NoteDetailContent';
import NoteBookTopBar from './NoteBookTopBar';

export default class NoteBookContent extends Component {
    render() {
        return (
            <div className="note-book-content">
                <NoteBookTopBar />
                <NoteDetailTitle />
                <NoteDetailContent />
            </div>
        );
    }
}