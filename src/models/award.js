/**
 * name: Priya Prasad Patra
 * date: 20/04/2021
 * version:1.0.0
 *
 * adding the award fields
 *
 * what type of award emmployee get
 *
 */

import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const { ObjectId } = Schema.Types;

const AwardSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String
    },
    awardedTo: {
        type: ObjectId,
        required: true,
        ref: 'users'
    },
    awardedFrom: {
        type: ObjectId,
        required: true,
        ref: 'users'
    },
    documents: {
        type: String
    },
});
AwardSchema.set('timestamps', true);


export default mongoose.model('award', AwardSchema);
