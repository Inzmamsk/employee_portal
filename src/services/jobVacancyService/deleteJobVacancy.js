/**
 * name: Sk Inzamamuddin
 * date: 11/06/2021
 * version: 1.0.0
 */

import Jobvacancy from '../../models/jobVacancy';

/**
 * Delete Job Vacancy.
 *
 * @returns {Promise}
 */

export async function deleteJobVacancy(jobvacancy) {
    const jobVacancyData = await Jobvacancy.findOneAndRemove(jobvacancy.id);
    return jobVacancyData;
}
