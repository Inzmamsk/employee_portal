/**
 * name: Sk Inzamamuddin
 * date: 21/04/2021
 * version: 1.0.0
 *
 * Holiday List database models
 *
 */
import mongoose from 'mongoose';
//Define a schema
const Schema = mongoose.Schema;

const HolidayListSchema = new Schema({
    eventStartDate: {
        type: Date,
        required: [true, 'Event Start Date is required!']
    },
    eventType: {
        type: String,
        trim: true
    },
    note: {
        type: String,
        trim: true
    },
    eventEndDate: {
        type: Date,
        required: [true, 'Event End Date is required!']
    },
});
HolidayListSchema.set('timestamps', true);

export default mongoose.model('holidaylist', HolidayListSchema);
