import React, { Component, PropTypes } from 'react';

export default class NoteDetailTitle extends Component {
    handleChange() {
        // provide parameter to func props
        this.props.onTitleTextInput(this.refs.titleTextInput.value);
    }

    handlePreviewOrEditClick() {
        this.props.onShowPreview(!this.props.showPreview);
    }

    handleSaveClick() {
        this.props.onNoteSave();
    }

    render() {
        return (
            <div className="note-detail-title">
                <div className="show-preview-button-container">
                    {this.props.showSave ?
                        <button
                            className="show-preview-button"
                            type="button"
                            onClick={this.handleSaveClick.bind(this)}
                        >
                            Save
                        </button> : null
                    }

                    <button
                        className="show-preview-button"
                        type="button"
                        onClick={this.handlePreviewOrEditClick.bind(this)}
                    >
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
    onNoteSave: PropTypes.func.isRequired,
    onShowPreview: PropTypes.func.isRequired,
    onTitleTextInput: PropTypes.func.isRequired,
    showPreview: PropTypes.bool.isRequired,
    showSave: PropTypes.bool.isRequired
};