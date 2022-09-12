/**
 * name: Priya Prasad Patra
 * date: 21/04/2021
 * version:1.0.0
 *
 * adding the jobVacancy fields
 *
 * how many post vacancy for job and what are the respective field
 */

import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const { ObjectId } = Schema.Types;

const JobVacancySchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    description: {
        type: String,
        trim: true,
    },
    location: {
        type: String,
    },
    catagory: {
        type: String,
        required: true,
    },
    jobId: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        required: true,
        default: false,
    },
    createdBy: {
        type: ObjectId,
        required: true,
        ref: 'users',
    },
    companyId: {
        type: ObjectId,
        required: true,
        ref: 'company',
    },
    departmentId: {
        type: ObjectId,
        required: true,
        ref: 'departments'
    },
    numberOfVacancy: {
        type: Number,
        required: true,
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    deletedAt: {
        type: Date,
    },
    document: {
        type: String,
    },
});
JobVacancySchema.set('timestamps', true);

export default mongoose.model('jobvacancy', JobVacancySchema);
