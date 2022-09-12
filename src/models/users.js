import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';
const saltRounds = 10;
const Schema = mongoose.Schema;
const { ObjectId } = Schema.Types;

const UserSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
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
    password: {
        type: String,
        trim: true,
        required: true,
        minlength: 8,
    },
    username: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        sparse: true,
        index: true,
        required: [true, 'username is required'],
        validate: {
            validator: function (v) {
                /* eslint-disable no-useless-escape */
                return /^[a-zA-Z0-9_.]{6,18}$/.test(v);
            },
            message: props => `${props.value} is not a valid username!`
        }
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
    role: {
        type: Number,
        default: 1,
        index: true
    },
    phoneVerified: {
        type: Boolean,
        default: false,
    },
    emailVerified: {
        type: Boolean,
        default: false
    },
    joiningDate: {
        type: Date,
        default: Date.now()
    },
    departmentId: {
        type: ObjectId,
        ref: 'departments',
        index: true
    },
    reportingManagerId: {
        type: ObjectId,
        ref: 'users',
        index: true
    }

});
// hash user password before saving into database
UserSchema.pre('save', function (next) {
    this.password = bcryptjs.hashSync(this.password, saltRounds);
    next();
});

export default mongoose.model('users', UserSchema);
