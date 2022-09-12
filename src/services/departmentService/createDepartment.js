/**
 * name: Sk Inzamamuddin
 * date: 27/04/2021
 * version: 1.0.0
 */

import Department from '../../models/departments';

/**
 * create department.
 *
 * @returns {Promise}
 */

export async function createDepartment(department) {
    const departmentData = {
        name: department.name,
        description: department.description,
        location: department.location,
        companyId: department.companyId
    };
    const newDepartment = await Department.create(departmentData);
    return newDepartment;
}