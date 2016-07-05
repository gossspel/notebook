import React, { Component, PropTypes } from 'react';
import NoteDetailTitle from './NoteDetailTitle';
import NoteDetailContent from './NoteDetailContent';

export default class NoteBookContent extends Component {
    render() {
        return (
            <div className="note-book-content">
                <div className="note-book-top-bar">
                    <div className="note-book-logo"></div>
                    <div className="note-book-brand" id="note-book-brand-id">Sunnynote</div>
                    <div className="note-book-toolbar" id="note-book-toolbar-id"></div>
                </div>
                <NoteDetailTitle />
                <NoteDetailContent />
            </div>
        );
    }
}