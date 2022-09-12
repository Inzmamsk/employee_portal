/**
 * name: Sk Inzamamuddin
 * date: 27/04/2021
 * version:1.0.0
 */

import { createDepartment } from '../services/departmentService/createDepartment';
import { updateDepartment } from '../services/departmentService/updateDepartment';
import { fetchOneDepartment } from '../services/departmentService/fetchOneDepartment';
import { fetchAllDepartment } from '../services/departmentService/getAllDepartment';
import { deleteDepartment } from '../services/departmentService/deleteDepartment';
import { searchDepartment } from '../services/departmentService/searchDepartment';

/**
* Create a new departments.
*
* @param {Object} req
* @param {Object} res
* @param {Function} next
*/

export function create(req, res, next) {
    createDepartment(req.body)
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}

/**
 * Update department
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

export function update(req, res, next) {
    updateDepartment(req.body, req.query)
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}

/**
 * Get single department
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

export function fetchOne(req, res, next) {
    fetchOneDepartment(req.query)
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}

/**
 * Get all department data
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

export function fetchAll(req, res, next) {
    fetchAllDepartment()
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}

/**
 * Delete department
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

export function departmentDelete(req, res, next) {
    deleteDepartment(req.query)
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}

/**
 * Search department with regex search
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

export function search(req, res, next) {
    searchDepartment(req.query)
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}