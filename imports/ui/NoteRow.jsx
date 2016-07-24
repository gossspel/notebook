import React, { Component, PropTypes } from 'react';

export default class NoteRow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // Active note data
            showEdit: false
        };
    }

    handleShowPreviewClick() {
        this.props.onNoteChange(this.props.note._id, this.props.note.title, this.props.note.content, true);
    }

    handleShowEditClick(event) {
        // Call stopPropagation since the edit button is inside the clickable div.
        event.stopPropagation();
        this.props.onNoteChange(this.props.note._id, this.props.note.title, this.props.note.content, false);
    }

    handleMouseEnter() {
        this.setState({
            showEdit: true
        });
    }

    handleMouseLeave() {
        this.setState({
            showEdit: false
        });
    }

    getCleanedContent() {
        return this.props.note.content.replace(/(<([^>]+)>|&nbsp;)/ig, "").substring(0, 100);
    }

    render() {
        return (
            <div
                className="note-row-background"
                onClick={this.handleShowPreviewClick.bind(this)}
                onMouseEnter={this.handleMouseEnter.bind(this)}
                onMouseLeave={this.handleMouseLeave.bind(this)}
            >
                { this.state.showEdit ?
                    <div className="note-row-edit-button-container">
                        <button
                            className="note-row-edit-button"
                            onClick={this.handleShowEditClick.bind(this)}
                            type="button"
                        >
                            Edit
                        </button>
                    </div> :
                    null
                }
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