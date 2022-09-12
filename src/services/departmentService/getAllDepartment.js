/**
 * name: Sk Inzamamuddin
 * date: 27/04/2021
 * version: 1.0.0
 */

import Department from '../../models/departments';

/**
 * Get all department.
 *
 * @returns {Promise}
 */

export async function fetchAllDepartment() {
    const userData = await Department.find().populate('companyId');
    return userData;
}