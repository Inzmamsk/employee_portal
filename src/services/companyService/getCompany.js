/**
 * name: Priya Prasad Patra
 * date: 27/04/2021
 * version: 1.0.0
 */

import Company from '../../models/company';

/**
 * Get single company
 *
 * @returns {Promise}
 */

export async function getSingleCompany(company) {
    const companyData = await Company.findById(company.id).populate('owner');
    return companyData;
}
