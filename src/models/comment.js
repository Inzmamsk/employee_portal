/**
 * name: Priya Prasad Patra
 * date: 21/04/2021
 * version:1.0.0
 *
 * adding the comment fields
 *
 *
 */

import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const { ObjectId } = Schema.Types;

const CommentSchema = new Schema({
    body: {
        type: String,
        trim: true,
        required: true
    },
    objectType: {
        type: String,
        required: true
    },
    objectId: {
        type: ObjectId,
        required: true
    },
    createdBy: {
        type: ObjectId,
        required: true,
        ref: 'users'
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    deletedBy: {
        type: ObjectId,
        ref: 'users'
    },
    replyTo: {
        type: ObjectId,
        required: true,
        ref: 'comment'
    },
});
CommentSchema.set('timestamps', true);

export default mongoose.model('comment', CommentSchema);
