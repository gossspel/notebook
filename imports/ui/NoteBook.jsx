import React, { Component, PropTypes } from 'react';
import NoteBookSideBar from './NoteBookSideBar';
import NoteBookContent from './NoteBookContent';
import { Meteor } from 'meteor/meteor';

export default class NoteBook extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeNoteId: '',
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
        if (this.state.activeNoteId === '') {
            // Create new note
            var callbackArrowFunction = (error, result) => { this.state.activeNoteId = result; };
            Meteor.call('notes.insert', this.state.activeTitle, this.state.activeContent, callbackArrowFunction);
        } else {
            // Update existing note
            Meteor.call('notes.update', this.state.activeNoteId, this.state.activeTitle, this.state.activeContent);
        }
    }

    render() {
        return (
            <div className="note-book">
                <NoteBookSideBar
                    notes={this.props.notes}
                    onNoteChange={this.handleNoteChange.bind(this)}
                />
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