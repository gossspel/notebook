import React, { Component, PropTypes } from 'react';
import NoteBookSideBar from './NoteBookSideBar';
import NoteBookContent from './NoteBookContent';
import { Meteor } from 'meteor/meteor';

export default class NoteBook extends Component {
    constructor(props) {
        super(props);

        // By default show the null state to tell user to add new note by clicking on the notebook icon
        this.state = {
            // Active note data
            activeNoteId: '',
            activeTitle: '',
            activeContent: '',
            storedContent: '',

            // showPreview true = preview mode on, showPreview false = edit mode on
            showPreview: true,

            showSave: false
        };
    }

    isActiveNoteDataEmpty() {
        var isActiveNoteIdEmpty = this.state.activeNoteId == '';
        var isActiveTitleEmpty = this.state.activeTitle == '';
        var isActiveContentEmpty = this.state.activeContent == '';
        var isStoredContentEmpty = this.state.storedContent == '';
        return isActiveNoteIdEmpty && isActiveTitleEmpty && isActiveContentEmpty && isStoredContentEmpty;
    }

    shouldShowNullState() {
        // if activeNoteData is not empty or if showPreview is false, we don't show null state.
        return (this.isActiveNoteDataEmpty() && this.state.showPreview) ? true : false;
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
                    showNullState={this.shouldShowNullState()}
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