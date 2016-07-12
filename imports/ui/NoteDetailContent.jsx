import React, { Component, PropTypes } from 'react';
import TinyMCE from 'react-tinymce';

export default class NoteDetailContent extends Component {
    handleEditorChange(e) {
        this.props.onContentTextInput(e.target.getContent());
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onNoteSave();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <TinyMCE
                    className="note-detail-content"
                    content={this.props.initialTinyMCEContent}
                    config={{
                        inline: true,
                        plugins: "autolink",
                        extended_valid_elements: 'a[href|target=_blank]',
                        fixed_toolbar_container: "#note-book-toolbar-id"
                    }}
                    onChange={this.handleEditorChange.bind(this)}
                />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

NoteDetailContent.propTypes = {
    initialTinyMCEContent: PropTypes.string.isRequired,
    onContentTextInput: PropTypes.func.isRequired,
    onNoteSave: PropTypes.func.isRequired
};