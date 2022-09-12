/**
 * name: Sk Inzamamuddin
 * date: 20/04/2021
 * version:1.0.0
 */

import { createPersonalInfo } from '../services/personalInfoService/createPersonalInfo';
import { updatePersonalInfo } from '../services/personalInfoService/updatePersonalInfo';
import { getOnePersonalInfo } from '../services/personalInfoService/getOnePersonalInfo';
import { getAllPersonalInfo } from '../services/personalInfoService/getAllPersonalInfo';
import { deletePersonalInfo } from '../services/personalInfoService/deletePersonalInfo';
import { updateFiles } from '../services/personalInfoService/updateImage';
import { fetchPersonalInfoByUserId } from '../services/personalInfoService/getPersonalInfoByUserId';

/**
* Create a new PersonalInfo.
*
* @param {Object} req
* @param {Object} res
* @param {Function} next
*/

export function create(req, res, next) {
    createPersonalInfo(req.body)
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}


/**
* Update PersonalInfo.
*
* @param {Object} req
* @param {Object} res
* @param {Function} next
*/

export function update(req, res, next) {
    updatePersonalInfo(req.body, req.query)
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}

/**
* Get One PersonalInfo.
*
* @param {Object} req
* @param {Object} res
* @param {Function} next
*/

export function getOne(req, res, next) {
    getOnePersonalInfo(req.query)
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}

/**
 * Get all personalInfo
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

export function getAll(req, res, next) {
    getAllPersonalInfo()
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}

/**
 * Delete personalInfo
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

export function personalInfoDelete(req, res, next) {
    deletePersonalInfo(req.query)
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}

/**
* Update file path
*
* @param {Object} req
* @param {Object} res
* @param {Function} next
*/

export function updateFile(req, res, next) {
    //console.log(req, "getdataaaaaaaaaaaaaaaaaaaaaa");
    //console.log(res, "rrrrrreeeeeeeeeeeeeeeeeeeeeeeeeeeeessssss");
    updateFiles(req)
        .then((data) => {
            //console.log(data, 'gggggggggggggggg');
            res.status(200).json({ data });
        })
        .catch((err) => next(err));
}

/**
* Get PersonalInfo by userId.
*
* @param {Object} req
* @param {Object} res
* @param {Function} next
*/

export function getPersonalInfoByUserId(req, res, next) {
    fetchPersonalInfoByUserId(req.query)
        .then((data) => res.status(200).json({ data }))
        .catch((err) => next(err));
}