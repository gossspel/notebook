import React, { Component, PropTypes } from 'react';
import NoteDetailTitle from './NoteDetailTitle';
import NoteDetailContent from './NoteDetailContent';

export default class NoteBookMainView extends Component {
    render() {
        return (
            <div className="note-book-main-view">
                { this.props.showNullState ?
                    <div>
                        <h2 className="null-state-title">
                            This is nuts! You don't have any open note, click on the Notebook above to make a new one.
                        </h2>
                        <div className="null-state-graphics"></div>
                    </div> :
                    <div>
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
                }
            </div>
        );
    }
}

NoteBookMainView.propTypes = {
    activeTitle: PropTypes.string.isRequired,
    onContentTextInput: PropTypes.func.isRequired,
    onNoteSave: PropTypes.func.isRequired,
    onShowPreview: PropTypes.func.isRequired,
    onTitleTextInput: PropTypes.func.isRequired,
    showNullState: PropTypes.bool.isRequired,
    showPreview: PropTypes.bool.isRequired,
    showSave: PropTypes.bool.isRequired,
    storedContent: PropTypes.string.isRequired
};