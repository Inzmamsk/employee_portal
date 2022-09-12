/**
 * name: Priya Prasad Patra
 * date: 20/04/2021
 * version:1.0.0
 *
 * adding all noticeFields on NoticeSchema
 *
 */

import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const { ObjectId } = Schema.Types;

const NoticeSchema = new Schema({
    body: {
        type: String,
        trim: true,
        required: true
    },
    createdBy: {
        type: ObjectId,
        required: true,
        ref: 'users'
    },
    objectType: {
        type: String
    },
    objectId: {
        type: ObjectId
    },
    type: {
        type: String
    },
    document: {
        type: String
    },
    updatedAt: {
        type: Date
    },
    updatedBy: {
        type: ObjectId,
        ref: 'users'
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    deletedBy: {
        type: ObjectId,
        trim: true,
        ref: 'users'
    },
    deletedAt: {
        type: Date
    },
});
NoticeSchema.set('timestamps', true);

export default mongoose.model('notice', NoticeSchema);
