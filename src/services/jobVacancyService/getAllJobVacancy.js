/**
 * name: Sk Inzamamuddin
 * date: 11/06/2021
 * version: 1.0.0
 */

import Jobvacancy from '../../models/jobVacancy';

/**
 * Get all Job Vacancy.
 *
 * @returns {Promise}
 */

export async function getAllJobVacancy() {
    const jobVacancyData = await Jobvacancy.find().populate('createdBy companyId departmentId');
    return jobVacancyData;
}