/**
 * name: Sk Inzamamuddin
 * date: 27/04/2021
 * version: 1.0.0
 */

import Department from '../../models/departments';

/**
 * Update department.
 *
 * @returns {Promise}
 */

export async function updateDepartment(department, deptData) {
    const updatedDepartment = await Department.findByIdAndUpdate(deptData.id, {
        name: department.name,
        description: department.description,
        location: department.location,
        companyId: department.companyId
    });
    return updatedDepartment;
}
