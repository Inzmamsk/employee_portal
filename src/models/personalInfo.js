/**
 * name: Sk Inzamamuddin
 * date: 19/04/2021
 * version: 1.0.0
 *
 * personal-info database models
 */

import mongoose from 'mongoose';

//Define a schema
const Schema = mongoose.Schema;
const { ObjectId } = Schema.Types;

const PersonalInfoSchema = new Schema({
    userId: {
        type: ObjectId,
        required: [true, 'UserId is required!'],
        ref: 'users'
    },
    avatar: {
        type: String,
        trim: true,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Others']
    },
    dob: {
        type: Date,
        required: [true, 'DOB is required!']
    },
    secondaryEmail: {
        type: String,
        trim: true
    },
    secondaryPhone: {
        type: String,
        trim: true
    },
    designation: {
        type: String,
        trim: true,
        required: [true, 'Designation is required!']
    },
    coverImage: {
        type: String,
        trim: true
    },
    about: {
        type: String,
        trim: true
    },
    cv: {
        type: String,
        trim: true,
        required: [true, 'CV is required!']
    },
    skills: [
        {
            expOnSkills: {
                type: String,
                trim: true
            },
            skillName: {
                type: String,
                trim: true
            },
            description: {
                type: String,
                trim: true
            },
            certification: {
                type: String,
                trim: true
            }
        }
    ],
    experience: [
        {
            companyName: {
                type: String,
                trim: true
            },
            designation: {
                type: String,
                trim: true
            },
            skills: {
                type: String,
                trim: true
            },
            numbersOfYearsWorked: {
                type: String,
                trim: true
            },
            projectDetails: [
                {
                    projectName: {
                        type: String,
                        trim: true
                    },
                    description: {
                        type: String,
                        trim: true
                    }
                }
            ]
        }
    ],
    adharcard: {
        type: String,
        trim: true
    },
    bloodGroup: {
        type: String,
        trim: true
    },
    address: [
        {
            lane: {
                type: String,
                trim: true
            },
            landMark: {
                type: String,
                trim: true
            },
            city: {
                type: String,
                trim: true
            },
            zipCode: {
                type: String,
                trim: true
            }
        }
    ],
    familyDetails: [
        {
            name: {
                type: String,
                trim: true
            },
            age: {
                type: String,
                trim: true
            },
            relation: {
                type: String,
                trim: true
            },
            phone: {
                type: String,
                trim: true
            }
        }
    ],
});
PersonalInfoSchema.set('timestamps', true);

export default mongoose.model('personalinfo', PersonalInfoSchema);
