/**
 * name: Priya Prasad Patra
 * date: 21/04/2021
 * version:1.0.0
 *
 * adding the blog fields
 *
 *
 */

import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const { ObjectId } = Schema.Types;

const BlogSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true
    },
    image: {
        type: String,
        trim: true
    },
    type: {
        type: String,
        trim: true
    },
    createdBy: {
        type: ObjectId,
        required: true,
        ref: 'users'
    },
    isDeleted: {
        type: Boolean
    },
    deletedBy: {
        type: ObjectId,
        ref: 'users'
    },
    private: {
        type: Boolean
    },
    privateFor: {
        type: String,
        trim: true,
    },
    published: {
        type: Boolean,
        default: false,
        required: true
    },
    slug: {
        type: String,
        trim: true
    },
    editHistoryId: {
        type: ObjectId,
        ref: 'editHistory'
    },

});
BlogSchema.set('timestamps', true);

export default mongoose.model('blog', BlogSchema);
