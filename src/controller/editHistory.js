/**
 * name:Priya Prasad Patra
 * date:8/6/2021
 * version:1.0.0
 *
 */

import { getAllEditHistory } from '../services/editHistory/getAllEditHistory';
import { getOneEditHistory } from '../services/editHistory/getOneEditHistory';

/**
 * Get all editHistory
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

export function getAll(req, res, next) {
    getAllEditHistory()
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}

/**
 * Get One editHistory
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

export function getOne(req, res, next) {
    getOneEditHistory(req.query)
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}