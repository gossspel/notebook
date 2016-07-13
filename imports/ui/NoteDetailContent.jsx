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

    createMarkup() {
        var rawString = this.props.initialTinyMCEContent;
        return { __html: rawString };
    }

    render() {
        console.log('render was fired');
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                {
                    (this.props.showPreview == true) ?
                    <div
                        className="note-detail-content"
                        dangerouslySetInnerHTML={this.createMarkup()}
                    >
                    </div> :
                    <TinyMCE
                        className="note-detail-content"
                        ref="tinyMCEInput"
                        content={this.props.initialTinyMCEContent}
                        config={{
                            inline: true,
                            plugins: "autolink",
                            extended_valid_elements: 'a[href|target=_blank]',
                            fixed_toolbar_container: "#note-book-toolbar-id"
                        }}
                        onChange={this.handleEditorChange.bind(this)}
                    />
                }
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

NoteDetailContent.propTypes = {
    showPreview: PropTypes.bool.isRequired,
    initialTinyMCEContent: PropTypes.string.isRequired,
    onContentTextInput: PropTypes.func.isRequired,
    onNoteSave: PropTypes.func.isRequired
};