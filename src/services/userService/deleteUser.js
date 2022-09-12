/**
 * name: Sk Inzamamuddin
 * date: 22/04/2021
 * version: 1.0.0
 */

import User from '../../models/users';

/**
 * Delete users.
 *
 * @returns {Promise}
 */

export async function deleteUser(user) {
    const userData = await User.findOneAndRemove(user.id);
    return userData;
}
