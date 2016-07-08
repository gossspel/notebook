import React, { Component, PropTypes } from 'react';
import NoteBookSideBar from './NoteBookSideBar';
import NoteBookContent from './NoteBookContent';

export default class NoteBook extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeNoteId: 0,
            activeTitle: '',
            activeContent: '',
            initialTinyMCEContent: ''
        };
    }

    handleTitleTextInput(titleText) {
        this.setState({
            activeTitle: titleText
        });
    }

    handleContentTextInput(contentText) {
        this.setState({
            activeContent: contentText
        });
    }

    handleNoteChange(noteId, title, content) {
        this.setState({
            activeNoteId: noteId,
            activeTitle: title,
            activeContent: content,
            initialTinyMCEContent: content
        });
    }
    
    handleNoteSave() {
        // start saving the note
        console.log(this.state);
    }

    render() {
        return (
            <div className="note-book">
                <NoteBookSideBar notes={this.props.notes} />
                <NoteBookContent
                    activeTitle={this.state.activeTitle}
                    initialTinyMCEContent={this.state.initialTinyMCEContent}
                    onTitleTextInput={this.handleTitleTextInput.bind(this)}
                    onContentTextInput={this.handleContentTextInput.bind(this)}
                    onNoteSave={this.handleNoteSave.bind(this)}
                />
            </div>
        );
    }
}

NoteBook.propTypes = {
    notes: PropTypes.array.isRequired
};