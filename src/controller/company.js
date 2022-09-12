/**
 * name:Priya Prasad Patra
 * date:27/4/2021
 * version:1.0.0
 */

import { createCompany } from '../services/companyService/createCompany';
import { updateCompany } from '../services/companyService/updateCompany';
import { deleteCompany } from '../services/companyService/deleteCompany';
import { getSingleCompany } from '../services/companyService/getCompany';
import { getAllCompany } from '../services/companyService/getAllCompany';
import { searchCompany } from '../services/companyService/searchCompany';

/**
 * Create a new company.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

export function create(req, res, next) {
    createCompany(req.body)
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}

/**
 * Update company data
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

export function update(req, res, next) {
    updateCompany(req.body, req.query, req.userId)
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}

/**
 * Get single company data
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

export function get(req, res, next) {
    getSingleCompany(req.query)
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}

/**
 * Get All company data
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

export function getAll(req, res, next) {
    getAllCompany()
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}

/**
 * Search company 
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

export function search(req, res, next) {
    searchCompany(req.query)
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}

/**
 * Delete company
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

export function companyDelete(req, res, next) {
    deleteCompany(req.query)
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}
