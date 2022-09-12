/**
 * name: Priya Prasad Patra
 * date: 21/04/2021
 * version:1.0.0
 *
 * adding the Okr fields
 *
 * what is the goal and how much goal employe achieved
 */

import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const { ObjectId } = Schema.Types;

const OkrSchema = new Schema({
    userId: {
        type: ObjectId,
        required: true,
        ref: 'users'
    },
    status: {
        type: String,
        trim: true,
        required: true
    },
    achieved: {
        type: Boolean,
        required: true,
        default: false
    },
    approvedBy: {
        type: ObjectId,
        required: true,
        ref:'users'
    },
    items: [
        {
            skills: {
                type: String,
                trim: true,
                require: true
            },
            startDate: {
                type: Date,
                default: Date.now
            },
            endDate: {
                type: Date
            },
            description: {
                type: String
            },
            assignBy: {
                type: ObjectId,
                require: true,
                ref:'user'
            }
        }
    ],
});
OkrSchema.set('timestamps', true);

export default mongoose.model('okr', OkrSchema);
