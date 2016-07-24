import React, { Component, PropTypes } from 'react';

export default class NoteBookTopBar extends Component {
    handleInitClick() {
        this.props.onNoteInit();
    }

    render() {
        return (
            <div className="note-book-top-bar">
                <div className="note-book-logo">
                    <button
                        className="new-note-button"
                        onClick={this.handleInitClick.bind(this)}
                        title="Click me to create new note!"
                        type="button"
                    >
                        <img
                            className="new-note-button-image"
                            src="/images/sunnynote.png"
                        />
                    </button>
                </div>
                <div className="note-book-brand" id="note-book-brand-id">Sunnynote</div>
                <div className="note-book-toolbar" id="note-book-toolbar-id"></div>
            </div>
        );
    }
}

NoteBookTopBar.propTypes = {
    onNoteInit: PropTypes.func.isRequired
};