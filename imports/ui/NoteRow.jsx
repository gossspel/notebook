import React, { Component, PropTypes } from 'react';

export default class NoteRow extends Component {
    render() {
        return (
            <div className="note-row-background">
                <div className="note-row">
                    <div className="note-row-title">{this.props.note.title}</div>
                    <div className="note-row-content">{this.props.note.content}</div>
                </div>
            </div>
        );
    }
}

NoteRow.propTypes = {
    note: PropTypes.object.isRequired
};