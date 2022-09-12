/**
 * name:Priya Prasad Patra
 * date:3/6/2021
 * version:1.0.0
 */

import { createHolidayList } from '../services/holidayListService/createHolidayList';
import { getAllHolidayList } from '../services/holidayListService/getAllHolidayList';

/**
 * Create a new holidayList.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

export function create(req, res, next) {
    createHolidayList(req.body)
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}

/**
 * Get All holidayList data
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

export function getAll(req, res, next) {
    getAllHolidayList()
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}