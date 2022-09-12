/**
 * name: Sk Inzamamuddin
 * date: 11/06/2021
 * version: 1.0.0
 */

import Jobvacancy from '../../models/jobVacancy';

/**
 * create Job Vacancy.
 *
 * @returns {Promise}
 */

export async function createJobVacancy(jobvacancy, userId) {
    const jobVacancyData = {
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
    };
    const jobvacancyDetails = await Jobvacancy.create(jobVacancyData);
    return jobvacancyDetails;
}
