import React, { Component, PropTypes } from 'react';

export default class NoteDetailContent extends Component {
    render() {
        return (
            <div className="note-detail-tinymce" id="note-detail-tinymce-id">
                <form method="post">
                    <div className="note-detail-content" id="note-detail-content-id">Click here to edit!</div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}