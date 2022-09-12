/**
 * name: Sk Inzamamuddin
 * date: 11/06/2021
 * version:1.0.0
 */

import { createJobVacancy } from '../services/jobVacancyService/createJobVacancy';
import { getAllJobVacancy } from '../services/jobVacancyService/getAllJobVacancy';
import { getOneJobVacancy } from '../services/jobVacancyService/getOneJobVacancy';
import { updateJobVacancy } from '../services/jobVacancyService/updateJobVacancy';
import { deleteJobVacancy } from '../services/jobVacancyService/deleteJobVacancy';
import { searchJobVacancy } from '../services/jobVacancyService/searchJobVacancy';

/**
* Create a Job Vacancy.
*
* @param {Object} req
* @param {Object} res
* @param {Function} next
*/

export function create(req, res, next) {
    createJobVacancy(req.body, req.userId)
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}

/**
 * Get all Job Vacancy
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

export function fetchAll(req, res, next) {
    getAllJobVacancy()
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}

/**
* Get One Job Vacancy.
*
* @param {Object} req
* @param {Object} res
* @param {Function} next
*/

export function fetchOne(req, res, next) {
    getOneJobVacancy(req.query)
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}

/**
* Update Job Vacancy.
*
* @param {Object} req
* @param {Object} res
* @param {Function} next
*/

export function update(req, res, next) {
    updateJobVacancy(req.body, req.query, req.userId)
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}

/**
 * Delete Job Vacancy
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

export function Delete(req, res, next) {
    deleteJobVacancy(req.query)
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}

/**
 * Search Job Vacancy
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

export function search(req, res, next) {
    searchJobVacancy(req.query)
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}