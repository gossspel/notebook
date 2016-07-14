import React, { Component, PropTypes } from 'react';
import NoteDetailTitle from './NoteDetailTitle';
import NoteDetailContent from './NoteDetailContent';
import NoteBookTopBar from './NoteBookTopBar';

export default class NoteBookContent extends Component {
    render() {
        return (
            <div className="note-book-content">
                <NoteBookTopBar />
                <NoteDetailTitle
                    activeTitle={this.props.activeTitle}
                    onNoteSave={this.props.onNoteSave}
                    onShowPreview={this.props.onShowPreview}
                    onTitleTextInput={this.props.onTitleTextInput}
                    showPreview={this.props.showPreview}
                    showSave={this.props.showSave}
                />
                <NoteDetailContent
                    storedContent={this.props.storedContent}
                    onContentTextInput={this.props.onContentTextInput}
                    onNoteSave={this.props.onNoteSave}
                    showPreview={this.props.showPreview}
                />
            </div>
        );
    }
}

NoteBookContent.propTypes = {
    activeTitle: PropTypes.string.isRequired,
    storedContent: PropTypes.string.isRequired,
    onTitleTextInput: PropTypes.func.isRequired,
    onContentTextInput: PropTypes.func.isRequired,
    onShowPreview: PropTypes.func.isRequired,
    onNoteSave: PropTypes.func.isRequired,
    showPreview: PropTypes.bool.isRequired,
    showSave: PropTypes.bool.isRequired
};