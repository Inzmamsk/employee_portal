/** 
 * name:Priya Prasad Patra
 * date:10/6/2021
 * version:1.0.0
*/

import { createBlog } from '../services/blogService/createBlog';
import { updateBlog } from '../services/blogService/updateBlog';
import { getAllBlog } from '../services/blogService/getAllBlog';
import { getSingleBlog } from '../services/blogService/getBlog';
import { deleteBlog } from '../services/blogService/deleteBlog';
import { searchBlog } from '../services/blogService/searchBlog';


/**
 * Create a new blog
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */


export function create(req, res, next) {
    createBlog(req.body, req.userId)
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}


/**
 * Update blog data
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

export function update(req, res, next) {
    updateBlog(req.body, req.query)
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}

/**
 * Get All blog data
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

export function getAll(req, res, next) {
    getAllBlog()
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}


/**
 * Get single blog data
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

export function get(req, res, next) {
    getSingleBlog(req.query)
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}

/**
 * Delete blog
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

export function blogDelete(req, res, next) {
    deleteBlog(req.query)
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}

/**
 * Serach blog
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

export function search(req, res, next) {
    searchBlog(req.query)
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}
