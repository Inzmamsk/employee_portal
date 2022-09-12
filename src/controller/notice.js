/**
 * name: Sk Inzamamuddin
 * date: 28/04/2021
 * version:1.0.0
 */

import { createNotice } from '../services/noticeService/createNotice';
import { fetchAllNotice } from '../services/noticeService/fetchAllNotice';
import { fetchOneNotice } from '../services/noticeService/fetchOneNotice';
import { updateNotice } from '../services/noticeService/updateNotice';
import { deleteNotice } from '../services/noticeService/deleteNotice';

/**
* Create a new notice.
*
* @param {Object} req
* @param {Object} res
* @param {Function} next
*/

export function create(req, res, next) {
    createNotice(req.body)
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}

/**
 * Update notice
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

export function update(req, res, next) {
    updateNotice(req.body, req.query)
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}

/**
 * Get single notice
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

export function fetchOne(req, res, next) {
    fetchOneNotice(req.query)
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}

/**
 * Get all notice
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

export function fetchAll(req, res, next) {
    fetchAllNotice()
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}


/**
 * Delete notice
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

export function noticeDelete(req, res, next) {
    deleteNotice(req.query)
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}