/**
 * name: Sk Inzamamuddin
 * date: 21/04/2021
 * version: 1.0.0
 *
 * Edit History database models
 */

import mongoose from 'mongoose';
//Define a schema
const Schema = mongoose.Schema;
const { ObjectId } = Schema.Types;
const EditHistorySchema = new Schema({
    items: [
        {
            fieldName: {
                type: String,
                trim: true
            },
            oldValue: {
                type: String,
                trim: true
            },
            newValue: {
                type: String,
                trim: true
            },
        }
    ],
    objectType: {
        type: String,
        required: true
    },
    objectId: {
        type: ObjectId,
        required: true,
    },
    editedBy: {
        type: ObjectId,
        required: true,
        ref: 'users'
    },
});
EditHistorySchema.pre('save', function (next) {
    next();
});
export default mongoose.model('edithistory', EditHistorySchema);
