import React, { Component, PropTypes } from 'react';
import NoteBookTopBar from './NoteBookTopBar';
import NoteBookMainView from './NoteBookMainView';

export default class NoteBookContent extends Component {
    render() {
        return (
            <div className="note-book-content">
                <NoteBookTopBar
                    onNoteInit={this.props.onNoteInit}
                />
                <NoteBookMainView
                    activeTitle={this.props.activeTitle}
                    onContentTextInput={this.props.onContentTextInput}
                    onNoteSave={this.props.onNoteSave}
                    onShowPreview={this.props.onShowPreview}
                    onTitleTextInput={this.props.onTitleTextInput}
                    showNullState={this.props.showNullState}
                    showPreview={this.props.showPreview}
                    showSave={this.props.showSave}
                    storedContent={this.props.storedContent}
                />
            </div>
        );
    }
}

NoteBookContent.propTypes = {
    activeTitle: PropTypes.string.isRequired,
    onContentTextInput: PropTypes.func.isRequired,
    onNoteInit: PropTypes.func.isRequired,
    onNoteSave: PropTypes.func.isRequired,
    onShowPreview: PropTypes.func.isRequired,
    onTitleTextInput: PropTypes.func.isRequired,
    showNullState: PropTypes.bool.isRequired,
    showPreview: PropTypes.bool.isRequired,
    showSave: PropTypes.bool.isRequired,
    storedContent: PropTypes.string.isRequired
};