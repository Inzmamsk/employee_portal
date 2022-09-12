/**
 * name: Priya Prasad Patra
 * date: 20/04/2021
 * version:1.0.0
 *
 * adding the fields of deparatment
 *
 */

import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const { ObjectId } = Schema.Types;

const DepartmentSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    description: {
        type: String,
    },
    location: {
        type: String,
    },
    companyId: {
        type: ObjectId,
        required: true,
        ref: 'company',
    },

});
DepartmentSchema.set('timestamps', true);

export default mongoose.model('departments', DepartmentSchema);
