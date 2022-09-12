/**
 * name: Sk Inzamamuddin
 * date: 07/05/2021
 * version: 1.0.0
 */

import User from '../../models/users';

/**
 * Get user by department Id.
 *
 * @returns {Promise}
 */

export async function getUserByDeptId(user) {
    const userData = await User.find({ departmentId: user.departmentId });
    return userData;
}