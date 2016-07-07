import React, { Component, PropTypes } from 'react';

export default class NoteDetailTitle extends Component {
    render() {
        return (
            <div className="note-detail-title">
                <form>
                    <input
                        className="note-detail-title-input"
                        type="text"
                        placeholder="Title your note"
                        value=""
                    />
                </form>
            </div>
        );
    }
}