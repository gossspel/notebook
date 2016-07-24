import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Notes } from '../mongo/collections';

Meteor.methods({
    'notes.insert'(title, content) {
        check(title, String);
        check(content, String);
        
        var insertedDate = new Date();
        
        return Notes.insert({
            title: title,
            content: content,
            createdAt: insertedDate,
            updatedAt: insertedDate
        });
    },

    'notes.update'(noteId, newTitle, newContent) {
        check(newTitle, String);
        check(newContent, String);
        var updatedDate = new Date();
        Notes.update(noteId, { $set: { title: newTitle, content: newContent, updatedAt: updatedDate } });
    },

    'notes.remove'(noteId) {
        check(noteId, String);
        Notes.remove(noteId);
    },

    'notes.updateTitle'(noteId, newTitle) {
        check(newTitle, String);
        Notes.update(noteId, { $set: { title: newTitle } });
    },

    'notes.updateContent'(noteId, newContent) {
        check(newContent, String);
        Notes.update(noteId, { $set: { content: newContent } });
    }
});