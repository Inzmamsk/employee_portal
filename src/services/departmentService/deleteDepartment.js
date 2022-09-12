/**
 * name: Sk Inzamamuddin
 * date: 27/04/2021
 * version: 1.0.0
 */

import Department from '../../models/departments';

/**
 * Delete department.
 *
 * @returns {Promise}
 */

export async function deleteDepartment(department) {
    const departmentData = await Department.findOneAndRemove(department.id);
    return departmentData;
}
