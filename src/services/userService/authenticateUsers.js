/**
 * name: Sk Inzamamuddin
 * date: 22/04/2021
 * version: 1.0.0
 */
import User from '../../models/users';
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import devConfig from '../../../config/development.json';
import { BadRequest } from '../../utils/errors';

/**
 * create authenticateUsers.
 *
 * @returns {Promise}
 */

export async function  authenticateUsers(user) {
    const userInfo = await  User.findOne({ email: user.email });
    const token = jwt.sign({ _id: userInfo._id }, devConfig.secretKey, { expiresIn: '1day' });
    const pass = bcryptjs.compareSync(user.password, userInfo.password);
    if (pass) {
        return {
            userInfo: userInfo,
            token: token
        };
    }else{
        throw new BadRequest('Not Authenticated');
    }

    
}
