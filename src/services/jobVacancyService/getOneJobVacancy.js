/**
 * name: Sk Inzamamuddin
 * date: 11/06/2021
 * version:1.0.0
 */

import Jobvacancy from '../../models/jobVacancy';

/**
 * Get one Job Vacancy.
 *
 * @returns {Promise}
 */

export async function getOneJobVacancy(jobvacancy) {
    const jobVacancyData = await Jobvacancy.findById(jobvacancy.id);
    return jobVacancyData;
}