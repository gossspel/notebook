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
                    onTitleTextInput={this.props.onTitleTextInput}
                />
                <NoteDetailContent
                    initialTinyMCEContent={this.props.initialTinyMCEContent}
                    onContentTextInput={this.props.onContentTextInput}
                    onNoteSave={this.props.onNoteSave}
                />
            </div>
        );
    }
}

NoteBookContent.propTypes = {
    activeTitle: PropTypes.string.isRequired,
    initialTinyMCEContent: PropTypes.string.isRequired,
    onTitleTextInput: PropTypes.func.isRequired,
    onContentTextInput: PropTypes.func.isRequired,
    onNoteSave: PropTypes.func.isRequired
};