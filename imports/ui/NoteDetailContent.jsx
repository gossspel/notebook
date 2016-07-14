import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import TinyMCE from 'react-tinymce';

export default class NoteDetailContent extends Component {
    handleEditorChange(e) {
        this.props.onContentTextInput(e.target.getContent());
    }
    
    createMarkup() {
        var rawString = this.props.storedContent;
        return { __html: rawString };
    }

    componentDidUpdate(){
        if (this.props.showPreview == false) {
            // ReactDOM.findDOMNode(this.refs.tinyMCEInput).focus();
        }
    }

    render() {
        console.log('render was fired');
        return (
            <form>
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
                        content={this.props.storedContent}
                        config={{
                            inline: true,
                            plugins: "autolink",
                            extended_valid_elements: 'a[href|target=_blank]',
                            fixed_toolbar_container: "#note-book-toolbar-id"
                        }}
                        onChange={this.handleEditorChange.bind(this)}
                    />
                }
            </form>
        );
    }
}

NoteDetailContent.propTypes = {
    showPreview: PropTypes.bool.isRequired,
    storedContent: PropTypes.string.isRequired,
    onContentTextInput: PropTypes.func.isRequired
};