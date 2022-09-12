/**
 * name: Priya Prasad Patra
 * date: 20/04/2021
 * version:1.0.0
 *
 * adding all fields of assignment in AssignmentSchema
 *
 * A manager assign task to employee
 *
 */


import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const { ObjectId } = Schema.Types;

const AssignmentSchema = new Schema({
    assignmentTo: {
        type: ObjectId,
        required: true,
        ref: 'users'
    },
    assignmentBy: {
        type: ObjectId,
        required: true,
        ref: 'users'
    },
    document: {
        type: String
    },
    link: {
        type: String
    },
    notes: {
        type: String,
        trim: true
    },
    title: {
        type: String,
        trim: true,
        required: true
    },
});
AssignmentSchema.set('timestamps', true);

export default mongoose.model('assignment', AssignmentSchema);
