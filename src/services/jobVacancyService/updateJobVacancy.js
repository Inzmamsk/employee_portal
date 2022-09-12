/**
 * name: Sk Inzamamuddin
 * date: 11/06/2021
 * version:1.0.0
 */

import Jobvacancy from '../../models/jobVacancy';

/**
 * Update Job Vacancy.
 *
 * @returns {Promise}
 */

export async function updateJobVacancy(jobvacancy, jobvacancies, userId) {
    const jobVacancyData = await Jobvacancy.findByIdAndUpdate(jobvacancies.id, {
        name: jobvacancy.name,
        description: jobvacancy.description,
        location: jobvacancy.location,
        catagory: jobvacancy.catagory,
        jobId: jobvacancy.jobId,
        active: jobvacancy.active,
        createdBy: userId,
        companyId: jobvacancy.companyId,
        departmentId: jobvacancy.departmentId,
        numberOfVacancy: jobvacancy.numberOfVacancy,
        document: jobvacancy.document

    });
    return jobVacancyData;
}
