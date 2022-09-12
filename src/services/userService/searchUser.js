/**
 * name: Sk Inzamamuddin
 * date: 29/04/2021
 * version: 1.0.0
 */

import User from '../../models/users';

/**
 * Search user.
 *
 * @returns {Promise}
 */

export async function searchUser(user) {
    const userData = await User.find({ 'name': { $regex: user.name, $options: 'i' } });
    return userData;
}