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
                    activeContent={this.props.activeContent}
                    onContentTextInput={this.props.onContentTextInput}
                />
            </div>
        );
    }
}

NoteBookContent.propTypes = {
    activeTitle: PropTypes.string.isRequired,
    activeContent: PropTypes.string.isRequired,
    onTitleTextInput: PropTypes.func.isRequired,
    onContentTextInput: PropTypes.func.isRequired
};