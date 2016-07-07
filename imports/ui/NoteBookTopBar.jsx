import React, { Component, PropTypes } from 'react';

export default class NoteBookTopBar extends Component {
    render() {
        return (
            <div className="note-book-top-bar">
                <div className="note-book-logo"></div>
                <div className="note-book-brand" id="note-book-brand-id">Sunnynote</div>
                <div className="note-book-toolbar" id="note-book-toolbar-id"></div>
            </div>
        );
    }
}