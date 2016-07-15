import React, { Component, PropTypes } from 'react';

export default class NoteRow extends Component {
    handleClick() {
        this.props.onNoteChange(this.props.note._id, this.props.note.title, this.props.note.content);
    }

    getCleanedContent() {
        return this.props.note.content.replace(/(<([^>]+)>|&nbsp;)/ig, "").substring(0, 100);
    }

    render() {
        return (
            <div className="note-row-background" onClick={this.handleClick.bind(this)}>
                <div className="note-row">
                    <div className="note-row-title">{this.props.note.title}</div>
                    <div className="note-row-content">{this.getCleanedContent()}</div>
                </div>
            </div>
        );
    }
}

NoteRow.propTypes = {
    note: PropTypes.object.isRequired,
    onNoteChange: PropTypes.func.isRequired
};