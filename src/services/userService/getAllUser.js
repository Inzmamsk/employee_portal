/**
 * name: Sk Inzamamuddin
 * date: 22/04/2021
 * version: 1.0.0
 */

import User from '../../models/users';

/**
 * Get all users.
 *
 * @returns {Promise}
 */

export async function getAllUser() {
    const userData = await User.find().populate('reportingManagerId departmentId');
    return userData;
}
