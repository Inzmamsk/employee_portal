/**
 * name:Priya Prasad Patra
 * date:29/4/2021
 * version:1.0.0
 */

import { createAttendance } from '../services/attendanceService/createAttendance';
import { updateAttendance } from '../services/attendanceService/updateAttendance';
import { getAllAttendance } from '../services/attendanceService/getAllAttendance';
import { getSingleAttendance } from '../services/attendanceService/getAttendance';
import { deleteAttendance } from '../services/attendanceService/deleteAttendance';

/**
 * Create a new attendance
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

export function create(req, res, next) {
    createAttendance(req.body, req.userId)
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}

/**
 * Update attendance data
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

export function update(req, res, next) {
    updateAttendance(req.body, req.query, req.userId)
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}

/**
 * Get All attendance data
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

export function getAll(req, res, next) {
    getAllAttendance()
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}

/**
 * Get single attendance data
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

export function get(req, res, next) {
    getSingleAttendance(req.query)
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}

/**
 * Delete attendance
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

export function attendanceDelete(req, res, next) {
    deleteAttendance(req.query)
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}
