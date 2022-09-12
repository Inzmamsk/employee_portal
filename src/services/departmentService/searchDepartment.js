/**
 * name: Sk Inzamamuddin
 * date: 27/04/2021
 * version: 1.0.0
 */

import Department from '../../models/departments';

/**
 * Search department.
 *
 * @returns {Promise}
 */

export async function searchDepartment(department) {
    const departmentData = await Department.find({ 'name': { $regex: department.name, $options: 'i' } });
    return departmentData;
}