/**
 * name: Sk Inzamamuddin
 * date: 22/04/2021
 * version: 1.0.0
 */

import User from '../../models/users';

/**
 * Get single user.
 *
 * @returns {Promise}
 */

export async function getSingleUser(userId) {
    const userData = await User.findById(userId).populate('reportingManagerId departmentId');
    return userData;
}
