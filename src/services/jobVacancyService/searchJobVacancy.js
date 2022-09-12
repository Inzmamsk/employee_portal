/**
 * name: Sk Inzamamuddin
 * date: 11/06/2021
 * version: 1.0.0
 */

import Jobvacancy from '../../models/jobVacancy';

/**
 * Search Job Vacancy.
 *
 * @returns {Promise}
 */

export async function searchJobVacancy(jobvacancy) {
    const jobVacancyData = await Jobvacancy.find({ 'name': { $regex: jobvacancy.name, $options: 'i' } });
    return jobVacancyData;
}