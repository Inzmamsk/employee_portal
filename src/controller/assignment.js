/** 
 * name:Priya Prasad Patra
 * date:28/4/2021
 * version:1.0.0
*/

import { createAssignment } from '../services/assignmentService/createAssignment';
import { updateAssignment } from '../services/assignmentService/updateAssignment';
import { getSingleAssignment } from '../services/assignmentService/getAssignment';
import { getAllAssignment } from '../services/assignmentService/getAllAssignment';
import { deleteAssignment } from '../services/assignmentService/deleteAssignment';

/**
 * Create a new assignment
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

export function create(req, res, next) {
    createAssignment(req.body)
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}

/**
 * Update assignment data
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

export function update(req, res, next) {
    updateAssignment(req.body, req.query)
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}

/**
 * Get single assignment data
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

export function get(req, res, next) {
    getSingleAssignment(req.query)
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}

/**
 * Get All assignment data
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

export function getAll(req, res, next) {
    getAllAssignment()
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}

/**
 * Delete assignment
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

export function assignmentDelete(req, res, next) {
    deleteAssignment(req.query)
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}

