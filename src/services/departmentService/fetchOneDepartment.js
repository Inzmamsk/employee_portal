/**
 * name: Sk Inzamamuddin
 * date: 27/04/2021
 * version: 1.0.0
 */

import Department from '../../models/departments';

/**
 * Get single department by Id.
 *
 * @returns {Promise}
 */

export async function fetchOneDepartment(department) {
    const userData = await Department.findById(department.id).populate('companyId');
    return userData;
}