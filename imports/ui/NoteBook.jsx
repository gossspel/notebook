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
            storedContent: '',
            showPreview: true,
            showSave: false
        };
    }

    handleTitleTextInput(titleText) {
        this.setState({
            activeTitle: titleText,
            showSave: true
        });
    }

    handleContentTextInput(contentText) {
        this.setState({
            activeContent: contentText,
            showSave: true
        });
    }

    handleNoteChange(noteId, title, content) {
        this.setState({
            activeNoteId: noteId,
            activeTitle: title,
            activeContent: content,
            storedContent: content,
            showPreview: true,
            showSave: false
        });
    }

    getContentWithLinks() {
        var matchingPattern = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
        var replaceString = '<a href="$1" target="_blank">$1</a>';
        return this.state.activeContent.replace(matchingPattern, replaceString);
    }

    handleNoteSave() {
        // start saving the note, always show preview afterwards.
        this.state.showPreview = true;
        this.state.showSave = false;

        if (this.state.activeNoteId === '') {
            // For quick porting note from Evernote to Sunnynote
            this.state.activeContent = this.getContentWithLinks();

            // Create new note
            var callbackArrowFunction = (error, result) => { this.state.activeNoteId = result; };
            Meteor.call('notes.insert', this.state.activeTitle, this.state.activeContent, callbackArrowFunction);
        } else {
            // Update existing note
            Meteor.call('notes.update', this.state.activeNoteId, this.state.activeTitle, this.state.activeContent);
        }

        this.state.storedContent = this.state.activeContent;
    }

    handleShowPreview(showOrNot) {
        this.setState({
            showPreview: showOrNot
        });
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
                    storedContent={this.state.storedContent}
                    onTitleTextInput={this.handleTitleTextInput.bind(this)}
                    onContentTextInput={this.handleContentTextInput.bind(this)}
                    onShowPreview={this.handleShowPreview.bind(this)}
                    onNoteSave={this.handleNoteSave.bind(this)}
                    showPreview={this.state.showPreview}
                    showSave={this.state.showSave}
                />
            </div>
        );
    }
}

NoteBook.propTypes = {
    notes: PropTypes.array.isRequired
};