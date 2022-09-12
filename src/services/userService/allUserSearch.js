/**
 * name: Sk Inzamamuddin
 * date: 08/06/2021
 * version: 1.0.0
 */

import User from '../../models/users';

/**
 * Search All user.
 *
 * @returns {Promise}
 */

export async function allUserSearch(user) {
    const query = {};
    if (user.name) {
        query.name = { '$regex': user.name, '$options': 'i' };
    }
    if (user.email) {
        query.email = { '$regex': user.email, '$options': 'i' };
    }
    if (user.username) {
        query.username = { '$regex': user.username, '$options': 'i' };
    }
    if (user._id) {
        [{
            $addFields: {
                tempUserId: { $toString: '$_id' },
            }
        },
        {
            $match: {
                tempUserId: { $regex: user._id, $options: 'i' }
            }
        }];
    }
    const userData = await User.find(query, function (err, result) {
        if (err) {
            return err;
        }
    });
    return userData;
}