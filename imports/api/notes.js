import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Notes = new Mongo.Collection('notes');

Meteor.methods({
    'notes.insert'(title, content) {
        check(title, String);
        check(content, String);

        Notes.insert({
            title: title,
            content: content,
            createAt: new Date()
        });
    },

    'notes.remove'(noteId) {
        check(noteId, String);
        Notes.remove(noteId);
    },

    'notes.updateTitle'(noteId, newTitle) {
        check(newTitle, string);
        Notes.update(noteId, { $set: { title: newTitle } });
    },

    'notes.updateContent'(noteId, newContent) {
        check(newContent, string);
        Notes.update(noteId, { $set: { cotent: newContent } });
    }
});