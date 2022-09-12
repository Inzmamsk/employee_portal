/**
 * name: Sk Inzamamuddin
 * date: 22/04/2021
 * version: 1.0.0
 */

import User from '../../models/users';

/**
 * Update user.
 *
 * @returns {Promise}
 */

export async function updateUser(user, userData) {
    const userUpdatedData = await User.findByIdAndUpdate(userData.id, {
        name: user.name,
        email: user.email,
        password: user.password,
        username: user.username,
        phone: user.phone,
        role: user.role,
        phoneVerified: user.phoneVerified,
        emailVerified: user.emailVerified,
        joiningDate: user.joiningDate,
        departmentId: user.departmentId,
        reportingManagerId: user.reportingManagerId
    });
    return userUpdatedData;
}