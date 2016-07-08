import React, { Component, PropTypes } from 'react';
import TinyMCE from 'react-tinymce';

export default class NoteDetailContent extends Component {
    handleEditorChange(e) {
        this.props.onContentTextInput(e.target.getContent());
    }

    render() {
        return (
            <form>
                <TinyMCE
                    className="note-detail-content"
                    content={this.props.activeContent}
                    config={{
                        inline: true,
                        plugins: "autolink",
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
    activeContent: PropTypes.string.isRequired,
    onContentTextInput: PropTypes.func.isRequired
};