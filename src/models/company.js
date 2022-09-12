/**
 * name: Priya Prasad Patra
 * date: 20/04/2021
 * version:1.0.0
 *
 * add all  fields of Company
 *
 */

import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const { ObjectId } = Schema.Types;

const CompanySchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    logo: {
        type: String
    },
    about: {
        type: String,
        trim: true
    },
    establishedOn: {
        type: Date,
        required: true
    },
    owner: {
        type: ObjectId,
        required: true,
        ref: 'users'
    },
    location: {
        type: String
    },
    address: {
        type: String,
        trim: true,
        required: true
    },
    phone: {
        type: String,
        trim: true,
        unique: true,
        sparse: true,
        index: true,
        required: [true, 'phone number is required!'],
        validate: {
            validator: function (v) {
                return /^[0][1-9]\d{9}$|^[1-9]\d{9}$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    secondaryNumber: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        sparse: true,
        index: true,
        required: [true, 'email is required'],
        validate: {
            validator: function (v) {
                /* eslint-disable no-useless-escape */
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        },
    },
    website: {
        type: String
    },
    companyUniqueId: {
        type: String,
        required: true
    },
    zipCode: {
        type: String,
        required: true
    },
});
CompanySchema.set('timestamps', true);


export default mongoose.model('company', CompanySchema);
