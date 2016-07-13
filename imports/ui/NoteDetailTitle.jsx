import React, { Component, PropTypes } from 'react';

export default class NoteDetailTitle extends Component {
    handleChange() {
        // provide parameter to func props
        this.props.onTitleTextInput(this.refs.titleTextInput.value);
    }

    handleClick() {
        this.props.onShowPreview(!this.props.showPreview);
    }

    render() {
        return (
            <div className="note-detail-title">
                <div className="mode-changing-button-container">
                    <button type="button" onClick={this.handleClick.bind(this)}>
                        {this.props.showPreview ? 'Edit' : 'Preview'}
                    </button>
                </div>
                <div>
                    <input
                        className="note-detail-title-input"
                        type="text"
                        placeholder="Title your note"
                        value={this.props.activeTitle}
                        ref="titleTextInput"
                        onChange={this.handleChange.bind(this)}
                    />
                </div>
            </div>
        );
    }
}

NoteDetailTitle.propTypes = {
    activeTitle: PropTypes.string.isRequired,
    onShowPreview: PropTypes.func.isRequired,
    onTitleTextInput: PropTypes.func.isRequired,
    showPreview: PropTypes.bool.isRequired
};