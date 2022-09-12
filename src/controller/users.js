import { createUser } from '../services/userService/createUser';
import { getAllUser } from '../services/userService/getAllUser';
import { authenticateUsers } from '../services/userService/authenticateUsers';
import { updateUser } from '../services/userService/updateUser';
import { deleteUser } from '../services/userService/deleteUser';
import { getSingleUser } from '../services/userService/getSingleUser';
import { searchUser } from '../services/userService/searchUser';
import { getUserByDeptId } from '../services/userService/getUserByDeptId';
import { allUserSearch } from '../services/userService/allUserSearch';

/**
 * Create a new user.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

export function create(req, res, next) {
    createUser(req.body)
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}

/**
 * Authenticate user.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

export function authenticate(req, res, next) {
    authenticateUsers(req.body)
        .then((data) => {
            res.status(200).json({ data });
        })
        .catch((err) => next(err));

}
/**
 * Get all user list
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

export function fetchAll(req, res, next) {
    getAllUser()
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}

/**
 * Get single user data
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

export function fetchOne(req, res, next) {
    getSingleUser(req.userId)
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}

/**
 * Update user data
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

export function update(req, res, next) {
    updateUser(req.body, req.query)
        .then((data) =>
            res.status(200).json({ data }))
        .catch((err) => next(err));
}

/**
 * Delete user
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

export function userDelete(req, res, next) {
    deleteUser(req.query)
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}

/**
 * Search user
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

export function search(req, res, next) {
    searchUser(req.query)
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}

/**
 * Get user by department Id
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

export function fetchuserbydeptid(req, res, next) {
    getUserByDeptId(req.query)
        .then((data) =>
            res.status(200).json({ data }))
        .catch((err) => next(err));
}

/**
 * Search by name, username, userId, useremail 
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

export function searchBy(req, res, next) {
    allUserSearch(req.query)
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}
