import React, { Component, PropTypes } from 'react';

export default class NoteRow extends Component {
    render() {
        return (
            <div className="note-row">
                <div>{this.props.note.title}</div>
                <div>{this.props.note.content}</div>
            </div>
        );
    }
}

NoteRow.propTypes = {
    note: PropTypes.object.isRequired
};