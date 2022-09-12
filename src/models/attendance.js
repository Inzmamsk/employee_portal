/**
 * name: Priya Prasad Patra
 * date: 20/04/2021
 * version:1.0.0
 *
 * adding the attendance fields
 *
 * To record employee attendance detail
 */


import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const { ObjectId } = Schema.Types;


const AttendanceSchema = new Schema({
    attendanceDate: {
        type: Date,
        default: Date.now,
        required: true
    },
    userId: {
        type: ObjectId,
        required: true,
        ref: 'users'
    },
    startTime: {
        type: Date
    },
    endTime: {
        type: Date
    },
    note: {
        type: String,
        trim: true
    },
});
AttendanceSchema.set('timestamps', true);

export default mongoose.model('attendance', AttendanceSchema);
