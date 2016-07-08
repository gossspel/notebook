import React, { Component, PropTypes } from 'react';
import NoteBookSideBar from './NoteBookSideBar';
import NoteBookContent from './NoteBookContent';

export default class NoteBook extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTitle: '',
            activeContent: '',
            preSavingContent: ''
        };
    }

    handleTitleTextInput(titleText) {
        this.setState({
            activeTitle: titleText
        });
    }

    handleContentTextInput(contentText) {
        this.setState({
            preSavingContent: contentText
        });
    }

    handleNoteChange(title, content) {
        this.setState({
            activeTitle: title,
            activeContent: content
        });
    }

    render() {
        return (
            <div className="note-book">
                <NoteBookSideBar notes={this.props.notes} />
                <NoteBookContent
                    activeTitle={this.state.activeTitle}
                    activeContent={this.state.activeContent}
                    onTitleTextInput={this.handleTitleTextInput.bind(this)}
                    onContentTextInput={this.handleContentTextInput.bind(this)}
                />
            </div>
        );
    }
}

NoteBook.propTypes = {
    notes: PropTypes.array.isRequired
};