import React, { Component, PropTypes } from 'react';

export default class NoteDetailTitle extends Component {
    handleChange() {
        // provide parameter to func props
        this.props.onTitleTextInput(this.refs.titleTextInput.value);
    }

    render() {
        return (
            <div className="note-detail-title">
                <input
                    className="note-detail-title-input"
                    type="text"
                    placeholder="Title your note"
                    value={this.props.activeTitle}
                    ref="titleTextInput"
                    onChange={this.handleChange.bind(this)}
                />
            </div>
        );
    }
}

NoteDetailTitle.propTypes = {
    activeTitle: PropTypes.string.isRequired,
    onTitleTextInput: PropTypes.func.isRequired
};